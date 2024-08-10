const playwright = require('eslint-plugin-playwright');

module.exports = [
  {
    files: [
      '**/test/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    ...playwright.configs['flat/recommended'],
  },
  {
    files: [
      '**/test/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    rules: {
      // Customize Playwright rules
      // ...
    },
  },
];
