// {
//   "*.{js,jsx,ts,tsx,md,html,css,json}": "prettier --write",
//   "./src/**/*.{ts,tsx,js,jsx}": ["eslint --fix --cache"]
// }

// https://www.thisdot.co/blog/linting-formatting-and-type-checking-commits-in-an-nx-monorepo-with-husky
// module.exports = {
//   '{apps,libs,tools}/**/*.{ts,tsx}': files => {
//     return `nx affected --target=typecheck --files=${files.join(',')}`;
//   },
//   '{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json}': [
//     files => `nx affected:lint --files=${files.join(',')}`,
//     files => `nx format:write --files=${files.join(',')}`,
//   ],
// };

module.exports = {
  '{apps,libs,packages,tools}/**/*.{ts,tsx}': ['nx affected --target typecheck --uncommitted'],
  '{apps,libs,packages,tools}/**/*.{js,ts,jsx,tsx,json,md,html,css,scss}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    // 'nx format:write --uncommitted', TODO: enable this when NX supports Prettier v3
  ],
};
