import { useViewportScroll, useTransform } from 'framer-motion';

/**
 * Hook that returns a transform value for a given speed multiplier.
 * `speed` > 1 moves faster than scroll, < 1 slower (parallax effect).
 */
export function useParallax(speed: number) {
  const { scrollY } = useViewportScroll();
  // Map scrollY (in pixels) to a translateY value
  const y = useTransform(scrollY, (value) => -(value * speed));
  return { y };
}
