module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'only-warn'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // 'comma-dangle': ['off'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
  },
};
