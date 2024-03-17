import BlogPost from "@/components/blog/blogPost";
import CategoryComponent from "@/components/blog/categoryComponent";
import BlogPostPagination from "@/components/blog/pagination";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { getBlogPosts } from "@/lib/contentful";

const Blog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const blogPostLimit = 2;
  let skip = 0

  const posts = await getBlogPosts(blogPostLimit, skip);
  const total = posts[0].total;

  return (
    <main className="page">
      <BackgroundedHeader>Blog</BackgroundedHeader>
      <CategoryComponent />
      <section className="flex flex-row flex-wrap gap-8 items-center justify-center">
        {posts.map((post) => {
          return <BlogPost key={post.id} post={post} />;
        })}
      </section>
      <BlogPostPagination limit={blogPostLimit} total={total} />
    </main>
  );
};

export default Blog;
