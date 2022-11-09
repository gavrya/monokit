# `@monokit/browserslist-config`

The shareable configuration for Browserslist.

Defines target browsers that project supports.

## Usage

Install Browserslist plugin for your favorite code editor.

Install `@monokit/browserslist-config` package as a dev dependency:

```console
lerna add --dev @monokit/browserslist-config --scope={target_package_name}
```

Use Browserslist configuration.

### Usage option #1

Add `browserslist` key in your `package.json` file and extend shareable config:

```json
{
  "browserslist": [
    "extends @monokit/browserslist-config"
  ]
}
```

### Usage option #2

Copy `.browserslistrc` config file to your project root:

```ini
[production]
>0.2%
not dead
not op_mini all

[development]
last 1 chrome version
last 1 firefox version
last 1 safari version

[test]
last 1 chrome version
last 1 firefox version
last 1 safari version
```

## VSCode plugin

Plugin: https://marketplace.visualstudio.com/items?itemName=webben.browserslist

## WebStorm plugin

Plugin: https://plugins.jetbrains.com/plugin/16139-browserslist

## Resources

Browserslist github: https://github.com/browserslist/browserslist#for-enterprise

Check Browserslist queries online: https://browsersl.ist
