module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-refresh',
    'import',
    'eslint-comments',
    'react',
    'jsx-a11y',
    'react-hooks',
    'unused-imports',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/comma-dangle': 0,
    'import/no-anonymous-default-export': [
      'error',
      {
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: true,
        allowArrowFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: true,
      },
    ],
    'import/no-extraneous-dependencies': 'warn',
    'import/no-unresolved': ['error', { caseSensitive: false, ignore: ['^/', '.svg'] }],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        distinctGroup: false,
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@(@types|typings|types)',
            patternOptions: {
              matchBase: true,
            },
            group: 'type',
            position: 'after',
          },
          {
            pattern: '*.{css,scss,sass,less,styl}',
            patternOptions: {
              matchBase: true,
            },
            group: 'object',
            position: 'after',
          },
          {
            pattern: '/**',
            group: 'parent',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['@(react|react-native)', '*.{css,scss,sass,less,styl}'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        depth: 3,
      },
    ],
    'no-case-declarations': 'off',
    'no-empty': 'warn',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': ['warn'],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-arrow-function-lifecycle': 'off',
    'react/no-invalid-html-attribute': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}'],
      },
    ],
    'react/no-unused-class-component-methods': 'off',
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'react/prop-types': 0,
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
};
