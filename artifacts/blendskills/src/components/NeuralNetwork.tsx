import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { createNoise3D } from 'simplex-noise';

/**
 * Props for the NeuralNetwork background component.
 */
interface NeuralNetworkProps {
  /** Extra utility classes applied to the wrapper div */
  className?: string;
  /** Inline style overrides for the wrapper div */
  style?: React.CSSProperties;
  /** Override node count directly (bypasses responsive default) */
  nodeCount?: number;
  /** Max distance for drawing a connection line between two nodes */
  maxDist?: number;
  /**
   * Fog color, as a hex string. IMPORTANT: because the Canvas is rendered
   * with `alpha: true` (transparent, so it can sit over your hero section),
   * fog does NOT fade distant particles to transparent — it fades them
   * toward this solid color instead. If this doesn't closely match your
   * actual hero background, distant particles will fade into a visible
   * colored patch rather than disappearing cleanly. Set this to match your
   * hero's real background color, or pass `enableFog={false}` to skip it.
   */
  fogColor?: string;
  /** Toggle the depth-fog effect on/off. Default: true. */
  enableFog?: boolean;
  /**
   * Fraction of the hero's height that the particle field occupies,
   * anchored to the BOTTOM edge. 0.4 = field lives in the bottom 40% of
   * the section; 1.0 = full height (old behavior).
   */
  bottomBandRatio?: number;
}

/**
 * Generates random 3D positions within explicit per-axis bounds (world
 * units). Replaces the old single-scalar "range + bias" approach — explicit
 * min/max per axis is what lets the field be confined to an arbitrary
 * region (e.g. a bottom band) instead of always being a centered/symmetric
 * cloud.
 */
function generatePositions(
  count: number,
  xMin: number, xMax: number,
  yMin: number, yMax: number,
  zMin: number, zMax: number
): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = xMin + Math.random() * (xMax - xMin);
    positions[i * 3 + 1] = yMin + Math.random() * (yMax - yMin);
    positions[i * 3 + 2] = zMin + Math.random() * (zMax - zMin);
  }
  return positions;
}

/** Eased 0→1 falloff: 1 at d=0, 0 at d>=radius, smoothstep curve between. */
function smoothFalloff(d: number, radius: number): number {
  if (d >= radius) return 0;
  const t = 1 - d / radius;
  return t * t * (3 - 2 * t);
}

// How often (in seconds of real elapsed time) the line/connection graph is
// recomputed. Fixed-timestep instead of frame-count-based throttling.
const LINE_UPDATE_INTERVAL = 0.15; // 150ms

// --- Flow field tuning -------------------------------------------------
const NOISE_SCALE = 0.009; // lower spatial frequency = larger, smoother, more coherent swirls
const NOISE_TIME_SCALE = 0.02; // how fast local turbulence evolves
const LOCAL_FLOW_STRENGTH = 0.28; // finer per-particle eddies
const GLOBAL_TIME_SCALE = 0.003; // the shared current changes direction very slowly
const GLOBAL_FLOW_STRENGTH = 0.5; // dominant — this is what makes the WHOLE field drift together
const FLOW_STRENGTH_Z = 0.08;
const SOFT_WALL_ZONE = 0.85; // fraction of the band where the soft cushion starts
const SOFT_WALL_STRENGTH = 1.2; // gentle inward push near the edges, prevents pile-up at walls
const BEND_RADIUS = 260; // cursor influence radius
const BEND_STRENGTH = 14; // stronger, more noticeable reaction to the cursor
const BREATH_AMPLITUDE = 0.18;
const BREATH_SPEED = 0.15;
// DAMPING is a per-frame velocity MULTIPLIER, not a friction amount:
// closer to 1 = LESS friction (momentum persists → fluid, drifting motion).
// closer to 0 = MORE friction (velocity dies almost instantly → jittery,
// frozen-looking motion). This was accidentally inverted in a prior edit
// (set to 0.4, which is much stronger friction than intended) — that,
// combined with a very low MAX_SPEED, was the main reason the field wasn't
// reading as "liquid": momentum was being killed before it could build into
// a visible current.
const DAMPING = 0.95;
const MAX_SPEED = 4; // raised from 1 — still slow, but enough to actually see the current

// --- Line fade tuning ----------------------------------------------------
const FADE_DECAY = 0.8; // per-recompute multiplicative fade for inactive connections
const FADE_GROWTH = 0.4; // per-recompute additive ramp-up for newly active connections
const ALPHA_CUTOFF = 0.03; // below this, a connection is treated as gone

// Custom point shader: soft circular falloff with a brighter core, rendered
// with additive blending.
const POINT_VERTEX_SHADER = /* glsl */ `
  attribute vec3 color;
  varying vec3 vColor;
  uniform float uSize;
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uSize * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const POINT_FRAGMENT_SHADER = /* glsl */ `
  varying vec3 vColor;
  void main() {
    vec2 uv = gl_PointCoord.xy - vec2(0.5);
    float dist = length(uv);
    float glow = smoothstep(0.5, 0.0, dist);
    float core = smoothstep(0.2, 0.0, dist) * 0.6;
    float alpha = glow + core;
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

/**
 * Helper component that creates the point cloud and dynamic, elastically
 * fading line connections, driven by a simplex-noise flow field, confined
 * to a band at the bottom of the viewport.
 */
function NetworkScene({
  nodeCount,
  maxDist = 100,
  bottomBandRatio = 0.4,
}: {
  nodeCount?: number;
  maxDist?: number;
  bottomBandRatio?: number;
}) {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const { viewport, camera } = useThree();

  const resolvedCount = useMemo(() => {
    if (nodeCount) return nodeCount;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? 180 : 400;
  }, [nodeCount]);

  const biasX = 0.6; // right-side lean, unchanged from before

  // Base (z=0) bounds — X keeps the existing right-side bias; Y is now a
  // band anchored to the BOTTOM of the viewport instead of the full height.
  const halfViewW = viewport.width / 2;
  const halfViewH = viewport.height / 2;
  const xMin = -halfViewW + biasX * halfViewW * 0.3;
  const xMax = halfViewW;
  const bandHeight = viewport.height * bottomBandRatio;
  const yMin = -halfViewH; // bottom edge of the viewport
  const yMax = yMin + bandHeight; // top edge of the band

  const depthScale = Math.max(viewport.width, viewport.height);
  const halfRangeZ = depthScale * 0.25;

  const positions = useMemo(
    () => generatePositions(resolvedCount, xMin, xMax, yMin, yMax, -halfRangeZ, halfRangeZ),
    [resolvedCount, xMin, xMax, yMin, yMax, halfRangeZ]
  );

  const breathOffsets = useMemo(() => {
    const arr = new Float32Array(resolvedCount);
    for (let i = 0; i < resolvedCount; i++) arr[i] = Math.random() * Math.PI * 2;
    return arr;
  }, [resolvedCount]);

  const velocities = useMemo(() => new Float32Array(resolvedCount * 3), [resolvedCount]);

  const pointGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);

  const pointMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: POINT_VERTEX_SHADER,
        fragmentShader: POINT_FRAGMENT_SHADER,
        uniforms: { uSize: { value: 5.5 } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  const colors = useMemo(() => {
    const arr = new Float32Array(resolvedCount * 3);
    for (let i = 0; i < resolvedCount; i++) {
      const r = Math.random();
      if (r < 0.85) {
        arr[i * 3] = 1.0; arr[i * 3 + 1] = 1.0; arr[i * 3 + 2] = 1.0; // white
      } else if (r < 0.95) {
        arr[i * 3] = 0.45; arr[i * 3 + 1] = 0.7; arr[i * 3 + 2] = 1.0; // blue
      } else {
        arr[i * 3] = 0.7; arr[i * 3 + 1] = 0.5; arr[i * 3 + 2] = 1.0; // purple
      }
    }
    return arr;
  }, [resolvedCount]);

  const maxLines = resolvedCount * 8;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const adjacency = useMemo(() => new Float32Array(resolvedCount * resolvedCount), [resolvedCount]);

  const lineTimerRef = useRef(0);
  const noise3D = useMemo(() => createNoise3D(), []);

  useFrame((state, delta) => {
    const mouse = state.mouse;
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    const time = state.clock.elapsedTime;

    const camDist = camera.position.z;

    const globalAngle = noise3D(0, 0, time * GLOBAL_TIME_SCALE) * Math.PI * 2;
    const globalVX = Math.cos(globalAngle) * GLOBAL_FLOW_STRENGTH;
    const globalVY = Math.sin(globalAngle) * GLOBAL_FLOW_STRENGTH;

    for (let i = 0; i < resolvedCount; i++) {
      const ix = i * 3;
      const x = positions[ix];
      const y = positions[ix + 1];
      const z = positions[ix + 2];

      velocities[ix] *= DAMPING;
      velocities[ix + 1] *= DAMPING;
      velocities[ix + 2] *= DAMPING;

      // Local turbulence layered on the shared global current.
      const localAngle =
        noise3D(x * NOISE_SCALE, y * NOISE_SCALE, time * NOISE_TIME_SCALE) * Math.PI * 2;
      velocities[ix] += (globalVX + Math.cos(localAngle) * LOCAL_FLOW_STRENGTH) * delta;
      velocities[ix + 1] += (globalVY + Math.sin(localAngle) * LOCAL_FLOW_STRENGTH) * delta;
      const zNoise = noise3D(x * NOISE_SCALE + 1000, y * NOISE_SCALE + 1000, time * NOISE_TIME_SCALE);
      velocities[ix + 2] += zNoise * FLOW_STRENGTH_Z * delta;

      // Cursor bend.
      const dx = x - mouseX;
      const dy = y - mouseY;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const bend = smoothFalloff(d, BEND_RADIUS) * BEND_STRENGTH;
      if (bend > 0) {
        velocities[ix] += (dx / d) * bend * delta;
        velocities[ix + 1] += (dy / d) * bend * delta;
      }

      const speed = Math.hypot(velocities[ix], velocities[ix + 1], velocities[ix + 2]);
      if (speed > MAX_SPEED) {
        const s = MAX_SPEED / speed;
        velocities[ix] *= s;
        velocities[ix + 1] *= s;
        velocities[ix + 2] *= s;
      }

      positions[ix] += velocities[ix] * delta;
      positions[ix + 1] += velocities[ix + 1] * delta;
      positions[ix + 2] += velocities[ix + 2] * delta;

      // Idle breathing.
      const b = breathOffsets[i];
      positions[ix] += Math.sin(time * BREATH_SPEED + b) * BREATH_AMPLITUDE * delta;
      positions[ix + 1] += Math.cos(time * BREATH_SPEED + b) * BREATH_AMPLITUDE * delta;

      // Clamp Z first so we know this node's depth before scaling X/Y bounds.
      if (positions[ix + 2] > halfRangeZ || positions[ix + 2] < -halfRangeZ) {
        positions[ix + 2] = THREE.MathUtils.clamp(positions[ix + 2], -halfRangeZ, halfRangeZ);
        velocities[ix + 2] *= -0.3;
      }

      // Perspective-correct bounds for this node's depth.
      const nodeZ = positions[ix + 2];
      const distance = Math.max(camDist - nodeZ, 1);
      const perspScale = distance / camDist;
      const scaledHalfW = halfViewW * perspScale;
      const scaledHalfH = halfViewH * perspScale;
      const biasOffsetX = biasX * scaledHalfW * 0.3;
      const scaledXMin = -scaledHalfW + biasOffsetX;
      const scaledXMax = scaledHalfW;

      // Bottom-band Y bounds, perspective-scaled the same way as X.
      const scaledBandHeight = scaledHalfH * 2 * bottomBandRatio;
      const scaledYMin = -scaledHalfH;
      const scaledYMax = scaledYMin + scaledBandHeight;

      // Soft cushion on X (unchanged approach — inward push near the edges).
      const wallZoneRight = scaledXMax - (scaledXMax - scaledXMin) * (1 - SOFT_WALL_ZONE);
      const wallZoneLeft = scaledXMin + (scaledXMax - scaledXMin) * (1 - SOFT_WALL_ZONE);
      if (positions[ix] > wallZoneRight) {
        const t = (positions[ix] - wallZoneRight) / (scaledXMax - wallZoneRight || 1);
        velocities[ix] -= t * SOFT_WALL_STRENGTH * delta;
      } else if (positions[ix] < wallZoneLeft) {
        const t = (wallZoneLeft - positions[ix]) / (wallZoneLeft - scaledXMin || 1);
        velocities[ix] += t * SOFT_WALL_STRENGTH * delta;
      }

      // Soft cushion on Y — now asymmetric top/bottom of the band, not a
      // symmetric ± range, since the band itself is asymmetric (anchored
      // to the bottom of the viewport).
      const wallZoneTop = scaledYMax - (scaledYMax - scaledYMin) * (1 - SOFT_WALL_ZONE);
      const wallZoneBottom = scaledYMin + (scaledYMax - scaledYMin) * (1 - SOFT_WALL_ZONE);
      if (positions[ix + 1] > wallZoneTop) {
        const t = (positions[ix + 1] - wallZoneTop) / (scaledYMax - wallZoneTop || 1);
        velocities[ix + 1] -= t * SOFT_WALL_STRENGTH * delta;
      } else if (positions[ix + 1] < wallZoneBottom) {
        const t = (wallZoneBottom - positions[ix + 1]) / (wallZoneBottom - scaledYMin || 1);
        velocities[ix + 1] += t * SOFT_WALL_STRENGTH * delta;
      }

      // Hard bounce, last resort.
      if (positions[ix] > scaledXMax || positions[ix] < scaledXMin) {
        positions[ix] = THREE.MathUtils.clamp(positions[ix], scaledXMin, scaledXMax);
        velocities[ix] *= -0.3;
      }
      if (positions[ix + 1] > scaledYMax || positions[ix + 1] < scaledYMin) {
        positions[ix + 1] = THREE.MathUtils.clamp(positions[ix + 1], scaledYMin, scaledYMax);
        velocities[ix + 1] *= -0.3;
      }
    }

    if (pointsRef.current) {
      const posAttr = pointGeometry.getAttribute('position') as THREE.BufferAttribute | undefined;
      if (posAttr) posAttr.needsUpdate = true;
    }

    lineTimerRef.current += delta;
    if (lineTimerRef.current >= LINE_UPDATE_INTERVAL) {
      lineTimerRef.current -= LINE_UPDATE_INTERVAL;

      const activeKeys = new Set<number>();
      for (let i = 0; i < resolvedCount; i++) {
        const ix = i * 3;
        const x1 = positions[ix];
        const y1 = positions[ix + 1];
        const z1 = positions[ix + 2];
        let found = 0;
        for (let j = 0; j < resolvedCount && found < 3; j++) {
          if (j === i) continue;
          const jx = j * 3;
          const dx = positions[jx] - x1;
          const dy = positions[jx + 1] - y1;
          const dz = positions[jx + 2] - z1;
          if (dx * dx + dy * dy + dz * dz < maxDist * maxDist) {
            const key = i < j ? i * resolvedCount + j : j * resolvedCount + i;
            activeKeys.add(key);
            found++;
          }
        }
      }

      let lineIdx = 0;
      const baseColor = [0.45, 0.7, 1.0];

      for (let i = 0; i < resolvedCount; i++) {
        for (let j = i + 1; j < resolvedCount; j++) {
          const key = i * resolvedCount + j;
          let alpha = adjacency[key] * FADE_DECAY;
          if (activeKeys.has(key)) {
            alpha = Math.min(1, alpha + FADE_GROWTH);
          }
          adjacency[key] = alpha;

          if (alpha < ALPHA_CUTOFF) continue;
          if (lineIdx + 6 > linePositions.length) continue;

          const ix = i * 3;
          const jx = j * 3;
          const x1 = positions[ix], y1 = positions[ix + 1], z1 = positions[ix + 2];
          const x2 = positions[jx], y2 = positions[jx + 1], z2 = positions[jx + 2];

          const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const distFade = 1 - Math.min(dist / maxDist, 1);
          const opacity = distFade * alpha;

          linePositions[lineIdx] = x1;
          linePositions[lineIdx + 1] = y1;
          linePositions[lineIdx + 2] = z1;
          linePositions[lineIdx + 3] = x2;
          linePositions[lineIdx + 4] = y2;
          linePositions[lineIdx + 5] = z2;

          lineColors[lineIdx] = baseColor[0] * opacity;
          lineColors[lineIdx + 1] = baseColor[1] * opacity;
          lineColors[lineIdx + 2] = baseColor[2] * opacity;
          lineColors[lineIdx + 3] = baseColor[0] * opacity;
          lineColors[lineIdx + 4] = baseColor[1] * opacity;
          lineColors[lineIdx + 5] = baseColor[2] * opacity;

          lineIdx += 6;
        }
      }

      const linePosAttr = lineGeometry.getAttribute('position') as THREE.BufferAttribute | undefined;
      const lineColorAttr = lineGeometry.getAttribute('color') as THREE.BufferAttribute | undefined;
      if (linePosAttr && lineColorAttr) {
        linePosAttr.needsUpdate = true;
        lineColorAttr.needsUpdate = true;
      }
      lineGeometry.setDrawRange(0, lineIdx / 3);
    }
  });

  useEffect(() => {
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    lineGeometry.setDrawRange(0, 0);

    return () => {
      pointGeometry.dispose();
      lineGeometry.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
      }),
    []
  );

  return (
    <>
      <points ref={pointsRef} geometry={pointGeometry} material={pointMaterial} />
      <lineSegments ref={linesRef} geometry={lineGeometry} material={lineMaterial} />
    </>
  );
}

/**
 * NeuralNetwork – wrapper component that injects a fullscreen Canvas.
 */
export default function NeuralNetwork({
  className,
  style,
  nodeCount,
  maxDist = 120,
  fogColor = '#05060f',
  enableFog = true,
  bottomBandRatio = 0.4,
}: NeuralNetworkProps = {}) {
  return (
    <div
      className={`neural-network-canvas${className ? ` ${className}` : ''}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 60], fov: 45, near: 0.1, far: 200 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 0, 1]} intensity={0.6} />
        {enableFog && <fog attach="fog" args={[fogColor, 40, 95]} />}
        <NetworkScene nodeCount={nodeCount} maxDist={maxDist} bottomBandRatio={bottomBandRatio} />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={1.2} radius={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}