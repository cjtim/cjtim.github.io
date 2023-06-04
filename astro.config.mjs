import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      noExternal: ['react-icons'],
    }
  }
});