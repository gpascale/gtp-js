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
    'no-console': 0,
    'no-useless-escape': 0,
    'no-debugger': 0,
    'space-before-function-paren': 'off',
    'global-require': 'off',
    'arrow-body-style': 'off',
  }
};
