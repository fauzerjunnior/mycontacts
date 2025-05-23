import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'class-methods-use-this': 'off',
      'no-unused-vars': ['error', { argsIgnorePatterns: 'next' }],
    },
  },
]);
