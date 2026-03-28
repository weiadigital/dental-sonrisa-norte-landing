import { defineConfig } from 'astro/config';
import tailwindPlugin from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dentalsoniranorte.example',
  output: 'vercel',
  vite: {
    plugins: [tailwindPlugin()],
  },
  // integrations: [] // Vercel integration temporarily omitted to fix build
});