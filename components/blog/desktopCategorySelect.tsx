import Link from "next/link";
import CategoryButton from "./categoryButton";

export type ContentfulData = { fields: { kategoriaPosta: string } };

const DesktopCategorySelect = ({ data }: { data: ContentfulData[] }) => {
  return (
    <div className="hidden md:flex w-full flex-row gap-4 items-center justify-center text-center py-8 font-montserrat text-green">
      <p>Kategoria: </p>
      <ul className="flex flex-row items-center justify-center divide-x-2">
        {data.map((item: ContentfulData) => {
          return (
            <CategoryButton
              item={item?.fields?.kategoriaPosta!}
              key={item?.fields?.kategoriaPosta!}
            />
          );
        })}
      </ul>
      <Link href={"/blog?page=1"}>Wszystkie posty</Link>
    </div>
  );
};

export default DesktopCategorySelect;
