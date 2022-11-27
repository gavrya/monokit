const process = () => {
  return {
    code: 'module.exports = {};'
  };
}

const getCacheKey = () => {
  return 'cssTransformer';
}

module.exports = {
  process,
  getCacheKey,
};
