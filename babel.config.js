module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'screens/*': './src/screens/*',
          'theme/*': './src/theme/*',
          'utils/*': './src/utils/*',
          'assets/*': './src/assets/*',
          'reducers/*': './src/reducers/*',
          'constants/*': './src/constants/*',
          'interfaces/*': './src/interfaces/*',
          'components/*': './src/components/*',
          'hooks/*': './src/hooks/*',
          'contexts/*': './src/contexts/*',
          'config/*': './src/config/*',
          'controllers/*': './src/controllers/*',
          'validations/*': './src/validations/*',
          'services/*': './src/services/*',
          'generated/*': './src/generated/*',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
