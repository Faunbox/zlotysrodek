import { getSinglePost } from "@/lib/contentful";
import { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import { usePathname  } from 'next/navigation'

type Props = {
  params: { id: string};
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  

  const post = await getSinglePost(id);
  const { title, date, image, imageAlt, shortDescription } = post;

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
  const { title, date, image, imageAlt } = post;

  return (
    <main className="page">
      <h4>{title as string}</h4>
    </main>
  );
};

export default BlogPostPage;
