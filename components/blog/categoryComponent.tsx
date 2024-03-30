import { getCategory } from "@/lib/contentful";
import CategoryButton from "./categoryButton";
import Link from "next/link";
import OptionCategorySelect from "./optionCategoryComponent";
import MobileCategorySelect from "./mobileCategorySelect";

const CategoryComponent = async () => {
  const categoryData = await getCategory();

  return (
    <>
      <MobileCategorySelect data={categoryData} />
      <div className="hidden md:flex w-full flex-row gap-4 items-center justify-center text-center py-8 font-montserrat text-green">
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
    </>
  );
};

export default CategoryComponent;
