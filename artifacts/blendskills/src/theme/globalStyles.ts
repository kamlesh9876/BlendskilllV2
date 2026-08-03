import { createGlobalStyle } from 'styled-components';
import { palette } from './colors';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  :root {
    /* Display/Hero Font */
    --font-display: 'Inter', sans-serif;
    /* Headings Font */
    --font-headings: 'IBM Plex Sans', sans-serif;
    /* Body Font */
    --font-body: 'Inter', sans-serif;
    /* Mono Font */
    --font-mono: 'IBM Plex Mono', monospace;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: var(--font-body);
    background: ${palette.backgroundGradient};
    color: ${palette.textPrimary};
    overflow-x: hidden;
  }

  /* Typography Hierarchy */
  .display-lg {
    font-family: var(--font-display);
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .display-md {
    font-family: var(--font-display);
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.015em;
  }

  .heading-xl {
    font-family: var(--font-headings);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .heading-lg {
    font-family: var(--font-headings);
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  .heading-md {
    font-family: var(--font-headings);
    font-size: 1.875rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.008em;
  }

  .heading-sm {
    font-family: var(--font-headings);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .heading-xs {
    font-family: var(--font-headings);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .body-lg {
    font-family: var(--font-body);
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.005em;
  }

  .body-md {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  }

  .body-sm {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .caption {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .mono {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
