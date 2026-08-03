import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Smooth Momentum Inertia Scroll Provider (Lenis)
 * Wraps content in a scroll container with buttery-smooth physics-based momentum.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(2, -8 * t),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1.0,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    let lastTime = 0;

    function raf(time: number) {
      if (!lastTime) {
        lastTime = time;
      }

      const delta = Math.min(32, time - lastTime);
      lastTime = time;

      lenis.raf(time);
      if (delta < 16) {
        requestAnimationFrame(raf);
      } else {
        setTimeout(() => requestAnimationFrame(raf), 0);
      }
    }

    requestAnimationFrame(raf);

    // Expose lenis globally for debugging
    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
