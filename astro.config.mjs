// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hkmcrefrigerators.com',
  integrations: [mdx(), sitemap(), react()],

  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Inter Tight',
          cssVariable: '--font-inter-tight',
          fallbacks: ['sans-serif'],
          weights: [400, 500, 600, 700, 800],
          styles: ['normal'],
          subsets: ['latin'],
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});