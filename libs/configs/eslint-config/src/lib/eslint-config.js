/**
 * Core configs - When extending, one of these should go first
 */
const coreConfigs = {
  /**
   * Base config
   */
  core: require('./configs/core'),

  /**
   * Use this for legacy projects.
   */
  es5: require('./configs/es5'),

  /**
   * Use this for anything written with ES2015+ features.
   */
  esnext: require('./configs/esnext'),

  /**
   * Use this for TypeScript projects. The rules enabled in this config do not require
   * type-checking to run. To enable all Typescript rules, you must augment this config
   * with the `typescript-type-checking` config mentioned below.
   */
  typescript: require('./configs/typescript'),

  /**
   * Use this to get additional strict rules.
   */
  hardcore: require('./configs/hardcore'),
};

/**
 * Augmenting configs - When extending, these go after the core config
 */
const augmentingConfigs = {
  /**
   * Use this for Node.js projects
   */
  node: require('./configs/node'),

  /**
   * Use this for Jest projects
   */
  jest: require('./configs/jest'),

  /**
   * Use this for Jest DOM projects
   */
  'jest-dom': require('./configs/jest-dom'),

  /**
   * Use this for Cypress projects
   */
  cypress: require('./configs/cypress'),

  /**
   * Use this for Playwright projects
   */
  playwright: require('./configs/playwright'),

  /**
   * Use this for React projects
   */
  react: require('./configs/react'),

  /**
   * Use this for projects built by webpack.
   */
  webpack: require('./configs/webpack'),

  /**
   * Use this for Playwright Jest projects
   */
  'playwright-jest': require('./configs/playwright-jest'),

  /**
   * Use this config to augment the `typescript` config to enable all TypeScript rules,
   * including those that require type checking. These rules are slower to run and and
   * you will need to specify a path to your tsconfig.json file in the "project" property
   * of "parserOptions". The following example would provide all of the TypeScript rules,
   * assuming the tsconfig.json is in the same directory as you ESlint configuration.
   */
  'typescript-type-checking': require('./configs/typescript-type-checking'),
};

/**
 * Prettier config - When extending, this must go last
 */
const prettierConfigs = {
  /**
   * Use `prettier` for consistent formatting. Using this prettier config will `override`
   * the default Shopify eslint rules in favor of prettier formatting. Prettier must
   * be installed within your project, as `@shopify/eslint-plugin` does not provide the
   * dependency itself.
   */
  prettier: require('./configs/prettier'),
};

/**
 * Recipes - Just import one of these depending on the project
 */
const recipes = {
  /**
   * basic: Use this for casual js/typescript projects.
   */
  basic: require('./recipes/basic'),

  /**
   * nodest: Use this for Node.js projects.
   */
  nodest: require('./recipes/nodest'),

  /**
   * native: Use this for React Native or Expo projects.
   */
  native: require('./recipes/native'),

  /**
   * reactful: Use this for React.js projects.
   */
  reactful: require('./recipes/reactful'),
};

module.exports = {
  configs: {
    // Core configs - When extending, one of these should go first
    ...coreConfigs,

    // Augmenting configs - When extending, these go after the core config
    ...augmentingConfigs,

    // Prettier config - When extending, this must go last
    ...prettierConfigs,

    // Recipes - Just import one of these depending on the project
    ...recipes,
  },
};
