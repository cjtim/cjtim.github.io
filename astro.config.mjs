import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cjtim.com',
  integrations: [tailwind(), react(), svelte(), sitemap()],
  output: "hybrid",
  adapter: vercel(),
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      noExternal: ['react-icons']
    }
  },
  plugins: ['prettier-plugin-astro'],
  overrides: [{
    files: '*.astro',
    options: {
      parser: 'astro'
    }
  }],
  experimental: {
    devOverlay: true
  }
});