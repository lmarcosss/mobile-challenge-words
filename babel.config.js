module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^@components': './src/components',
          '^@screens': './src/screens',
          '^@contexts': './src/contexts',
          '^@types': './src/types',
          '^@constants': './src/constants',
          '^@hooks': './src/hooks',
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    'react-native-reanimated/plugin',
  ],
};
