const unixPrettier = require('@unix/prettier')

/** @type {import('prettier').Config} */
module.exports = {
  ...unixPrettier,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
