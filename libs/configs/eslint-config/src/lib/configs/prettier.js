const shopify = require('@shopify/eslint-plugin');
const yml = require('eslint-plugin-yml');

module.exports = [
  ...shopify.configs.prettier,

  /**
   * eslint-plugin-yml
   */
  ...yml.configs['flat/prettier'],

  {
    rules: {},
  },
];
