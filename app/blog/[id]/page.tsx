async function getPostById(id: string) {
  "use server";
  console.log("działa");
}

const BlogPostPage = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default BlogPostPage;
