import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-project/', // Replace with your repository name
  plugins: [react()],
});
