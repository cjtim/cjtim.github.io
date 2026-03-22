import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cjtim.com',
  integrations: [react(), svelte(), sitemap()],
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
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
});