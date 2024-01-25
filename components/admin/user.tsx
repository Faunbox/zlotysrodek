"use client";
import { getAllUsers } from "@/actions/adminActions";
import { UserType } from "@/actions/authActions";
import {
  Button,
  
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SearchPanel from "./searchPanel";

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

  const handleSubmit = async () => {};

  if (error) return <p>Błąd podczas pobierania danych</p>;
  if (isLoading) return <p>Ładuję...</p>;

  return (
    <div className="md:w-1/4 border-black border-2 flex flex-col">
      <SearchPanel setState={setSearchResponse} reset={resetSearchState}/>
      {/* Show searched user */}
      {searchResponse.status === "success" && (
        <div>
          <p>
            {searchResponse.user?.name! as string}{" "}
            {searchResponse.user?.surname as string}{" "}
            {searchResponse.user?.email! as string}
          </p>
          <Button size="sm" className="border-black border-1" onPress={onOpen}>
            Zmien
          </Button>
          <Modal
            isOpen={isOpen}
            placement={"top-center"}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>Zmien dane uzytkownika</ModalHeader>
                  <ModalBody>
                    <div>
                      <p>Notatka</p>
                      <Textarea
                        name="adminDescription"
                        id="adminDescription"
                        type="text"
                        placeholder="Dodaj notatke"
                        value={searchResponse.user?.adminDescription}
                      />
                    </div>
                    <div>
                      <p>Darmowa konsultacja</p>
                      <Input
                        type="number"
                        name="freeConsultation"
                        id="freeConsultation"
                        value={searchResponse.user?.freeConsultation as string}
                      />
                    </div>
                    <div>
                      <p>Konsultacje</p>
                      <Input
                        type="number"
                        name="consultation"
                        id="consultation"
                        value={searchResponse.user?.consultations as string}
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Zamknij
                    </Button>
                    <Button color="primary" onPress={handleSubmit}>
                      Zmień
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
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
              <Button
                size="sm"
                className="border-black border-1"
                onPress={onOpen}
              >
                Zmien
              </Button>
              <Modal
                isOpen={isOpen}
                placement={"top-center"}
                onOpenChange={onOpenChange}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader>Zmien dane uzytkownika</ModalHeader>
                      <ModalBody>
                        <div>
                          <p>Notatka</p>
                          <Textarea
                            name="adminDescription"
                            id="adminDescription"
                            type="text"
                            placeholder="Dodaj notatke"
                            value={user.adminDescription}
                          />
                        </div>
                        <div>
                          <p>Darmowa konsultacja</p>
                          <Input
                            type="number"
                            name="freeConsultation"
                            id="freeConsultation"
                            value={user.freeConsultation as string}
                          />
                        </div>
                        <div>
                          <p>Konsultacje</p>
                          <Input
                            type="number"
                            name="consultation"
                            id="consultation"
                            value={user.consultations as string}
                          />
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Zamknij
                        </Button>
                        <Button color="primary" onPress={handleSubmit}>
                          Zmień
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
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
