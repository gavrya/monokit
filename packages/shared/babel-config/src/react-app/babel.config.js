const {
  isEnvDevelopment,
  isEnvProduction,
  isEnvTest,
} = require('../env');

let babelConfig;

if (isEnvDevelopment) {
  babelConfig = require('./development.babel.config');
}

if (isEnvProduction) {
  babelConfig = require('./production.babel.config');
}

if (isEnvTest) {
  babelConfig = require('./test.babel.config');
}

module.exports = babelConfig;
