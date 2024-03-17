"use client";
import { useRouter } from "next/navigation";

const CategoryButton = (item: any) => {
  const router = useRouter();

  function handleClick() {
    router.replace(
      `/blog?category=${decodeURI(item.item).toLowerCase()}&page=1`
    );
  }

  return (
    <li className=" cursor-pointer px-4" onClick={() => handleClick()}>
      <button className="hover:-translate-y-1 duration-300">{item.item}</button>
    </li>
  );
};

export default CategoryButton;
