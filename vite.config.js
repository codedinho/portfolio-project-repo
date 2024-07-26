import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-project/', // Ensure this matches your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'docs' // Output to the docs folder
  }
});
