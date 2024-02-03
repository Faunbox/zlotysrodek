import FilledButton from "../typography/filledButton";

const BlogMagnet = () => {
  return (
    <section className="bg-[url('/images/blog.webp')] w-full h-[55vh] my-20 bg-bottom bg-cover bg-no-repeat relative">
      <div className="absolute bottom-20 left-[25%]">
        <FilledButton color="bg-darkGreen" text="white" px={12}>
          BLOG
        </FilledButton>
      </div>
      <div className="flex flex-col absolute top-10 right-40 text-2xl leading-relaxed text-darkGreen">
        <p>Znajdź swój złoty środek.</p>
        <p>Zmień swoje myśli,</p>
        <p>by zmienić swoje ciało.</p>
      </div>
    </section>
  );
};

export default BlogMagnet;
