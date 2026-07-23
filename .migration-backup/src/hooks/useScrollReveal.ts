import { useEffect, useRef, useState } from 'react';

// Shared IntersectionObserver instance for all reveal animations - reduces memory usage
let sharedRevealObserver: IntersectionObserver | null = null;

function getOrCreateRevealObserver(): IntersectionObserver {
  if (!sharedRevealObserver) {
    sharedRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            sharedRevealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
  }
  return sharedRevealObserver;
}

/**
 * Adds an `in-view` class to elements with the `reveal` or `reveal-line` class
 * when they scroll into the viewport. Runs once per element. Uses shared IntersectionObserver.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal, .reveal-line'));
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const io = getOrCreateRevealObserver();
    els.forEach((el) => io.observe(el));
    
    // Don't disconnect shared observer - it's reused across all components
    return () => {
      els.forEach((el) => io.unobserve(el));
    };
  }, []);
}

// Shared IntersectionObserver for count-up animations - reduces memory footprint
let sharedCountUpObserver: IntersectionObserver | null = null;

function getOrCreateCountUpObserver(callback: (entry: IntersectionObserverEntry) => void): IntersectionObserver {
  if (!sharedCountUpObserver) {
    sharedCountUpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry);
            sharedCountUpObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
  }
  return sharedCountUpObserver;
}

/** Animated number counter that triggers when the element enters the viewport. Uses shared observer. */
export function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = getOrCreateCountUpObserver((entry) => {
      // Cancel any previous animation
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
          animationRef.current = null;
        }
      };
      animationRef.current = requestAnimationFrame(tick);
    });

    io.observe(el);
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      io.unobserve(el);
    };
  }, [target, duration]);

  return { value, ref };
}
