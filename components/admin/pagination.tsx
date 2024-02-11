import { Dispatch, SetStateAction } from "react";

const Pagination = ({
  pagination,
  setPagination,
  fetchedData,
}: {
  pagination: { page: number; limit: number };
  setPagination: Dispatch<
    SetStateAction<{
      limit: number;
      page: number;
    }>
  >;
  fetchedData: any;
}) => {
  return (
    <div className="inline-block">
      <select
        name="limit"
        id="limit"
        onChange={(e) => {
          setPagination({ ...pagination, limit: Number(e.target.value) });

          // router.replace(`?page=${pagination.page}?=limit=${pagination.limit}`);
        }}
        className="bg-transparent p-1 text-green mr-4"
      >
        <option value={10}>Ilość pozycji: 10</option>
        <option value={20}>Ilość pozycji: 20</option>
      </select>
      {pagination.page >= 2 && (
        <button
          onClick={() => {
            setPagination({ ...pagination, page: --pagination.page });
            // router.replace(`?page=${pagination.page}?=limit=${pagination.limit}`);
          }}
        >
          Poprzednia strona
        </button>
      )}
      <button
        onClick={() => {
          setPagination({ ...pagination, page: ++pagination.page });
          // router.replace(`?page=${pagination.page}?=limit=${pagination.limit}`);
        }}
        disabled={pagination.page >= fetchedData.totalPages}
      >
        {pagination.page >= fetchedData.totalPages
          ? "Nie ma juz stron"
          : "Kolejna strona"}
      </button>
    </div>
  );
};

export default Pagination;
