"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";

const BlogPostPagination = ({
  total,
  limit,
}: {
  total: number;
  limit: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const category = searchParams.get("category");

  const totalPages = Math.ceil(Number(total / limit));
  const [pageState, setPageState] = useState(Number(page || 1));

  const numbers: ReactElement[] = [];

  for (let i = 0; i < totalPages; i++) {
    const page = i + 1;
    numbers.push(
      <li
        className={`px-2 ${pageState === page && "font-bold"}`}
        key={i}
        onClick={() => selectPage(page)}
      >
        <button>{page}</button>
      </li>
    );
  }

  //checks for number of page via sheachParams
  useEffect(() => {
    if (Number(page) > totalPages) {
      setPageState(1);
      //   return router.replace(`/blog`);
    }
    if (category) {
      return router.replace(
        `/blog?category=${decodeURI(category!).toLowerCase()}&page=${pageState}`
      );
    }
    router.replace(`/blog?page=${pageState}`); // Access the updated value here
  }, [pageState]);

  function nextPage() {
    if (pageState >= totalPages) {
      return;
    }
    setPageState(pageState + 1);
  }
  function previousPage() {
    if (pageState <= 1) {
      return;
    }
    setPageState(pageState - 1);
    // router.replace(`/blog?page=${pageState}`);
  }
  function selectPage(page: number) {
    setPageState(page);
  }

  return (
    <div className="pt-4 pb-2 flex flex-row justify-around items-center w-1/4 gap-4 text-darkGreen">
      <button onClick={previousPage}>Poprzednia strona</button>
      <ul className="flex flex-row items-center justify-center">
        {numbers.map((number) => {
          return number;
        })}
      </ul>
      {/* <p>aktualna strona: {pageState}</p> */}
      <button onClick={nextPage}>Następna strona</button>
    </div>
  );
};

export default BlogPostPagination;
