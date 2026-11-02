import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    astro: true,
    endOfLine: 'lf',
    jsxSingleQuote: true,
    printWidth: 100,
    semi: false,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: true,
    sortTailwindcss: true,
    tabWidth: 2,
    trailingComma: 'es5',
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    options: { typeAware: true, typeCheck: true },
    rules: {
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      'sort-keys': 'error',
      'sort-vars': 'error',
      'vite-plus/prefer-vite-plus-imports': 'error',
    },
  },
  staged: {
    '*': 'vp check --fix',
  },
})
