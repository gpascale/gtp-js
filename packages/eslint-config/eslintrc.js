module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    },
    sourceType: 'module'
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
        ObjectExpression: 'off',
        ArrayExpression: 'off'
      }
    ],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        argsIgnorePattern: '(next|err|req|res|_.*)',
        varsIgnorePattern: 'React|jsx'
      }
    ],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'no-console': 0,
    'no-useless-escape': 0,
    'no-debugger': 0,
    'space-before-function-paren': 'off',
    'global-require': 'off',
    'arrow-body-style': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }]
  }
};
