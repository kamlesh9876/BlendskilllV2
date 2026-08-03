import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

/**
 * Cinematic Scroll-Triggered Word-by-Word Text Reveal with Line Masking
 */
export default function ScrollRevealText({
  text,
  className = '',
  delay = 0,
  as: Component = 'h2',
}: ScrollRevealTextProps) {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: '100%',
      opacity: 0,
      rotateX: -45,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 140,
        damping: 16,
      },
    },
  };

  return (
    <Component className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em] overflow-hidden ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-1">
            <motion.span variants={wordVariants} className="inline-block origin-bottom-left">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
