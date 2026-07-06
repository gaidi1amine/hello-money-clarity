import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

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
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
