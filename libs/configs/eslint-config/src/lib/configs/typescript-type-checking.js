const shopify = require('@shopify/eslint-plugin');

module.exports = [
  ...shopify.configs['typescript-type-checking'],
  {
    rules: {},
  },
];
