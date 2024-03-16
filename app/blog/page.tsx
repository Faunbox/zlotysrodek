import BlogPost from "@/components/blog/blogPost";
import CategoryComponent from "@/components/blog/categoryComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { getBlogPosts } from "@/lib/contentful";

const Blog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const posts = (await getBlogPosts()).filter(
    (post) => post.category === searchParams.category
  );

  // console.log(posts);

  return (
    <main className="page">
      <BackgroundedHeader>Blog</BackgroundedHeader>
      <CategoryComponent />
      <section className="flex flex-row flex-wrap gap-3 items-center justify-center">
        {posts.map((post) => {
          return <BlogPost key={post.id} post={post} />;
        })}
      </section>
    </main>
  );
};

export default Blog;
