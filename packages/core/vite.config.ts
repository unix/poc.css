import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.scss',
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
