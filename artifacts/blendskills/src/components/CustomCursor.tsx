import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

/**
 * Magnetic cursor that follows the mouse with spring physics.
 */
export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={styles.cursor}
      style={{ translateX: springX, translateY: springY }}
    />
  );
}
