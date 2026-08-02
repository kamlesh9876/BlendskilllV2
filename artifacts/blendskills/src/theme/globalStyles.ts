import { createGlobalStyle } from 'styled-components';
import { palette } from './colors';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background: ${palette.backgroundGradient};
    color: ${palette.textPrimary};
    overflow-x: hidden;
    scroll-behaviour: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
