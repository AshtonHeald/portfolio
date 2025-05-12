import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const skills = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    concepts: z.array(z.string()),
    icon: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featured: z.string(),
      year: z.string().or(z.number()),
      cover: image(),
      coverAlt: z.string(),
      techstack: z.array(z.string()),
      description: z.string(),
    }),
});

export const collections = { projects: projects, skills: skills };
