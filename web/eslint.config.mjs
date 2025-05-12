import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    env: {
      browser: true,
    },
    plugins: {
      react,
      prettier: prettierPlugin,
    },
    rules: {
      ...react.configs.recommended.rules,
      'prettier/prettier': 'error',
      'import/no-anonymous-default-export': 'off',
      'jsx-a11y/alt-text': 'off',
      'react/react-in-jsx-scope': 'off',
      // temp
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
  prettierConfig,
];
