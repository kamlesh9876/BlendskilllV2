import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

/**
 * Scroll-driven parallax wrapper with spring smoothing and reduced-motion fallback.
 */
export default function ParallaxWrapper({
  children,
  offset = 24,
  className = '',
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    mass: 0.25,
  });

  const y = useTransform(springProgress, [0, 1], [-offset, offset]);
  const opacity = useTransform(springProgress, [0, 0.5, 1], [0.94, 1, 0.94]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : y,
          opacity: shouldReduceMotion ? 1 : opacity,
          willChange: 'transform',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
