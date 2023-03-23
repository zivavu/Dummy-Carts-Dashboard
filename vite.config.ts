import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dummy-Carts-Dashboard/',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
});
