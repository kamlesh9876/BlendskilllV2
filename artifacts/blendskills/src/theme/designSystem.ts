/**
 * Premium Design System
 * Unified design tokens, spacing, shadows, and animation patterns
 */

// Spacing System (8px base unit)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '56px',
  '7xl': '64px',
};

// Border Radius Scale
export const borderRadius = {
  none: '0',
  sm: '6px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
};

// Shadow Layers
export const shadows = {
  none: 'none',
  subtle: '0 1px 2px rgba(0, 0, 0, 0.05)',
  soft: '0 4px 12px rgba(0, 0, 0, 0.1)',
  elevated: '0 12px 32px rgba(0, 0, 0, 0.15)',
  high: '0 20px 48px rgba(0, 0, 0, 0.2)',
  glass: 'inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.2)',
};

// Glass Effects
export const glass = {
  subtle: `
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.15);
  `,
  medium: `
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.15);
  `,
  strong: `
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.2);
  `,
};

// Animation Durations
export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '600ms',
  cinematic: '1000ms',
};

// Easing Functions
export const easing = {
  // Entrance/Exit
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  
  // Spring-like
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  
  // Linear
  linear: 'linear',
  
  // Specific use-cases
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  snappy: 'cubic-bezier(0.18, 0.89, 0.32, 1.27)',
};

// Color Palette
export const colors = {
  // Primary
  primary: '#00f5d4',
  primaryDark: '#00d4b4',
  
  // Accent
  accent: '#FF6B35',
  accentDark: '#FF8557',
  
  // Secondary
  secondary: '#0066cc',
  secondaryDark: '#0052a3',
  
  // Neutral
  white: '#ffffff',
  black: '#000000',
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate300: '#cbd5e1',
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1e293b',
  slate900: '#0f172a',
  slate950: '#020617',
  
  // Status
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// Typography Families
export const fontFamilies = {
  display: "'Inter', sans-serif",
  headings: "'IBM Plex Sans', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

// Typography Sizes
export const typography = {
  displayLg: {
    fontSize: '3.5rem',
    fontWeight: 300,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  displayMd: {
    fontSize: '2.75rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  headingXl: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  headingLg: {
    fontSize: '2.25rem',
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
  },
  headingMd: {
    fontSize: '1.875rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.008em',
  },
  headingSm: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  headingXs: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  bodyLg: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '-0.005em',
  },
  bodyMd: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  bodySm: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.4,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  mono: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.5,
    fontFamily: "'IBM Plex Mono', monospace",
  },
};

// Breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Z-index Scale
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  nav: 100,
  maxZIndex: 9999,
};
