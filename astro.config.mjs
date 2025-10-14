import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react()
  ],
  site: 'https://nss-workshops.github.io',
  base: '/catalog',
  output: 'static',
  build: {
    assets: 'assets'
  }
});