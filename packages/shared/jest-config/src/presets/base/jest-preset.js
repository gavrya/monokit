module.exports = {
  // match
  roots: ['<rootDir>/src'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  // coverage
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // setup
  setupFiles: [
    require.resolve('../../setup/setupBeforeJestEnv.js'),
  ],
  setupFilesAfterEnv: [
    require.resolve('../../setup/setupAfterJestEnv.js'),
  ],
  // watch
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
