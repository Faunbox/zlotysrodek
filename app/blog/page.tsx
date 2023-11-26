import BlogPost from "@/components/blog/blogPost";
import { getBlogPosts } from "@/lib/contentful";

const Blog = async () => {
  const posts = await getBlogPosts();

  return (
    <main>
      <h2 className="mb-4">Blog</h2>
      {posts.map((post, index) => {        
        return <BlogPost key={index} title={post.tytu as string} post={post.trePosta as any}/>;
      })}
    </main>
  );
};

export default Blog;
