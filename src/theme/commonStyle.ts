import { StyleSheet } from 'react-native';
// Themes
import { theme } from 'theme/index';

// common styles

export const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 3,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRow: {
    flexDirection: 'row',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },

  container: {
    backgroundColor: theme.colors.white,
  },

  bgPrimary: {
    backgroundColor: theme.colors.primary,
  },

  bgSecondary: {
    backgroundColor: theme.colors.secondary,
  },

  bgHighlight: {
    backgroundColor: theme.colors.highlight,
  },

  //   paddings

  p1: {
    padding: 8,
  },
  p2: {
    padding: 16,
  },
  p3: {
    padding: 24,
  },
  p4: {
    padding: 32,
  },
  p5: {
    padding: 40,
  },
  p6: {
    padding: 48,
  },
  p7: {
    padding: 56,
  },

  // margins

  m1: {
    margin: 8,
  },
  m2: {
    margin: 16,
  },
  m3: {
    margin: 24,
  },
  m4: {
    margin: 32,
  },

  // margin top
  mt1: {
    marginTop: 8,
  },
  mt2: {
    marginTop: 16,
  },
  mt3: {
    marginTop: 24,
  },
  mt4: {
    marginTop: 32,
  },

  // margin bottom
  mb1: {
    marginBottom: 8,
  },
  mb2: {
    marginBottom: 16,
  },
  mb3: {
    marginBottom: 24,
  },
  mb4: {
    marginBottom: 32,
  },

  // margin vertical
  mv1: {
    marginVertical: 8,
  },
  mv2: {
    marginVertical: 16,
  },
  mv3: {
    marginVertical: 24,
  },
  mv4: {
    marginVertical: 32,
  },

  // text

  textCenter: {
    textAlign: 'center',
  },

  textPrimary: {
    color: theme.colors.primary,
  },
  textSecondary: {
    color: theme.colors.secondary,
  },
  textWhite: {
    color: theme.colors.white,
  },

  textBold: {
    fontWeight: 'bold',
  },
});
