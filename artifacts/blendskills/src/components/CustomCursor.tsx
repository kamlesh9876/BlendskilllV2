import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { throttle } from '../utils/throttle';
import { getDeviceCapabilities } from '../utils/deviceCapabilities';
import styles from './CustomCursor.module.css';

/**
 * Magnetic cursor that follows the mouse with spring physics.
 * Optimized with throttling and disabled on mobile devices.
 */
export default function CustomCursor() {
  const deviceCaps = React.useMemo(() => getDeviceCapabilities(), []);
  
  // Don't render cursor on mobile devices
  if (deviceCaps.isMobile) {
    return null;
  }

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  // Reduced stiffness for better performance on lower-end devices
  const damping = deviceCaps.isLowEnd ? 30 : 20;
  const stiffness = deviceCaps.isLowEnd ? 100 : 150;
  const springX = useSpring(mouseX, { damping, stiffness });
  const springY = useSpring(mouseY, { damping, stiffness });

  React.useEffect(() => {
    // Throttle mouse move updates based on device capabilities
    const move = throttle((e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    }, deviceCaps.throttleMs);

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY, deviceCaps]);

  return (
    <motion.div
      className={styles.cursor}
      style={{ translateX: springX, translateY: springY }}
    />
  );
}
