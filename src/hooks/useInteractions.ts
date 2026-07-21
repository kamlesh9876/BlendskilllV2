import { useEffect, useRef, useCallback } from 'react';

// Throttle helper to limit function calls - improves performance on mouse move events
function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  } as T;
}

/** Desktop-only magnetic hover effect on a button-like element. Uses throttled mouse events for better performance. */
export function useMagnetic<T extends HTMLElement>(strength = 0.22) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    // Throttle mouse move to ~60fps (16ms) to prevent excessive repaints
    const onMove = throttle((e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * (strength * 1.4)}px)`;
    }, 16);
    
    const onLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    el.addEventListener('mousemove', onMove as any);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove as any);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
}

/** Desktop-only 3D tilt on hover for cards. Uses throttled mouse events for smooth performance. */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    // Throttle mouse move to ~60fps for smooth tilt animation without jank
    const onMove = throttle((e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(700px) rotateX(${y * -6}deg) rotateY(${x * 8}deg) translateY(-6px)`;
    }, 16);
    
    const onLeave = () => {
      el.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
    };

    el.addEventListener('mousemove', onMove as any);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove as any);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}
