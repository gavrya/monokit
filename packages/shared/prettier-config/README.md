# `@monokit/prettier-config`

The shareable configuration for Prettier.

Defines code formatting rules for Prettier.

## Usage

Install `prettier` as a dev dependency with the version from the peerDependencies section from package.json:

```console
lerna add --dev prettier@{peer_version} --scope={target_monorepo_package}
```

Install the package as a dev dependency:

```console
lerna add --dev @monokit/prettier-config --scope={target_monorepo_package}
```

Create `.prettierrc.js` configuration file with the next content in the root dir of your package:

```javascript
module.exports = require('@monokit/prettier-config');

```

or with the next content if you want to override some properties:

```javascript
module.exports = {
  ...require('@monokit/prettier-config'),
  semi: true, // override
};

```

## VSCode plugin

Plugin: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## WebStorm plugin

Plugin: https://plugins.jetbrains.com/plugin/10456-prettier

## Notes

If the `.editorconfig` file exists is in your project, Prettier will parse it and convert its properties to the corresponding Prettier configuration.

This configuration will be overridden by `.prettierrc.js`, etc.

Currently, the following EditorConfig properties are supported:

```ini
end_of_line
indent_style
indent_size/tab_width
max_line_length
```

## Resources

Prettier: https://prettier.io/docs/en/index.html

Prettier options: https://prettier.io/docs/en/options.html

Sharing configurations: https://prettier.io/docs/en/configuration.html#sharing-configurations
