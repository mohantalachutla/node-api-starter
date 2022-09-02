module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    // 'no-unused-vars': 'error',  // no need ass it is part of eslint-precommended
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['APP/*', './src/*'],
          ['@http$', './src/http.js'],
          ['@logger$', './src/logger.js'],
        ],
        extensions: ['.js', '.json'],
      },
    },
  },
}
