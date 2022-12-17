const prettierOptions = require('@monokit/prettier-config');

module.exports = {
  rules: {
    // eslint
    semi: ['error', 'always'],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-plusplus': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-exports': 'off',
    'class-methods-use-this': 'off',
    'max-depth': ['error', 2],
    'max-nested-callbacks': ['error', 1],

    // plugin: import
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-named-default': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        ],
        warnOnUnassignedImports: false,
      },
    ],

    // plugin: promise
    'promise/always-return': 'off',

    // plugin: testing-library
    'testing-library/prefer-screen-queries': 'off',
    'testing-library/prefer-presence-queries': 'off',

    // plugin: prettier
    'prettier/prettier': [
      'error',
      prettierOptions,
      {
        usePrettierrc: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.{spec,test}.*'],
      rules: {
        'max-nested-callbacks': ['error', 10],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // plugin: @typescript-eslint/eslint-plugin
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/consistent-type-exports': [
          'error',
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports' },
        ],
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
};
