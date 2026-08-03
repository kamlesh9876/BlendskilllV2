/**
 * Premium Animation System
 * Standardized animation durations, easing functions, and common animation patterns
 */

// Animation Durations (milliseconds)
export const DURATION = {
  FAST: 150,      // Quick interactions (hover, click)
  NORMAL: 300,    // Standard transitions
  SLOW: 600,      // Page transitions
  CINEMATIC: 1000, // Scroll reveals, dramatic effects
} as const;

// Easing Functions
export const EASING = {
  // Standard
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
  EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
  
  // Spring-like
  SPRING: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  
  // Smooth/Premium
  SMOOTH: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  SNAPPY: 'cubic-bezier(0.18, 0.89, 0.32, 1.27)',
  
  // Linear
  LINEAR: 'linear',
} as const;

// Framer Motion Transition Presets
export const transitionPresets = {
  // Fast interactions
  fast: {
    duration: DURATION.FAST,
    ease: EASING.EASE_OUT,
  },
  
  // Normal transitions
  normal: {
    duration: DURATION.NORMAL,
    ease: EASING.EASE_IN_OUT,
  },
  
  // Slow/cinematic
  slow: {
    duration: DURATION.SLOW,
    ease: EASING.SMOOTH,
  },
  
  cinematic: {
    duration: DURATION.CINEMATIC,
    ease: EASING.SMOOTH,
  },
  
  // Spring animations
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
  
  gentle: {
    type: 'spring',
    stiffness: 80,
    damping: 15,
    mass: 1,
  },
  
  snappy: {
    type: 'spring',
    stiffness: 150,
    damping: 12,
    mass: 1,
  },
} as const;

// Common Framer Motion Variants

// Fade In
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionPresets.normal,
  },
};

// Slide In
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionPresets.normal,
  },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionPresets.normal,
  },
};

export const slideInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.normal,
  },
};

export const slideInDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.normal,
  },
};

// Scale
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionPresets.normal,
  },
};

// Stagger Container
export const staggerContainerVariants = (delay = 0, staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: staggerChildren,
    },
  },
});

// Stagger Item (use with staggerContainerVariants)
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.normal,
  },
};

// Hover Effects

export const hoverScaleVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: transitionPresets.fast,
  },
};

export const hoverLiftVariants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: transitionPresets.fast,
  },
};

export const hoverGlowVariants = {
  rest: { boxShadow: '0 0 0 rgba(0, 245, 212, 0)' },
  hover: {
    boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)',
    transition: transitionPresets.fast,
  },
};

// Tap/Click Effects

export const tapScaleVariants = {
  rest: { scale: 1 },
  tap: { scale: 0.95 },
};

export const tapPressVariants = {
  rest: { y: 0 },
  tap: { y: 2 },
};

// Helper function to combine variants
export const combineVariants = (...variants: any[]) => {
  return variants.reduce((acc, variant) => ({ ...acc, ...variant }), {});
};

// Helper function for staggered animations
export const createStaggerVariants = (
  itemCount: number,
  staggerDelay = 0.05,
  baseVariant = slideInUpVariants
) => {
  const itemVariants: any = {};
  
  for (let i = 0; i < itemCount; i++) {
    itemVariants[i] = {
      ...baseVariant.visible,
      transition: {
        ...transitionPresets.normal,
        delay: i * staggerDelay,
      },
    };
  }
  
  return itemVariants;
};
