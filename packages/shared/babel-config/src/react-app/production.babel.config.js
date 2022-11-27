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
      development: false,
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
    require('babel-plugin-transform-react-remove-prop-types'),
    {
      removeImport: true,
    },
  ],
  [
    require('@babel/plugin-proposal-nullish-coalescing-operator'),
    {},
  ],
  [
    require('babel-plugin-module-resolver'),
    {
      alias: {
        '@src': './src',
      },
    }
  ]
];

module.exports = {
  presets,
  plugins,
};
