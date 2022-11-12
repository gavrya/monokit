module.exports = {
  customSyntax: require.resolve('postcss-scss'),
  processors: [
    require.resolve('stylelint-processor-styled-components'),
  ],
  extends: [
    require.resolve('./stylelint.config.js'),
    require.resolve('stylelint-config-styled-components'),
  ],
};
