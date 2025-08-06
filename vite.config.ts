import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: false, // Disable public directory copying for library builds
  build: {
    lib: {
      entry: resolve(__dirname, 'src/element-selector/index.tsx'),
      name: 'ElementSelector',
      fileName: 'element-selector',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-dom/client': 'ReactDOM'
        }
      }
    }
  }
})