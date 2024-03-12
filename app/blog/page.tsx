import BlogPost from "@/components/blog/blogPost";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { getBlogPosts } from "@/lib/contentful";

const Blog = async () => {
  const posts = await getBlogPosts();

  return (
    <main className="page">
      <BackgroundedHeader>Blog</BackgroundedHeader>
      {posts.map((post, index) => {
        return (
          <BlogPost
            key={index}
            title={post.tytu as string}
            post={post.trePosta as any}
          />
        );
      })}
    </main>
  );
};

export default Blog;
