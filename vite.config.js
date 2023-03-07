import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'react-nes',
      filename: 'react-nes'
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom'
      ],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'RactDOM'
        }
      }
    }
  }
})
