"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [pageState, setPageState] = useState(Number(page || 1));

  const totalPages = Number((total / limit).toFixed(0.1));

  useEffect(() => {
    router.replace(`/blog?page=${pageState}`, { scroll: false }); // Access the updated value here
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

  return (
    <div className="pt-4 pb-2 flex flex-row justify-around w-1/4">
      <button onClick={previousPage}>Poprzednia strona</button>
      <p>Ilość stron: {totalPages}</p>
      <p>aktualna strona: {pageState}</p>
      <button onClick={nextPage}>Następna strona</button>
    </div>
  );
};

export default BlogPostPagination;
