import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindPlugin from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dentalsoniranorte.example',
  output: 'server',
  vite: {
    plugins: [tailwindPlugin()],
  },
  integrations: [cloudflare()],
});