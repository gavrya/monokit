module.exports = {
  overrides: [
    {
      files: ['*.{spec,test}.*'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
