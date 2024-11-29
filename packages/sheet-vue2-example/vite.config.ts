import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': path.resolve('./node_modules/vue/dist/vue.runtime.esm.js'),
    }
  },
})
