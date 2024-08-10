const eslintConfig = require('@nx-starter/eslint-config');

module.exports = [
  ...eslintConfig.configs.typescript,
  ...eslintConfig.configs.node,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
];
