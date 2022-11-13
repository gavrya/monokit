# `@monokit/babel-config`

The shareable configuration for Babel

## Usage

Install package to the projects root:

```console
lerna add --dev @monokit/babel-config --scope={target_package_name}
```

Install peer package (to the target projects, not root):

```console
lerna add --peer @babel/runtime@{peer_version} --scope={target_package_name}
```

For Node app:

Create `babel.config.js` file (in the target projects, not root):

```javascript
module.exports = require('@monokit/babel-config/node-app');
```

Create npm scripts optionally (in the target projects, not root):

```json
{
  "scripts": {
    "babel-node-app": "NODE_ENV=production babel --config-file {path to babel.config.js} --out-dir {output dir} {input dir} --extensions '.js,.jsx,.ts,.tsx'"
  }
}
```

For React app:

Create `babel.config.js` file (in the target projects, not root):

```javascript
module.exports = require('@monokit/babel-config/react-app');
```

Create npm scripts optionally (in the target projects, not root):

```json
{
  "scripts": {
    "babel-react-app": "NODE_ENV=production babel --config-file {path to babel.config.js} --out-dir {output dir} {input dir} --extensions '.js,.jsx,.ts,.tsx'"
  }
}
```

## Dependencies

Depends on browserslist config (`@monokit/browserslist-config` package)

Depends on typescript config (`@monokit/typescript-config` package)

## Resources

Babel transpiler: https://babeljs.io/docs/en/

Babel transpile online: https://babeljs.io/repl

CRA Babel config example: https://github.com/facebook/create-react-app/blob/main/packages/babel-preset-react-app/create.js

Babel and Styled Components: https://styled-components.com/docs/tooling#usage
