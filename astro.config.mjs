import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lahora24.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
