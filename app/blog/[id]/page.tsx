import { getSinglePost } from "@/lib/contentful";

async function getPostById(id: string) {}

const BlogPostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getSinglePost(params.id);
  const { title, date, image, imageAlt } = post;

  return (
    <main className="page">
      <h4>{title as string}</h4>
    </main>
  );
};

export default BlogPostPage;
