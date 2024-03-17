import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ post }: { post: any }) => {
  const { title, image, imageAlt, date, id, category, shortDescription } = post;
  //@ts-ignore
  // const categorys = category.map((post) => post.fields.kategoriaPosta);

  return (
    <div className="w-full max-w-[400px] flex flex-col items-center justify-center shadow-lg text-offertGreen pb-4">
      <Link href={`/blog/${id}`}>
      <Image
        src={`https:${image}?w=440&h=500&fm=webp`}
        height={440}
        width={500}
        alt={imageAlt as string}
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row justify-between px-2">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <h2 className="text-2xl font-semibold font-abhaya pl-2">{title}</h2>
        <div className="text-md font-montserrat font-light pl-2">
          <p className="text-black">{shortDescription}</p>
        </div>
        <div className="text-right pr-2">
          <Link href={`/blog/${id}`}>
            <button>
              Czytaj dalej{" "}
              <Image
                src={"/images/strzalka dluga.svg"}
                width={25}
                height={20}
                alt="zielona strzalka"
                className="inline-block"
              />
            </button>
          </Link>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BlogPost;
