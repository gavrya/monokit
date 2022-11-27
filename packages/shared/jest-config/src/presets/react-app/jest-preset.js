const cssModulesMapper = require.resolve('identity-obj-proxy');

const baseConfig = require('../base/jest-preset.js');

const cssTransformer = require.resolve('../../transformers/cssTransformer.js');
const svgTransformer = require.resolve('../../transformers/svgTransformer.js');
const fileTransformer = require.resolve('../../transformers/fileTransformer.js');

module.exports = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  // transform
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    '^.+\\.(css|sass|scss)$': cssTransformer,
    '^.+\\.svg$': svgTransformer,
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json|svg)$)': fileTransformer,
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  // module
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': cssModulesMapper,
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
