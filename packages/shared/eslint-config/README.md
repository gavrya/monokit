# `@monokit/eslint-config`

The shareable configuration for ESLint.

Defines preset of rules for ESLint.

## Usage

Install ESLint plugin for your favorite code editor.

### Node app ESLint config

Install `@monokit/eslint-config` package:

```sh
lerna add --dev @monokit/eslint-config --scope={target_monorepo_package}
```

Install peer dependencies from the `@monokit/eslint-config` package:

```sh
yarn add -D eslint@{version}\
prettier@{version}\
@typescript-eslint/eslint-plugin@{version}\
eslint-plugin-import@{version}\
eslint-plugin-jest@{version}\
eslint-plugin-prettier@{version}\
eslint-plugin-promise@{version}
```

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  root: true,
  extends: ['@monokit/eslint-config/node-app'],
  rules: {} // project custom rules
};
```

Create `tsconfig.json` file in the root of your project.

### React app ESLint config

Install `@monokit/eslint-config` package:

```sh
lerna add --dev @monokit/eslint-config --scope={target_monorepo_package}
```

Install peer dependencies from the `@monokit/eslint-config` package:

```sh
yarn add -D eslint@{version}\
prettier@{version}\
@typescript-eslint/eslint-plugin@{version}\
eslint-plugin-import@{version}\
eslint-plugin-jest@{version}\
eslint-plugin-jsx-a11y@{version}\
eslint-plugin-prettier@{version}\
eslint-plugin-promise@{version}\
eslint-plugin-react@{version}\
eslint-plugin-react-hooks@{version}\
eslint-plugin-testing-library@{version}
```

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  root: true,
  extends: ['@monokit/eslint-config/react-app'],
  rules: {} // project custom rules
};
```

Create `tsconfig.json` file in the root of your project.

### React Native app ESLint config

Install `@monokit/eslint-config` package:

```sh
lerna add --dev @monokit/eslint-config --scope={target_monorepo_package}
```

Install peer dependencies from the `@monokit/eslint-config` package:

```sh
yarn add -D eslint@{version}\
prettier@{version}\
@typescript-eslint/eslint-plugin@{version}\
eslint-plugin-import@{version}\
eslint-plugin-jest@{version}\
eslint-plugin-jsx-a11y@{version}\
eslint-plugin-prettier@{version}\
eslint-plugin-promise@{version}\
eslint-plugin-react@{version}\
eslint-plugin-react-hooks@{version}\
eslint-plugin-testing-library@{version}\
eslint-plugin-react-native@{version}
```

Create `.eslintrc.js` file in the root of your project:

```javascript
module.exports = {
  root: true,
  extends: ['@monokit/eslint-config/react-native-app'],
  rules: {} // project custom rules
};
```

Create `tsconfig.json` file in the root of your project.

Create `.eslintignore` configuration file in order to exclude some directories and files from being linted by ESLint:

```text
# Ignore artifact directories
dist
build
coverage

# Ignore VSCode and WebStorm config directories
.idea
.vscode

```

## VSCode plugin

Plugin: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## WebStorm plugin

Plugin: https://plugins.jetbrains.com/plugin/7494-eslint

## Config file resolving process

ESLint will automatically look for .eslintrc.js config files in the directory of the file to be linted, and in successive parent directories all the way up to the root directory of the filesystem (/), the home directory of the current user (~/), or when root: true is specified.

## Notes

Debug which rules and plugins will be applied to the specific file:

```sh
{path_to_eslint}/eslint --print-config {path-to-some-file.ts} > eslint_config_report.json
```

Debug ESLint execution:

```sh
{path_to_eslint}/eslint --debug {path-to-some-file.ts}
```

## Resources

ESLint: https://eslint.org/docs/latest

Shareable configs: https://eslint.org/docs/latest/developer-guide/shareable-configs

Ignoring code: https://eslint.org/docs/latest/user-guide/configuring/ignoring-code
