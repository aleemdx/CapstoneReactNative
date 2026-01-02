import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';

const customFonts: MD3Theme['fonts'] = {
  ...DefaultTheme.fonts,
  titleLarge: {
    ...DefaultTheme.fonts.titleLarge,
    fontSize: 21,
    fontWeight: '700',
  },
  bodyMedium: {
    ...DefaultTheme.fonts.bodyMedium,
  },
};

const defaultTheme = {
  ...DefaultTheme,
  // Specify custom property
  // myOwnProperty: true,
  fonts: customFonts,

  colors: {
    ...DefaultTheme.colors,
    primary: '#495E57',
    secondary: '#F4CE14',
    background: '#EDEFEE',

    // custom colors

    primary2: '#EE9972',

    secondary2: '#FBDABB',

    highlight: '#EDEFEE',
    highlight2: '#333333',

    white: '#FFFFFF',
    black: '#000000',
  },
  dark: false,
};

export type AppTheme = typeof theme;

export const theme = defaultTheme;

export default theme;
