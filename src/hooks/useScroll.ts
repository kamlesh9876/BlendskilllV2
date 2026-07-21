import { useEffect, useState, useRef } from 'react';

/** Throttle helper - limits function calls to every N milliseconds */
function createThrottledScroll(callback: () => void, delay = 16) {
  let timeoutId: number | null = null;
  return () => {
    if (timeoutId === null) {
      callback();
      timeoutId = window.setTimeout(() => {
        timeoutId = null;
      }, delay);
    }
  };
}

/** Tracks whether the page has scrolled past a threshold (for nav bg + back-to-top). Throttled for performance. */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  const callbackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!callbackRef.current) {
      const throttledCheck = createThrottledScroll(() => {
        setScrolled(window.scrollY > threshold);
      });
      callbackRef.current = throttledCheck;
    }

    const onScroll = callbackRef.current;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

/** Tracks whether the back-to-top button should be visible. Throttled for performance. */
export function useShowTop(threshold = 700) {
  const [show, setShow] = useState(false);
  const callbackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!callbackRef.current) {
      const throttledCheck = createThrottledScroll(() => {
        setShow(window.scrollY > threshold);
      });
      callbackRef.current = throttledCheck;
    }

    const onScroll = callbackRef.current;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return show;
}

/** Smooth-scrolls to an anchor id, accounting for the fixed nav height. */
export function scrollToId(id: string, offset = 90) {
  const target = document.querySelector(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
