module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@services': './src/services',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
