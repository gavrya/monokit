const matchers = require('jest-extended');

expect.extend(matchers);

if (typeof window !== 'undefined') {
  require('jest-styled-components');
}
