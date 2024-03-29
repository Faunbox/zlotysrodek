import { getBlogPosts } from "@/lib/contentful";

const URL = process.env.NEXTAUTH_URL;

export default async function sitemap() {
  const blogPosts = await getBlogPosts(0, 0);

  const posts = blogPosts.map((post) => ({
    url: `${URL}/blog/${post.id}`,
    lastModified: post.date,
  }));

  const routes = [
    "",
    "blog",
    "kontakt",
    "o-mnie",
    "oferta",
    "psychodietetyk",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
