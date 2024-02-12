"use client";
import { getAllUsers } from "@/actions/adminActions";
import { UserType } from "@/actions/authActions";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SearchPanel from "./searchPanel";
import ModalAdminPanel from "./modal";
import Pagination from "./pagination";
import VisitationEndComponent from "./visitationEndComponent";

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
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });
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

  if (error) return <p>Błąd podczas pobierania danych</p>;
  if (isLoading) return <p>Ładuję...</p>;

  return (
    <div className="flex flex-col w-9/12 bg-lightGreen mt-10 mb-10 p-24 items-start gap-4 rounded-md">
      <h4 className="font-semibold text-xl mb-6">Wszyscy użytkownicy</h4>
      <SearchPanel
        state={searchResponse}
        setState={setSearchResponse}
        reset={resetSearchState}
      />
      {/* Show searched user */}
      {searchResponse.status === "success" && (
        <div>
          <p className="m-4 inline-block font-medium ">
            {searchResponse.user?.name! as string}{" "}
            {searchResponse.user?.surname as string}{" "}
            {searchResponse.user?.email! as string}
          </p>
          <ModalAdminPanel data={searchResponse.user} />
        </div>
      )}
      {/* Show all users */}
      {searchResponse.status === "" && (
        <>
          <ul className="inline-block ">
            {data.data?.map((user: UserType) => (
              <div key={user?._id} className="border-t-2 border-darkGreen py-4">
                <li className="m-4 inline-block font-medium ">
                  <p>
                    {user.name as string} {user.surname as string}{" "}
                    {user?.email as string}
                  </p>
                </li>
                <ModalAdminPanel data={user} />
                <VisitationEndComponent email={user?.email}>Zakończ wizytę</VisitationEndComponent>
              </div>
            ))}
          </ul>
          <Pagination
            fetchedData={data}
            pagination={pagination}
            setPagination={setPagination}
          />
        </>
      )}
    </div>
  );
};

export default UserElements;
