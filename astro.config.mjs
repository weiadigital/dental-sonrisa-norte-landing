import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'vercel',
  integrations: [
    vercel(),
    tailwind(),
  ],
  site: 'https://dentalsoniranorte.example',
});