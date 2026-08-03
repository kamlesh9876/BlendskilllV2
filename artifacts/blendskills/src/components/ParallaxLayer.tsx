import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import styles from './ParallaxLayer.module.css';

/**
 * ParallaxLayer wraps its children and moves them vertically based on the scroll position.
 * `speed` determines the intensity of the effect (e.g., 0.2 = slower than scroll, 1.5 = faster).
 */
export default function ParallaxLayer({ speed = 0.5, children }: { speed?: number; children: React.ReactNode }) {
  const { y } = useParallax(speed);
  return (
    <motion.div className={styles.layer} style={{ y }}>
      {children}
    </motion.div>
  );
}
