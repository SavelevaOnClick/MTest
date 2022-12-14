---
to: .prettierrc.js
force: true
---
module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 120,
  importOrder: [
    '@react',
    'i18next',
    'redux',
    '@assets',
    '@components',
    '@constants',
    '@helpers',
    '@hooks',
    '@reducers',
    '@screens',
    '@services',
    '@types',
    '@httpServices',
    './',
  ],
};
