import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			components: {
				projects: "layouts/Projects",
				featured: "components/Projects/Featured",
				project: "components/Projects/Project",
			},
			apiOptions: {
				region: "us",
			},
		}),
		react(),
		tailwind(),
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
