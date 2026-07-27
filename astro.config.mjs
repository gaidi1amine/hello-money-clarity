import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://hello-money-clarity.pages.dev',
  output: 'static',
  trailingSlash: 'ignore',

  devToolbar: {
    enabled: false
  },

  vite: {
    optimizeDeps: {
      exclude: ['aria-query', 'axobject-query']
    }
  },

  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },

  adapter: cloudflare()
});