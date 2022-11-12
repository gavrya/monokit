module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-rational-order'),
    require.resolve('stylelint-config-prettier'),
  ],
  plugins: [
    require.resolve('stylelint-prettier'),
  ],
  rules: {
    'prettier/prettier': true,
  }
};
