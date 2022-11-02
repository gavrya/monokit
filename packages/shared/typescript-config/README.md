# `@monokit/typescript-config`

The shareable configuration for Typescript.

Contains different types of base tsconfig.json configs.

## Usage

Install typescript package to the projects root (optional):

```console
lerna add --dev typescript@{peer_version} --scope={target_package_name}
```

Install `@monokit/typescript-config` package (to the target projects, not root):

```console
lerna add --dev @monokit/typescript-config --scope={target_package_name}
```

Create `tsconfig.json` file (in the target projects, not root) and extend base typescript config:

For Node app:

```json
{
  "extends": "@monokit/typescript-config/node-app.tsconfig.json",
  "compilerOptions": {},
  "include": [],
  "exclude": []
}
```

For React app:

```json
{
  "extends": "@monokit/typescript-config/react-app.tsconfig.json",
  "compilerOptions": {},
  "include": [],
  "exclude": []
}
```

For React Native app:

```json
{
  "extends": "@monokit/typescript-config/react-native-app.tsconfig.json",
  "compilerOptions": {},
  "include": [],
  "exclude": []
}
```

Modify `compilerOptions`, `include`, `exclude` properties according to your project needs.

Note that `compilerOptions`, `include`, `exclude` properties are optional.

## Resources

TSConfig reference: https://www.typescriptlang.org/tsconfig

Typescript base configs: https://github.com/tsconfig/bases

Typescript `extends` directive: https://www.typescriptlang.org/tsconfig#extends
