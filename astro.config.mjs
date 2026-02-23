// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://awingfu.github.io',
  vite: {
    // @ts-ignore - @tailwindcss/vite uses Vite 7 types, Astro bundles Vite 6
    plugins: [tailwindcss()],
  },
});
