import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const PostContent = ({ data }: { data: string[] }) => {
  //@ts-ignore
  const { title, date, image, imageAlt, content, category } =
    data;

  return (
    <div className="flex flex-col gap-2 w-8/12 px-10">
      <Image
        src={`https:${image}?w=1200&h=800&fm=webp`}
        height={440}
        width={500}
        alt={imageAlt as string}
        className="object-cover"
      />
      <div className="flex flex-col gap-4 w-full">
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
      </div>
      <div className="w-2/12 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default PostContent;
