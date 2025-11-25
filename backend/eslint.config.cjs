// eslint.config.cjs
const { defineConfig } = require('eslint/config');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');

module.exports = defineConfig([
  {
    files: ['**/*.ts'],
    ignores: ['dist/**', 'coverage/**', 'node_modules/**', 'logs/**'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'off', // ← THIS REMOVES THE 6 COVERAGE WARNINGS
    },

    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...prettierConfig.rules,

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
]);
