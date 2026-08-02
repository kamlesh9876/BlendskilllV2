import React, { useEffect } from 'react';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import FloatingNav from './FloatingNav';
import CustomCursor from './CustomCursor';
import styles from './GlobalLayout.module.css';

import { ThemeProvider } from 'styled-components';
import { palette } from '../theme/colors';
import { GlobalStyles } from '../theme/globalStyles';

/**
 * GlobalLayout provides the page‑wide layout, custom cursor, and a progress indicator.
 * It also injects the styled‑components theme and global CSS.
 */
export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();

  // Convert scroll progress to a width percentage for the top progress bar
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.6 } });
  }, [controls]);

  return (
    <ThemeProvider theme={palette}>
      <GlobalStyles />
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <CustomCursor />
        <FloatingNav />
        {/* Top scroll progress bar */}
        <motion.div className={styles.progressBar} style={{ width }} />
        <main className={styles.main}>{children}</main>
      </motion.div>
    </ThemeProvider>
  );
}
