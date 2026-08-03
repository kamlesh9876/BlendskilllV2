import { useEffect, useRef } from 'react';
import { throttle } from '../utils/throttle';
import { getDeviceCapabilities } from '../utils/deviceCapabilities';

/**
 * Lightweight WebGL hero scene built with raw WebGL (no three.js dependency):
 * a rotating wireframe icosahedron-like node network + scattered particle
 * field, with gentle cursor parallax. Falls back to nothing if WebGL is
 * unavailable.
 */
interface Hero3DProps {
  /** Extra classes merged onto the wrapping div (e.g. utility classes). */
  className?: string;
  /** Style overrides merged onto the wrapping div's defaults below. */
  style?: React.CSSProperties;
}

export default function Hero3D({ className, style }: Hero3DProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const deviceCaps = getDeviceCapabilities();

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    const gl =
      (canvas.getContext('webgl') as WebGLRenderingContext | null) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) {
      console.warn('Hero3D: WebGL is not available in this browser.');
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // proj is recomputed on every resize so aspect ratio never warps
    let proj = new Float32Array(16);

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      proj = mat4.perspective(Math.PI / 4, canvas.width / canvas.height, 0.1, 100);
    };

    // ---- Shaders ----
    const vsSrc = `
      attribute vec3 aPos;
      uniform mat4 uProj;
      uniform mat4 uView;
      uniform mat4 uModel;
      uniform float uPointSize;
      void main() {
        vec4 p = uProj * uView * uModel * vec4(aPos, 1.0);
        gl_Position = p;
        gl_PointSize = uPointSize;
      }
    `;
    const fsSrc = `
      precision mediump float;
      uniform vec3 uColor;
      uniform float uAlpha;
      void main() {
        gl_FragColor = vec4(uColor, uAlpha);
      }
    `;

    const compile = (type: number, src: string): WebGLShader | null => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Hero3D shader compile error:', gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return; // compile failed, bail out cleanly

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Hero3D program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);

    const aPos = gl.getAttribLocation(program, 'aPos');
    const uProj = gl.getUniformLocation(program, 'uProj');
    const uView = gl.getUniformLocation(program, 'uView');
    const uModel = gl.getUniformLocation(program, 'uModel');
    const uColor = gl.getUniformLocation(program, 'uColor');
    const uAlpha = gl.getUniformLocation(program, 'uAlpha');
    const uPointSize = gl.getUniformLocation(program, 'uPointSize');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.enable(gl.DEPTH_TEST);

    // ---- Neural network flow geometry ----
    const NODE_COUNT = 80;
    const NODE_RADIUS = 4.2;
    // Generate random nodes inside a sphere
    const nodes: number[][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * 2 * Math.PI;
      const r = Math.random() * NODE_RADIUS;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      nodes.push([x, y, z]);
    }
    // Build connections: each node connects to its 3 nearest neighbors
    const lineVerts: number[] = [];
    const K = 3;
    for (let i = 0; i < NODE_COUNT; i++) {
      const distances = nodes
        .map((p, idx) => ({ idx, dist: Math.hypot(p[0] - nodes[i][0], p[1] - nodes[i][1], p[2] - nodes[i][2]) }))
        .filter(d => d.idx !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, K);
      distances.forEach(d => {
        lineVerts.push(...nodes[i], ...nodes[d.idx]);
      });
    }
    const lineBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineVerts), gl.STATIC_DRAW);

    // ---- Particles - use device-aware count ----
    const count = deviceCaps.maxParticles;
    const ppos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2 * Math.PI;
      const phi = Math.acos(2 * v - 1);
      const r = 5 + Math.random() * 2.5;
      ppos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      ppos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      ppos[i * 3 + 2] = r * Math.cos(phi);
    }
    const pBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pBuf);
    gl.bufferData(gl.ARRAY_BUFFER, ppos, gl.STATIC_DRAW);

    // ---- Matrix helpers ----
    const mat4 = {
      identity: () => new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      perspective: (fov: number, aspect: number, near: number, far: number) => {
        const f = 1 / Math.tan(fov / 2);
        const nf = 1 / (near - far);
        return new Float32Array([
          f / aspect, 0, 0, 0,
          0, f, 0, 0,
          0, 0, (far + near) * nf, -1,
          0, 0, 2 * far * near * nf, 0,
        ]);
      },
      translate: (m: Float32Array, x: number, y: number, z: number) => {
        const r = new Float32Array(m);
        r[12] += x; r[13] += y; r[14] += z;
        return r;
      },
      rotateY: (m: Float32Array, a: number) => {
        const c = Math.cos(a), s = Math.sin(a);
        const r = new Float32Array(m);
        const m0 = m[0], m1 = m[1], m2 = m[2], m8 = m[8], m9 = m[9], m10 = m[10];
        r[0] = c * m0 + s * m8; r[1] = c * m1 + s * m9; r[2] = c * m2 + s * m10;
        r[8] = c * m8 - s * m0; r[9] = c * m9 - s * m1; r[10] = c * m10 - s * m2;
        return r;
      },
      rotateX: (m: Float32Array, a: number) => {
        const c = Math.cos(a), s = Math.sin(a);
        const r = new Float32Array(m);
        const m4 = m[4], m5 = m[5], m6 = m[6], m8 = m[8], m9 = m[9], m10 = m[10];
        r[4] = c * m4 - s * m8; r[5] = c * m5 - s * m9; r[6] = c * m6 - s * m10;
        r[8] = c * m8 + s * m4; r[9] = c * m9 + s * m5; r[10] = c * m10 + s * m6;
        return r;
      },
    };

    // Now that mat4 exists, do the initial sizing pass (also sets proj).
    resize();
    window.addEventListener('resize', resize);

    let mouseX = 0, mouseY = 0;
    // Throttle mouse movement to reduce update frequency
    const onMove = throttle((e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    }, 50); // 50ms throttle for smooth but performant updates
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    let targetX = 0, targetY = 0;
    const start = performance.now();
    const render = () => {
      raf = requestAnimationFrame(render);
      const time = (performance.now() - start) / 1000;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      const v = mat4.translate(mat4.identity(), targetX * 6, -targetY * 6, -15);

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(uProj, false, proj);
      gl.uniformMatrix4fv(uView, false, v);

      // Dynamic color shift for rich, vibrant tech visuals
      const rMesh = 0.2 + 0.3 * Math.sin(time * 0.5);
      const gMesh = 0.6 + 0.3 * Math.cos(time * 0.7);
      const bMesh = 0.85 + 0.15 * Math.sin(time * 0.4);

      // Wireframe / node network
      let model = mat4.identity();
      model = mat4.rotateY(model, time * 0.18);
      model = mat4.rotateX(model, time * 0.12);
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniform3f(uColor, rMesh, gMesh, bMesh);
      gl.uniform1f(uAlpha, 0.45);
      gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPos);
      gl.drawArrays(gl.LINES, 0, lineVerts.length / 3);

      // Particles
      let pModel = mat4.identity();
      pModel = mat4.rotateY(pModel, -time * 0.08);
      const rP = 0.3 + 0.4 * Math.cos(time * 0.4);
      const gP = 0.7 + 0.25 * Math.sin(time * 0.6);
      gl.uniformMatrix4fv(uModel, false, pModel);
      gl.uniform3f(uColor, rP, gP, 1.0);
      gl.uniform1f(uAlpha, 0.8);
      gl.uniform1f(uPointSize, 3 * dpr);
      gl.bindBuffer(gl.ARRAY_BUFFER, pBuf);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPos);
      gl.drawArrays(gl.POINTS, 0, count);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);

      // Release GL resources explicitly (matters under StrictMode double-mount
      // and for any parent that mounts/unmounts this component repeatedly)
      gl.deleteBuffer(lineBuf);
      gl.deleteBuffer(pBuf);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);

      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`hero-3d-canvas${className ? ` ${className}` : ''}`}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none', // let clicks/scroll pass through to hero content
        zIndex: 0,
        ...style,
      }}
    />
  );
}
