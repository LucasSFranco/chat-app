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
    'import/no-duplicates': 'off',
    'multiline-ternary': ['error', 'never'],
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'quote-props': ['error', 'consistent'],
    'react/display-name': 'off',
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': { 'when': 'always' } }],
    'react/jsx-tag-spacing': ['error', { 'closingSlash': 'never', 'beforeSelfClosing': 'always', 'afterOpening': 'never', 'beforeClosing': 'never' }],
    'react/prop-types': 'off'
  }
}
