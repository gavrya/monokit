module.exports = {
  extends: [
    'airbnb-react',
    'react-native',
    'import',
    'promise',
    'jest',
    'testing-library',
    'monokit',
    'monokit-react',
    'prettier',
  ].map((rule) => require.resolve(`../rules/${rule}`)),
};
