import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { throttle } from '../utils/throttle';
import { getDeviceCapabilities } from '../utils/deviceCapabilities';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
  color: string;
  lineWidth: number;
}

/**
 * Ultra-Vibrant Lovable.dev-Style Liquid Glowing Gradient Background
 * Features Canvas 2D cursor liquid ripple shockwaves, SVG fluid distortion, morphing blobs, and dynamic cursor aura.
 */
export default function LiquidBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const deviceCapabilitiesRef = useRef(getDeviceCapabilities());
  const animationFrameIdRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const springScroll = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });
  const shouldReduceParallax = shouldReduceMotion || deviceCapabilitiesRef.current.isMobile || deviceCapabilitiesRef.current.isLowEnd;
  const parallaxY = useTransform(springScroll, [0, 1], [0, shouldReduceParallax ? 0 : 180]);
  const parallaxX = useTransform(springScroll, [0, 1], [0, shouldReduceParallax ? 0 : -70]);

  // Canvas Ripple Loop with Optimizations
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    const deviceCaps = deviceCapabilitiesRef.current;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Set proper pixel ratio for retina displays
      if (deviceCaps.canvasPixelRatio > 1) {
        canvas.width *= deviceCaps.canvasPixelRatio;
        canvas.height *= deviceCaps.canvasPixelRatio;
        ctx.scale(deviceCaps.canvasPixelRatio, deviceCaps.canvasPixelRatio);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(0, 245, 212,',   // Electric Cyan
      'rgba(139, 92, 246,',  // Neon Purple
      'rgba(255, 107, 53,',  // Sunset Coral
      'rgba(6, 182, 212,',   // Deep Turquoise
    ];

    let colorIndex = 0;

    const addRipple = (x: number, y: number, isClick = false) => {
      // Respect max ripple limit based on device capabilities
      if (ripplesRef.current.length >= deviceCaps.maxRipples) {
        return;
      }

      const colorPrefix = colors[colorIndex % colors.length];
      colorIndex++;

      ripplesRef.current.push({
        x,
        y,
        radius: 4,
        maxRadius: isClick ? 220 : 130,
        opacity: isClick ? 0.95 : 0.75,
        speed: isClick ? 4.5 : 3.0,
        color: colorPrefix,
        lineWidth: isClick ? 3.5 : 2.0,
      });

      if (isClick && ripplesRef.current.length < deviceCaps.maxRipples) {
        // Extra secondary concentric wave for click shockwave
        setTimeout(() => {
          if (ripplesRef.current.length < deviceCaps.maxRipples) {
            ripplesRef.current.push({
              x,
              y,
              radius: 2,
              maxRadius: 180,
              opacity: 0.8,
              speed: 3.5,
              color: colors[(colorIndex + 1) % colors.length],
              lineWidth: 2,
            });
          }
        }, 80);
      }
    };

    // Throttle mousemove to spawn ripples less frequently
    const handlePointerMove = throttle((e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastMousePosRef.current.x, e.clientY - lastMousePosRef.current.y);
      // Spawn ripple when cursor moves > 25px
      if (dist > 25) {
        addRipple(e.clientX, e.clientY, false);
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      }
    }, deviceCaps.throttleMs);

    const handlePointerDown = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY, true);
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mousedown', handlePointerDown);

    // Animation Loop - efficient RAF management
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += r.speed;
        const progress = r.radius / r.maxRadius;
        const currentOpacity = r.opacity * (1 - progress);

        if (progress >= 1) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        // Draw primary liquid wave ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${r.color} ${currentOpacity})`;
        ctx.lineWidth = r.lineWidth * (1 - progress * 0.5);
        ctx.shadowBlur = 18;
        ctx.shadowColor = `${r.color} ${currentOpacity * 0.8})`;
        ctx.stroke();

        // Draw inner liquid aura fill
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius - 8), 0, Math.PI * 2);
        ctx.fillStyle = `${r.color} ${currentOpacity * 0.15})`;
        ctx.fill();
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Track cursor position for smooth gradient aura (throttled)
  useEffect(() => {
    const deviceCaps = deviceCapabilitiesRef.current;

    const handleMouseMove = throttle((e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    }, deviceCaps.throttleMs);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ y: parallaxY, x: parallaxX }}
    >
      {/* Deep Obsidian Base */}
      <div className="absolute inset-0 bg-[#060913]" />

      {/* SVG Liquid Distortion Filters - Static for performance */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="32" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Liquid Layer Container with Distortion Filter */}
      <div className="absolute inset-0" style={{ filter: 'url(#liquid-wobble)' }}>
        {/* Blob 1: Electric Cyan & Turquoise Glow */}
        <div
          className="absolute -top-20 -left-20 w-[75vw] h-[75vw] max-w-[950px] max-h-[950px] rounded-full mix-blend-screen filter blur-[70px] opacity-80 animate-liquid-slow"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(0, 245, 212, 0.85) 0%, rgba(6, 182, 212, 0.5) 45%, transparent 70%)',
          }}
        />

        {/* Blob 2: Neon Purple & Electric Violet */}
        <div
          className="absolute top-10 -right-30 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full mix-blend-screen filter blur-[78px] opacity-72 animate-liquid-reverse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.85) 0%, rgba(217, 70, 239, 0.5) 50%, transparent 75%)',
          }}
        />

        {/* Blob 3: Hot Coral & Sunset Magenta */}
        <div
          className="absolute top-[40%] left-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full mix-blend-screen filter blur-[84px] opacity-68 animate-liquid-pulse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.8) 0%, rgba(244, 63, 94, 0.45) 55%, transparent 70%)',
          }}
        />

        {/* Blob 4: Deep Sapphire & Cyan Beam */}
        <div
          className="absolute -bottom-20 -left-10 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full mix-blend-screen filter blur-[74px] opacity-74 animate-liquid-slow"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(37, 99, 235, 0.85) 0%, rgba(0, 245, 212, 0.45) 50%, transparent 75%)',
          }}
        />

        {/* Blob 5: Bottom Right Electric Violet Aura */}
        <div
          className="absolute -bottom-30 -right-20 w-[75vw] h-[75vw] max-w-[950px] max-h-[950px] rounded-full mix-blend-screen filter blur-[76px] opacity-70 animate-liquid-reverse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.8) 0%, rgba(6, 182, 212, 0.4) 50%, transparent 75%)',
          }}
        />
      </div>

      {/* Interactive Canvas Liquid Ripple Wave Engine */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 mix-blend-screen"
      />

      {/* Interactive Mouse Liquid Follower */}
      <div
        className="absolute w-[480px] h-[480px] rounded-full mix-blend-screen filter blur-[60px] opacity-80 transition-transform duration-300 ease-out pointer-events-none hidden sm:block"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.6) 0%, rgba(139, 92, 246, 0.38) 45%, transparent 72%)',
        }}
      />

      {/* Subtle ambient sheen */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute left-[-10%] top-[-15%] w-[65vw] h-[65vw] rounded-full blur-[140px] bg-[radial-gradient(circle_at_30%_30%,rgba(0,245,212,0.22),transparent_60%)] animate-ambient-drift" />
        <div className="absolute right-[-8%] bottom-[-12%] w-[60vw] h-[60vw] rounded-full blur-[140px] bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_62%)] animate-ambient-drift-reverse" />
      </div>

      {/* Glass Grain Texture Overlay for Film Aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Soft Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </motion.div>
  );
}
