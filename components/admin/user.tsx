"use client";
import { getAllUsers } from "@/actions/adminActions";
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
import { useQuery } from "@tanstack/react-query";

const UserElements = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isLoading, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (error) return <p>Błąd podczas pobierania danych</p>;
  if (isLoading) return <p>Ładuję...</p>;

  return (
    <ul className="md:w-1/4 border-black border-2">
      {data?.map((user) => (
        <li key={user?._id} className="my-4">
          {user.name} {user.surname} {user?.email}{" "}
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
                        value={user.adminDescription}
                      />
                    </div>
                    <div>
                      <p>Darmowa konsultacja</p>
                      <Input
                        type="number"
                        name="freeConsultation"
                        id="freeConsultation"
                        value={user.freeConsultation}
                      />
                    </div>
                    <div>
                      <p>Konsultacje</p>
                      <Input
                        type="number"
                        name="consultation"
                        id="consultation"
                        value={user.consultations}
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Zamknij
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Zmień
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </li>
      ))}
    </ul>
  );
};

export default UserElements;
