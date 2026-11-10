// @ts-check
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'dist/',
      'dist-tracking/',
      '.astro/',
      'node_modules/',
      'test-results/',
      'playwright-report/',
    ],
  },
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  // Accessibility linting for markup in .astro files.
  eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // `role="list"` is deliberate on unstyled lists: Safari/VoiceOver drops
      // list semantics when `list-style: none` is applied.
      'astro/jsx-a11y/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
    },
  },
);
