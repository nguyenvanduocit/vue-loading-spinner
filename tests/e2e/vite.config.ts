import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  root: __dirname,
  resolve: {
    alias: {
      'vue-loading-spinner': resolve(__dirname, '../../src/index.ts'),
    },
  },
})
