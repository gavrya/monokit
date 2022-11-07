module.exports = {
  extends: [
    'airbnb',
    'import',
    'promise',
    'jest',
    'monokit',
    'prettier',
  ].map((rule) => require.resolve(`../rules/${rule}`)),
};
