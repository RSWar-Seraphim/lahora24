import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Core fields
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    authorRole: z.string().optional(),
    authorAvatar: z.string().optional(),
    date: z.date(),
    category: z.enum(['ia', 'ciberseguridad', 'crypto']),
    image: z.string().optional(),
    readTime: z.string().optional(),
    draft: z.boolean().optional(),

    // Display control
    featured: z.boolean().default(false),  // Shows in Hero section (Headliners)

    // Video content fields
    isVideo: z.boolean().default(false),   // Shows in Videos Destacados section
    videoUrl: z.string().optional(),       // YouTube embed URL
    videoDuration: z.string().optional(),  // e.g., "18:45"
    videoViews: z.string().optional(),     // e.g., "125K vistas"

    // Optional metadata
    tags: z.array(z.string()).optional(),  // For advanced filtering
  }),
});

export const collections = {
  posts: postsCollection,
};
