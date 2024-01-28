"use client";
import { getAllUsers } from "@/actions/adminActions";
import { UserType } from "@/actions/authActions";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SearchPanel from "./searchPanel";
import ModalAdminPanel from "./modal";

export type UserResponse = {
  status: string;
  user: {
    name: string;
    surname: string;
    email: string;
    freeConsultation?: string | boolean;
    adminDescription?: string;
    consultations?: number | string;
  };
};

const UserElements = () => {
  const [pagination, setPagination] = useState({ limit: 1, page: 1 });
  const [searchResponse, setSearchResponse] = useState<UserResponse>({
    status: "",
    user: { name: "", surname: "", email: "" },
  });

  const { isLoading, data, error } = useQuery({
    queryKey: ["users", pagination.page, pagination.limit],
    queryFn: async ({ queryKey }) =>
      await getAllUsers(queryKey[1], queryKey[2]),
    placeholderData: keepPreviousData,
  });

  const resetSearchState = () => {
    setSearchResponse({
      status: "",
      user: { name: "", surname: "", email: "" },
    });
  };

  const handleSubmit = async (formData: FormData) => {
    try {
    } catch (error) {}
  };

  if (error) return <p>Błąd podczas pobierania danych</p>;
  if (isLoading) return <p>Ładuję...</p>;

  return (
    <div className="md:w-1/4 border-black border-2 flex flex-col">
      <SearchPanel
        state={searchResponse}
        setState={setSearchResponse}
        reset={resetSearchState}
      />
      {/* Show searched user */}
      {searchResponse.status === "success" && (
        <div>
          <p>
            {searchResponse.user?.name! as string}{" "}
            {searchResponse.user?.surname as string}{" "}
            {searchResponse.user?.email! as string}
          </p>
          <ModalAdminPanel data={searchResponse.user} />
        </div>
      )}
      {/* Show all users */}
      {searchResponse.status === "" && (
        <ul>
          {data.data?.map((user: UserType) => (
            <li key={user?._id} className="my-4">
              <p>
                {user.name as string} {user.surname as string}{" "}
                {user?.email as string}
              </p>

              <ModalAdminPanel data={user} />
            </li>
          ))}
          <select
            name="limit"
            id="limit"
            onChange={(e) => {
              setPagination({ ...pagination, limit: Number(e.target.value) });

              // router.replace(`?page=${pagination.page}?=limit=${pagination.limit}`);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
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
            disabled={pagination.page >= data.totalPages}
          >
            {pagination.page >= data.totalPages
              ? "Nie ma juz stron"
              : "Kolejna strona"}
          </button>
        </ul>
      )}
    </div>
  );
};

export default UserElements;
