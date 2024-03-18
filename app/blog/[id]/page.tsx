import { getSinglePost } from "@/lib/contentful";
import { Metadata, ResolvingMetadata } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import CategoryComponent from "@/components/blog/categoryComponent";
import Image from "next/image";
import Link from "next/link";
import PostContent from "@/components/blog/postConent";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const post = await getSinglePost(id);
  const { title, date, image, imageAlt, content, category, shortDescription } =
    post;

  return {
    title: title as string,
    description: shortDescription as string,
    openGraph: {
      title: title as string,
      description: shortDescription as string,
      url: `https://zlotysrodek.vercel.app`,
      siteName: "Psychodietetyka Dorota Sojecka",
      images: [`https:${image}/?w=1200&h=640&fm=webp`],
      locale: "pl_PL",
      type: "website",
    },
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const post = await getSinglePost(params.id);
  const { title, date, image, imageAlt, content, category, shortDescription } =
    post;

  return (
    <main className="page">
      <BackgroundedHeader>Blog</BackgroundedHeader>
      <CategoryComponent />
      {/* @ts-ignore */}
      <PostContent data={post} />
      
    </main>
  );
};

export default BlogPostPage;
