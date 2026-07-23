import { useEffect, useRef } from 'react';

/**
 * Lightweight WebGL hero scene built with raw WebGL (no three.js dependency):
 * a rotating wireframe icosahedron + scattered particle field, with gentle
 * cursor parallax. Falls back to nothing if WebGL is unavailable.
 */
export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    const gl =
      (canvas.getContext('webgl') as WebGLRenderingContext | null) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

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

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(program);
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

    // ---- Icosahedron wireframe geometry ----
    const t = (1 + Math.sqrt(5)) / 2;
    const verts: number[][] = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ].map((v) => {
      const len = Math.hypot(v[0], v[1], v[2]);
      return v.map((c) => (c / len) * 4.2);
    });
    const edges: [number, number][] = [
      [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
      [1, 5], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
      [3, 4], [3, 6], [3, 8], [3, 9],
      [4, 5], [4, 9], [4, 11],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10],
      [8, 9],
      [10, 11],
    ];
    const lineVerts: number[] = [];
    edges.forEach(([a, b]) => {
      lineVerts.push(...verts[a], ...verts[b]);
    });
    const lineBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineVerts), gl.STATIC_DRAW);

    // ---- Particles ----
    const count = 220;
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
        const m0 = m[0], m1 = m[1], m2 = m[2], m4 = m[4], m5 = m[5], m6 = m[6], m8 = m[8], m9 = m[9], m10 = m[10];
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

    const proj = mat4.perspective(Math.PI / 4, canvas.width / canvas.height, 0.1, 100);
    let view = mat4.identity();
    view = mat4.translate(view, 0, 0, -15);

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
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

      // Wireframe
      let model = mat4.identity();
      model = mat4.rotateY(model, time * 0.18);
      model = mat4.rotateX(model, time * 0.12);
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniform3f(uColor, 0.39, 0.96, 0.83);
      gl.uniform1f(uAlpha, 0.35);
      gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPos);
      gl.drawArrays(gl.LINES, 0, lineVerts.length / 3);

      // Particles
      let pModel = mat4.identity();
      pModel = mat4.rotateY(pModel, -time * 0.08);
      gl.uniformMatrix4fv(uModel, false, pModel);
      gl.uniform3f(uColor, 1, 1, 1);
      gl.uniform1f(uAlpha, 0.7);
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
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return <div ref={containerRef} className="hero-3d-canvas" aria-hidden="true" />;
}
