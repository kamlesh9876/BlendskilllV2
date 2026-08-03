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
      duration: 0.55,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.06,
      touchMultiplier: 1.3,
      infinite: false,
      autoResize: true,
      lerp: 0.12,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
