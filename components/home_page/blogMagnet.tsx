import Link from "next/link";
import FilledButton from "../typography/filledButton";

const BlogMagnet = () => {
  return (
    <section className="bg-[url('/images/blog.webp')] w-full h-[55vh] my-20 bg-bottom bg-cover bg-no-repeat relative">
      <div className="absolute bottom-20 left-[25%]">
        <Link href={"/blog"}>
          <FilledButton color="bg-darkGreen" text="white" px={12}>
            BLOG
          </FilledButton>
        </Link>
      </div>
      <div className="flex flex-col absolute top-10 md:top-[20%] md:right-[10%] lg:right-40 text-2xl leading-relaxed lg:text-darkGreen">
        <p>Znajdź swój złoty środek.</p>
        <p>Zmień swoje myśli,</p>
        <p>by zmienić swoje ciało.</p>
      </div>
    </section>
  );
};

export default BlogMagnet;
