import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindPlugin from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dentalsoniranorte.example',
  output: 'vercel',
  vite: {
    plugins: [tailwindPlugin()],
  },
  integrations: [vercel()],
});