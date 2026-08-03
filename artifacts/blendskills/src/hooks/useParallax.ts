import { useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

interface UseParallaxOptions {
  axis?: 'x' | 'y';
  direction?: number;
  disabled?: boolean;
}

/**
 * Hook that returns a transform value for a given speed multiplier.
 * The motion is spring-based and reduced on mobile / reduced-motion devices.
 */
export function useParallax(speed = 0.2, options: UseParallaxOptions = {}) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.25,
  });

  const maxOffset = Math.min(Math.max(speed, 0.08), 0.8) * 140;
  const value = useTransform(springProgress, [0, 1], [0, (options.direction ?? 1) * maxOffset]);

  const disabled = options.disabled || shouldReduceMotion;

  return {
    y: options.axis === 'x' ? 0 : disabled ? 0 : value,
    x: options.axis === 'x' ? (disabled ? 0 : value) : 0,
  };
}
