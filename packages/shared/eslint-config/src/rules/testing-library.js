module.exports = {
  overrides: [
    {
      files: ['*.{spec,test}.*'],
      plugins: ['testing-library'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
