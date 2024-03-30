"use client";

import { useRouter } from "next/navigation";
import OptionCategorySelect from "./optionCategoryComponent";
import { ContentfulData } from "./desktopCategorySelect";
import Link from "next/link";

const MobileCategorySelect = ({ data }: { data: ContentfulData[] }) => {
  const router = useRouter();

  function handleClick(url: string) {
    if (url !== "allPosts") {
      return router.replace(
        `/blog?category=${decodeURI(url).toLowerCase()}&page=1`
      );
    }
    return router.replace("/blog?page=1");
  }

  return (
    <div className="flex md:hidden py-4">
      <label htmlFor="category-select">Kategoria: </label>
      <select
        name="category"
        id="category-select"
        onChange={(e) => handleClick(e.target.value)}
      >
        <option value={"allPosts"}>Wszystkie posty</option>
        {data.map((category: any) => {
          return (
            <OptionCategorySelect
              value={category?.fields?.kategoriaPosta!}
              key={category?.fields?.kategoriaPosta! as string}
            />
          );
        })}
      </select>
    </div>
  );
};

export default MobileCategorySelect;
