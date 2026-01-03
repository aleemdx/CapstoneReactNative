import { DefaultTheme, Theme } from '@react-navigation/native';
// theme
import theme from '../index';

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.white,
  },
};

export default navigationTheme;
