import { useEffect, useState } from 'react';

/** Tracks whether the page has scrolled past a threshold (for nav bg + back-to-top). */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

/** Tracks whether the back-to-top button should be visible. */
export function useShowTop(threshold = 700) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
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
