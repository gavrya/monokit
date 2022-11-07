const presets = [
  [
    require('@babel/preset-env'),
    {
      useBuiltIns: 'entry',
      corejs: "3",
    },
  ],
  [
    require('@babel/preset-react'),
    {
      development: true,
    },
  ],
  [
    require('@babel/preset-typescript'),
    {},
  ],
];

const plugins = [
  [
    require('@babel/plugin-transform-runtime'),
    {
      helpers: true,
      regenerator: true,
    },
  ],
  [
    require('babel-plugin-styled-components'),
    {},
  ],
  [
    require('@babel/plugin-proposal-nullish-coalescing-operator'),
    {},
  ],
];

module.exports = {
  presets,
  plugins,
};
