import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const indexCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/index" }),
  schema: z.object({
    title: z.string(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  index: indexCollection,
};
