/**@type {import('prettier').Config} */
export default {
  singleQuote: true,
  printWidth: 80,
  semi: false,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.json',
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
