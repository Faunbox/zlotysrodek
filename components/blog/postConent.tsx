import { Post } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const PostContent = ({ data }: { data: Post }) => {
  const { title, date, image, imageAlt, content, category, tags } = data;

  return (
    <div className="flex flex-col gap-2 w-full lg:w-[70vw] items-center justify-center lg:justify-start mt-10 pb-10 bg-blogPost shadow-large">
      <Image
        src={`https:${image}?w=1200&h=800&fm=webp`}
        height={640}
        width={1200}
        alt={imageAlt as string}
        placeholder="blur"
        blurDataURL={`https:${image}?w=10&h=10&fm=webp`}
        className="w-full max-h-[300px] object-none "
      />
      <div className="flex flex-col gap-4 w-full px-10 md:px-5">
        <div className="flex flex-row justify-between px-2">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <h2 className="text-2xl font-semibold font-abhaya pl-2">
          {title as string}
        </h2>
        <div className="text-md font-montserrat font-light pl-2">
          {documentToReactComponents(content as any)}
        </div>
        <div className="flex flex-row ">
          <p className="pr-2">Tagi: </p>
          <ul className="flex flex-row gap-1">
            {tags.map((tag: string) => {
              return (
                <li
                  key={tag}
                  className="bg-lightGreen text-xs rounded-full py-1 px-2"
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
