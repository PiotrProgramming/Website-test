import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This base path is crucial for GitHub Pages deployment.
  // It should match the name of your GitHub repository.
  base: '/Website-test/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
});
