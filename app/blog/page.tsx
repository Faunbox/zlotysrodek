import BlogPost from "@/components/blog/blogPost";
import CategoryComponent from "@/components/blog/categoryComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { getBlogPosts } from "@/lib/contentful";

const Blog = async () => {
  const posts = await getBlogPosts();

  return (
    <main className="page">
      <BackgroundedHeader>Blog</BackgroundedHeader>
      <CategoryComponent />
      <section className="flex flex-row flex-wrap gap-3 items-center justify-center">
        {posts.map((post) => {
          const { title, content, image, imageAlt, date, id } = post;
          return (
            <BlogPost
              key={id}
              id={id}
              title={title as string}
              post={content as any}
              thumbnail={image as string}
              thumbnailAlt={imageAlt as string}
              date={date as string}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Blog;
