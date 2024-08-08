const shopify = require('@shopify/eslint-plugin');
const core = require('./core');

module.exports = [...shopify.configs.es5, ...core];
