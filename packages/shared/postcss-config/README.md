# `@monokit/postcss-config`

The shareable configuration for PostCSS.

PostCSS is a tool for transforming styles, and it works similar to Babel.

## Usage

Install `@monokit/postcss-config` package as a dev dependency:

```console
lerna add --dev @monokit/postcss-config --scope={target_monorepo_package}
```

Create `postcss.config.js` config file:

```javascript
module.exports = require('@monokit/postcss-config');
```

## VSCode plugin

Plugin: https://marketplace.visualstudio.com/items?itemName=csstools.postcss

## WebStorm plugin

Plugin: https://plugins.jetbrains.com/plugin/8578-postcss

## Notes

It uses `.browserslistrc` config file.

Look at `@monokit/browserslist-config` package.

The `postcss-preset-env` plugin already includes `autoprefixes`: https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#autoprefixer

## Resources

PostCSS: https://postcss.org

PostCSS repo: https://github.com/postcss/postcss

Autoprefixer: https://github.com/postcss/autoprefixer#autoprefixer-

