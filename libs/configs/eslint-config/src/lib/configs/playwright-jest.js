const playwright = require('eslint-plugin-playwright');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  {
    ...playwright.configs['flat/jest-playwright'],
    files: [
      '**/test/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
  },
  {
    files: [
      '**/test/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    plugins: { jest: jestPlugin },
    rules: {
      // Customize Playwright rules
      // ...
    },
  },
];
