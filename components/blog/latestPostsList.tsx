import { getBlogPosts } from "@/lib/contentful";
import LatestPostComponent from "./latestPostComponent";

const LatestPostsList = async () => {
  const latestPosts = await getBlogPosts(3, 0);

  return (
    <div className="w-3/12 sticky top-10 flex flex-col items-center justify-start py-10">
      <h4 className="text-xl font-montserrat">Ostatnie posty:</h4>
      <ul className="flex flex-row lg:flex-col w-full gap-4">
        {latestPosts.map((post) => {
          return <LatestPostComponent key={post.id} post={post} />;
        })}
      </ul>
    </div>
  );
};

export default LatestPostsList;
