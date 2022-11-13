# `@monokit/stylelint-config`

The shareable configuration for Stylelint

## Usage

Install ESLint plugin for your favorite code editor

Install `@monokit/stylelint-config` package:

```sh
lerna add --dev @monokit/stylelint-config --scope={target_monorepo_package}
```

Create `stylelint.config.js` config file

In case of using base Stylelint config:

```console
module.exports = require('@monokit/stylelint-config');
```

In case of using Stylelint config for Styled Components

```console
module.exports = require('@monokit/stylelint-config/styled.stylelint.config.js');
```

Create `.stylelintignore` config file in the root of your projects (optional)

```ini
# Ignore artifact directories
dist
build
coverage

# Ignore VSCode and WebStorm config directories
.idea
.vscode
```

## VSCode plugin

Plugin: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

## WebStorm plugin

Plugin: https://plugins.jetbrains.com/plugin/9276-intellij-stylelint-plugin

## Notes

It is not possible to reformat css inside of Styled Components, `--fix` option is ignored when a custom Stylelint parser is used.

## Dependencies

Depends on prettier config (`@monokit/prettier-config` package)

## Resources

Stylelint: https://stylelint.io/

Styled components and stylelint: https://styled-components.com/docs/tooling#stylelint

Stylelint ignore files: https://stylelint.io/user-guide/ignore-code/#files-entirely

## TODO

Try to create universal config which will work for css, scss and styled components by using `override` config option
