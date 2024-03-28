import { getBlogPosts } from "@/lib/contentful";
 
const URL = process.env.NEXTAUTH_URL
 
export default async function sitemap() {

    const blogPosts = await getBlogPosts(0, 0)

  const posts = blogPosts.map(({ id, date }) => ({
    url: `${URL}/blog/${id}`,
    lastModified: date,
  }));
 
  const routes = ["/", "/blog", "/kontakt", "o-mnie", "oferta", "psychodietetyk"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}