module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'import/first': 0,
    'space-before-function-paren': 0,
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': 1
    }]
  }
}
