import { createGlobalStyle, css } from 'styled-components';

const styles = css`
*, ::before, ::after {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-base);
  font-weight: 500;
  text-rendering: optimizeSpeed;
  color: var(--primary);
  min-height: 100dvh;
  width: 100dvw;
  max-width: 100%;
  background: var(--background);
}

main {
  min-height: 100dvh;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
ul[role='list'],
ol[role='list']  {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

button,
textarea,
select
input,
input[type="button"],
input[type="reset"],
input[type="submit"] {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-align: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:root {
  --background: ${({ theme }) => theme.colors.background};
  --primary: ${({ theme }) => theme.colors.primary};
  --secondary: ${({ theme }) => theme.colors.secondary};
  --tertiary: ${({ theme }) => theme.colors.tertiary};
  --quaternary: ${({ theme }) => theme.colors.quaternary};
  --muted: ${({ theme }) => theme.colors.muted};
  --alternative: ${({ theme }) => theme.colors.alternative};
  --accent: ${({ theme }) => theme.colors.accent};
  --border: ${({ theme }) => theme.colors.border};

  --font-2xl: clamp(2.25rem, 2.0833rem + 0.8333vw, 2.75rem);
  --font-xl: clamp(1.75rem, 1.6667rem + 0.4167vw, 2rem);
  --font-lg: clamp(1.125rem, 1.0833rem + 0.2083vw, 1.25rem);
  --font-base: clamp(0.875rem, 0.8333rem + 0.2083vw, 1rem);
  --font-sm: clamp(0.8125rem, 0.7708rem + 0.2083vw, 0.9375rem);
  --font-xs:  clamp(0.75rem, 0.7083rem + 0.2083vw, 0.875rem);
  --font-tn: clamp(0.6875rem, 0.6458rem + 0.2083vw, 0.8125rem);

  --shadow-base: ${({ theme }) => theme.shadows.base};

  --z-tn: 1;
  --z-xs: 2;
  --z-sm: 3;
  --z-base: 5;
  --z-lg: 10; 
}

.solutions__animate {
  position: absolute;
  right: 0;

  @media screen and (min-width: 1200px) {
    right: inherit;
    left: 0;
  }
}

.language__animate {
  position: absolute;
  right: -50%;
}
`;

const GlobalStyles = createGlobalStyle` 
  ${styles}
`;

export default GlobalStyles;