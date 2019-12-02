module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "arrow-body-style": 0,
    "linebreak-style": 0,
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    'react/jsx-one-expression-per-line': 'off',
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
    "global-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0
  },
};
