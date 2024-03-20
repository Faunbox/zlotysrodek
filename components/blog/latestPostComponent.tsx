import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/contentful";

const LatestPostComponent = ({ post }: { post: Post }) => {
  const { title, image, imageAlt, date, id, category } = post;

  return (
    <div className="w-full max-w-[300px] flex flex-col items-center justify-center shadow-lg text-offertGreen pb-4">
      <Link href={`/blog/${id}`} prefetch>
        <Image
          priority={true}
          src={`https:${image}?w=350&h=200&fm=webp`}
          height={200}
          width={350}
          alt={imageAlt as string}
          placeholder="blur"
          blurDataURL={`https:${image}?w=40&h=30&fm=webp`}
        />
        <div className="flex flex-col gap-4 w-full items-end justify-end px-4">
          <p>{date}</p>
          <h2 className="text-large font-semibold font-abhaya pl-2">{title}</h2>
          <p>{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default LatestPostComponent;
