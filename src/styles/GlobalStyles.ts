import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* ==================== DESIGN TOKENS ==================== */
  :root {
    /* Colors - Dark navy palette with orange accent */
    --color-white: #e6f1ff;
    --color-gray-50: #ccd6f6;
    --color-gray-100: #a8b2d1;
    --color-gray-200: #8892b0;
    --color-gray-300: #6f7a99;
    --color-gray-400: #5a6482;
    --color-gray-500: #495670;
    --color-gray-600: #3d4a61;
    --color-gray-700: #303d52;
    --color-gray-800: #233554;
    --color-gray-900: #112240;
    --color-black: #0a192f;

    /* Accent colors - Orange (small splashes) */
    --color-accent: #FF7F11;
    --color-accent-hover: #ffaa55;
    --color-accent-subtle: rgba(255, 127, 17, 0.2);

    /* Semantic colors */
    --color-background: var(--color-black);
    --color-surface: var(--color-gray-900);
    --color-viewport: #020c1b;
    --color-text: var(--color-gray-50);
    --color-text-muted: var(--color-gray-200);
    --color-text-on-dark: var(--color-white);
    --color-text-on-dark-muted: var(--color-gray-200);
    --color-border: var(--color-gray-700);

    /* Typography - matching jeremykanovsky.com */
    --font-family: Calibre, 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-family-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;
    --font-size-5xl: 3.5rem;
    --font-size-6xl: 4.5rem;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --line-height: 1.6;
    --line-height-tight: 1.2;
    --letter-spacing-tight: -0.02em;
    --letter-spacing-wide: 0.1em;

    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    --spacing-4xl: 6rem;

    /* Layout */
    --max-width: 1400px;
    --viewport-inset: 1.25rem;
    --grid-gap: 1.5rem;

    /* Borders & Shadows */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-2xl: 32px;
    --radius-full: 9999px;
    --shadow-sm: 0 2px 8px rgba(2, 12, 27, 0.4);
    --shadow-md: 0 4px 16px rgba(2, 12, 27, 0.5);
    --shadow-lg: 0 8px 32px rgba(2, 12, 27, 0.6);
    --shadow-viewport: 0 0 60px rgba(2, 12, 27, 0.8);

    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;

    /* Z-index layers */
    --z-decorative: 1;
    --z-viewport: 10;
    --z-content: 20;
    --z-nav: 100;
  }

  /* ==================== RESET ==================== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-family);
    line-height: var(--line-height);
    color: var(--color-text);
    background-color: var(--color-background);
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
