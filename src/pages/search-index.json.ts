import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const categoryNames: Record<string, string> = {
  ia: 'Inteligencia Artificial',
  ciberseguridad: 'Ciberseguridad',
  crypto: 'Criptomonedas',
  general: 'General',
};

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const index = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => ({
      slug: post.slug,
      title: post.data.title,
      excerpt: post.data.excerpt || '',
      category: post.data.category,
      categoryName: categoryNames[post.data.category] || post.data.category,
      author: post.data.author,
      date: post.data.date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      image: post.data.image,
      tags: post.data.tags || [],
    }));

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
