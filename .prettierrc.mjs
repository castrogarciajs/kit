/**@type {import('prettier').Config} */
export default {
  singleQuote: true,
  printWidth: 80,
  semi: false,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.json',
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
