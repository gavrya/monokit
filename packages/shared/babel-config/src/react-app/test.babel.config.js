const presets = [
  [
    require('@babel/preset-env'),
    {
      targets: {
        node: 'current',
      },
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
