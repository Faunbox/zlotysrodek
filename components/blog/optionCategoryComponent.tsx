"use client";
import { useRouter } from "next/navigation";

const OptionCategorySelect = (item: any) => {
  const router = useRouter();

  function handleClick() {
    router.replace(
      `/blog?category=${decodeURI(item.value).toLowerCase()}&page=1`
    );
  }

  return (
    <option className="cursor-pointer px-4" value={item.value}>
      {item.value}
    </option>
  );
};

export default OptionCategorySelect;
