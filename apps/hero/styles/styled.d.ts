import 'styled-components';
import { theme } from '@/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      background: string,
      primary: string,
      secondary: string,
      tertiary: string,
      quaternary: string,
      muted: string,
      alternative: string,
      accent: string,
      border: string,
  },
  shadows: {
      base: string;
  }
  }
}