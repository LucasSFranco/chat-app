module.exports = {
  env: { browser: true, es2021: true },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'curly': ['error', 'multi', 'consistent'],
    'multiline-ternary': ['error', 'never'],
    'quote-props': ['error', 'consistent'],
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': { 'when': 'always' } }],
    'react/jsx-tag-spacing': ['error', { 'closingSlash': 'never', 'beforeSelfClosing': 'always', 'afterOpening': 'never', 'beforeClosing': 'never' }],
    'no-use-before-define': 'off'
  }
}
