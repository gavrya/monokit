const baseConfig = require('../base/jest-preset.js');

module.exports = {
  ...baseConfig,
  testEnvironment: 'node',
  // transform
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  ],
  // module
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
