module.exports = exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'prettier',
    'module-resolver',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': [0],
        'react-hooks/rules-of-hooks': [2],
        'react-hooks/exhaustive-deps': [1],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/prefer-default-export': [0],
        'import/extensions': [
          2,
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
          },
        ],
        'no-param-reassign': [0],
        'no-plusplus': [0],
        'no-use-before-define': [0],
        'prettier/prettier': [2],
        camelcase: [0],
        quotes: [2, 'single'],
        'module-resolver/use-alias': [2],
        'react/jsx-props-no-spreading': [0],
        'react/require-default-props': [0],
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/no-shadow': [2],
        'no-shadow': [0],
        'no-undef': [0],
      },
      settings: {
        'import/resolver': {
          'babel-module': {},
        },
      },
    },
  ],
};
