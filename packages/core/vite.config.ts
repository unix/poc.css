import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'

const removeGeneratedJs = (): Plugin => ({
  name: 'remove-generated-js',
  async closeBundle() {
    await rm(resolve(import.meta.dirname, 'dist/poc.mjs'), { force: true })
  },
})

export default defineConfig({
  plugins: [removeGeneratedJs()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'poc',
      fileName: 'poc',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'poc.[ext]',
      },
    },
  },
})
