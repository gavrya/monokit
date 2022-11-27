const envParams = require('dotenv').config().parsed;

process.env = {
  ...process.env,
  ...envParams,
};

process.env.BABEL_ENV = process.env.NODE_ENV;

if (typeof window !== 'undefined') {
  require('whatwg-fetch');
}
