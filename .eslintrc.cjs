module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/jsx-curly-spacing": [
      "warn",
      "never",
      {
          "allowMultiline": true
      }
  ],
  "react/jsx-curly-brace-presence": [
    "warn",
    {
        "props": "always",
        "children": "never"
    }
],
"react/jsx-max-props-per-line": [
  "warn"
],
"react/jsx-indent": [
  "warn",
  2
],
"react/jsx-indent-props": [
  "warn",
  2
],
"react/jsx-closing-tag-location": [
  "warn"
],
"react/jsx-closing-bracket-location": [
  "warn"
],
"react/jsx-first-prop-new-line": [
  "warn",
  "multiline"
],
"semi": 0
  },
  "react/prop-types": "off"
}
