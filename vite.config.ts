import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reactAiSrcPlugin } from 'ai-src/react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [reactAiSrcPlugin(), react()],
    // Keep public assets available during Vite dev, but skip copying them when building the library.
    publicDir: isDev ? 'public' : false,
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
  }
})
