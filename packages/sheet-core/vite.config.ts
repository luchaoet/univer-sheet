import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',
      outDir: 'lib/types',
    }),
  ],
  build: {
    target: 'chrome70',
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      name: pkg.name,
      cssFileName: 'index',
      fileName: (format) => `${format}/index.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [/@univerjs\//,'react','uuid'],
    }
  },
})
