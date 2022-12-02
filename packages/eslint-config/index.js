module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
