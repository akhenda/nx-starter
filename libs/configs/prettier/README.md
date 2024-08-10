# prettier

This library was generated with [Nx](https://nx.dev).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40nx-starter%2Fprettier.svg)](https://badge.fury.io/js/%40nx-starter%2Fprettier.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@nx-starter/prettier.svg)](https://img.shields.io/bundlephobia/minzip/@nx-starter/prettier.svg)

Shared prettier configuration

## Installation

```bash
pnpm install -D prettier prettier-plugin-tailwindcss
pnpm add -D @nx-starter/prettier
```

## Usage

nx-starter’s shared prettier config comes bundled in `@nx-starter/prettier`. To enable these rules, add a `prettier` property in your `package.json` and reference this shared config as follows:

```json
"prettier": "@nx-starter/prettier"
```

Previously, rules had been defined directly in a `.prettierrc` or `package.json`

Any previous `.prettierrc` should be removed in favour of the shared config.

## Building

Run `nx build prettier` to build the library.

## Running unit tests

Run `nx test prettier` to execute the unit tests via [Jest](https://jestjs.io).
