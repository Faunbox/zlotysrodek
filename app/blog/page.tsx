"use server";
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
  const blogPostLimit = Number(process.env.WEBSITE_DEFAULT_BLOG_POSTS_LIMIT);
  const skipValue = searchParams.page || 0;
  const category = (searchParams.category as string) || "";
  const filter = category?.charAt(0).toUpperCase() + category?.slice(1);
  let skip = Number(skipValue) - 1;

  const posts = await getBlogPosts(blogPostLimit, skip, filter);
  const total = !posts[0] ? 1 : posts[0]?.total;

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
