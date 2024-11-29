import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import pkg from './package.json';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outDir: 'lib/types',
    }),],
  build: {
    target: 'chrome70',
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      name: pkg.name,
      fileName: (format) => `${format}/index.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue','@xquant/sheet-core'],
    },
  },
})