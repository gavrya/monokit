const path = require('path');

const process = (src, filename) => {
  const assetFilename = JSON.stringify(path.basename(filename));

  return {
    code: `module.exports = ${assetFilename};`,
  };
}

module.exports = {
  process,
};
