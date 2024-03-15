import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({
  title,
  thumbnail,
  post,
  thumbnailAlt,
  date,
  id,
}: {
  title?: string;
  thumbnail?: string;
  post?: Document;
  thumbnailAlt?: string;
  date?: string;
  id?: string;
}) => {
  return (
    <div className="w-full max-w-[440px] flex flex-col items-center justify-center shadow-lg border-1 border-darkGreen">
      <Link href={`/blog/${id}`}>
        <Image
          src={`https:${thumbnail}?w=440&h=500&fm=webp`}
          height={440}
          width={500}
          alt={thumbnailAlt as string}
        />
        <div className="flex flex-row justify-between px-2">
          <p>{date}</p>
          <p>{date}</p>
        </div>
        <h2 className="text-2xl font-semibold font-abhaya pl-2">{title}</h2>
        {documentToReactComponents(post as any)}
      </Link>
    </div>
  );
};

export default BlogPost;
