import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: "page",
			source: "blog/*.md",
			// Define custom schema for docs collection
			schema: z.object({
				date: z.string(),
        published: z.boolean(),
		  }),
		}),
	},
});
