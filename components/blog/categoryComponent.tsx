import { getCategory } from "@/lib/contentful";
import MobileCategorySelect from "./mobileCategorySelect";
import DesktopCategorySelect, { ContentfulData } from "./desktopCategorySelect";

const CategoryComponent = async () => {
  const categoryData = await getCategory();

  return (
    <>
      {/* @ts-ignore */}
      <MobileCategorySelect data={categoryData} />
      {/* @ts-ignore */}
      <DesktopCategorySelect data={categoryData} />
    </>
  );
};

export default CategoryComponent;
