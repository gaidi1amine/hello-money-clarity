import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      publishDate: z.coerce.date(),
      featuredImage: image(),
      featuredImageAlt: z.string(),
      description: z.string(),
      featured: z.boolean().default(false),
      featuredOrder: z.number().default(999),
      tags: z.array(z.string()).default([]),
      metaDescription: z.string().optional(),
      socialImage: image().optional(),
      author: z.string().default('Hello Money Clarity'),
      draft: z.boolean().default(false)
    })
});

const settings = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      contactEmail: z.string().email().optional(),
      pinterestUrl: z.string().optional(),
      affiliateDisclaimer: z.string().optional(),
      footerText: z.string().optional(),
      footerLinks: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
      heroHeadline: z.string().optional(),
      heroSubheading: z.string().optional(),
      ctaText: z.string().optional(),
      ctaLink: z.string().optional(),
      featuredPosts: z.array(z.string()).optional()
    })
    .passthrough()
});

export const collections = { blog, settings };
