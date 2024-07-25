// {
//   "*.{js,jsx,ts,tsx,md,html,css,json}": "prettier --write",
//   "./src/**/*.{ts,tsx,js,jsx}": ["eslint --fix --cache"]
// }

module.exports = {
  '{apps,libs,packages,tools}/**/*.{ts,tsx}': ['nx affected --target typecheck --uncommitted'],
  '{apps,libs,packages,tools}/**/*.{js,ts,jsx,tsx,json,md,html,css,scss}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    // 'nx format:write --uncommitted', TODO: enable this when NX supports Prettier v3
  ],
};
