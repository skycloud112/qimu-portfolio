import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ignores: [
      '**/.idea/*',
      '**/.next/*',
      '.storybook',
      'tsconfig.json',
      '**/node_modules/*',
      'coverage',
      'next.config.js'
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.d.ts'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          editorconfig: true,
          endOfLine: 'auto',
          jsxBracketSameLine: true,
          jsxSingleQuote: true,
          printWidth: 100,
          quoteProps: 'as-needed',
          semi: true,
          singleQuote: true,
          usePrettierrc: false,
        },
      ],
    }
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
);