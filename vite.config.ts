import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // IMPORTANT: Change this to your repository name before deploying
  // e.g., for https://username.github.io/my-repo/, set base: '/my-repo/'
  base: '/',
});

