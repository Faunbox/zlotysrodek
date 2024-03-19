import { getCategory } from "@/lib/contentful";
import CategoryButton from "./categoryButton";
import FilledButton from "../typography/filledButton";
import { redirect } from "next/navigation";
import Link from "next/link";

const CategoryComponent = async () => {
  const categoryData = await getCategory();

  return (
    <div className="w-full flex flex-row gap-4 items-center justify-center text-center py-8 font-montserrat text-green">
      <p>Kategoria: </p>
      <ul className="flex flex-row items-center justify-center divide-x-2">
        {categoryData.map((item) => {
          return (
            <CategoryButton
              item={item?.fields?.kategoriaPosta!}
              key={item?.fields?.kategoriaPosta! as string}
            />
          );
        })}
      </ul>
      <Link href={"/blog?page=1"}>Wszystkie posty</Link>
    </div>
  );
};

export default CategoryComponent;
