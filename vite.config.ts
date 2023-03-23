import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
