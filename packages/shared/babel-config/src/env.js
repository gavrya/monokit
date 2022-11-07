const env = process.env.BABEL_ENV || process.env.NODE_ENV;

const isEnvDevelopment = env === 'development';
const isEnvProduction = env === 'production';
const isEnvTest = env === 'test';

if (!isEnvDevelopment && !isEnvProduction && !isEnvTest) {
  throw new Error(
    'You must specify `NODE_ENV` or ' +
    '`BABEL_ENV` environment variables. Valid values are "development", ' +
    '"test", and "production". Instead, received: ' +
    JSON.stringify(env) +
    '.'
  );
}

module.exports = {
  env,
  isEnvDevelopment,
  isEnvProduction,
  isEnvTest,
};
