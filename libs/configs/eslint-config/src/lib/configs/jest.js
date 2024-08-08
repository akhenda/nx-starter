const shopify = require('@shopify/eslint-plugin');
const jestPlugin = require('eslint-plugin-jest');
const FlatCompat = require('@eslint/eslintrc').FlatCompat;
const fixupConfigRules = require('@eslint/compat').fixupConfigRules;

const compat = new FlatCompat();

module.exports = [
  /**
   * eslint-plugin-jest
   */
  {
    files: [
      '**/test/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    ...jestPlugin.configs['flat/recommended'],
  },

  /**
   * eslint-plugin-jest-formatting
   */
  {
    extends: [...fixupConfigRules(compat.extends('plugin:jest-formatting/recommended'))],
    files: [
      '**/test/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    rules: {},
  },

  /**
   * Main configs
   */
  ...shopify.configs.jest,
  {
    files: [
      '**/test/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    rules: {},
  },
];
