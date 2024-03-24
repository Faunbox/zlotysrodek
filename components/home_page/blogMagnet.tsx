import Link from "next/link";
import WideButton from "../typography/wideButton";

const BlogMagnet = () => {
  return (
    <section className="bg-[url('/images/blog.webp')] w-screen max-w-[2000px] h-[55vh] max-h-[450px] my-20 bg-bottom bg-cover bg-no-repeat relative">
      <div className="absolute bottom-20 left-[25%]">
        <Link href={"/blog"}>
          <WideButton color="bg-darkGreen" text="white">
            BLOG
          </WideButton>
        </Link>
      </div>
      <div className="flex flex-col absolute top-10 md:top-[20%] right-[10%] lg:right-40 font-light text-2xl leading-relaxed text-darkGreen">
        <p>Znajdź swój złoty środek.</p>
        <p>Zmień swoje myśli,</p>
        <p>by zmienić swoje ciało.</p>
      </div>
    </section>
  );
};

export default BlogMagnet;
