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
        varsIgnorePattern: '(React|jsx|_.*)'
      }
    ],
    'no-console': 0,
    'no-useless-escape': 0,
    'no-debugger': 0,
    'space-before-function-paren': 'off',
    'global-require': 'off',
    'arrow-body-style': 'off',
    eqeqeq: ['error', 'smart'],
    'newline-per-chained-call': 0,
    'max-len': 0,
    'brace-style': 0,
    'react/jsx-uses-vars': 1,
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  },
  overrides: [
    {
      files: ['**/*.test.js', '__test__/**/*.js', '__tests__/**/*.js'],
      env: {
        jest: true
      }
    }
  ]
};
