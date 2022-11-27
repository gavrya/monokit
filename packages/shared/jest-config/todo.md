## TODO

- move node-app options to base preset
- add tests for every case: svg, styled component, file loader, aliases, css loader, css module loader, work with js|jsx|ts|tsx files
- add checks
  - check if tsconfig.json file exists (node process cwd)
  - check if babel.config.js file exists (node process cwd)
  - check if required packages are installed, check versions
- babel-jest instead of ts-jest or ts-jest with enabled babel option because we need to transpile styled components by using babel plugin
- investigate using `preset` config option usage: https://jestjs.io/docs/configuration#preset-string
- add TS types declarations similar to the cra `react-scripts`

## DONE

- add `node` environment for node-app
- add `jsdom` environment for react-app
- register `jest-extended` in setupFilesAfterEnv
- register `jest-styled-components` in setupFilesAfterEnv
- create jest config files
  - `base.jest.config`
  - `react-app.jest.config`
  - `node-app.jest.config`
- add import transformers
  - create ts transformer
  - create css transformer
  - create svg transformer
  - create file transformer
  - create gql transformer
- sync aliases/path mapping
  - sync with tsconfig
  - sync with babel aliases
- init .env variables
- replace svg/file transformer (svg-jest is not working and is not compatible with cra)
- replace `jest-file-loader` to cra based file loader

## Resources

Styled Components jest integration: https://styled-components.com/docs/tooling#jest-integration

CRA jest config example: https://github.com/facebook/create-react-app/tree/main/packages/react-scripts/scripts/utils

CRA jest transformers example: https://github.com/facebook/create-react-app/tree/main/packages/react-scripts/config/jest

Node process cwd: https://nodejs.org/docs/latest/api/process.html#processcwd

ts-jest with babel: https://kulshekhar.github.io/ts-jest/docs/getting-started/options/babelConfig/

jest-watch-typeahead plugin (Run Jest in watch mode): https://www.npmjs.com/package/jest-watch-typeahead

Jest configuration API: https://jestjs.io/docs/configuration

