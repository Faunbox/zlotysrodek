"use client";
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

const UserElement = ({ user }: { user: any }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  {
    /* TODO: stworzyc typ dla usera */
  }
  return (
    <>
      <li key={user?._id} className="my-4">
        {user.name} {user.surname} {user?.email}{" "}
        <Button size="sm" className="border-black border-1" onPress={onOpen}>
          Zmien
        </Button>
      </li>

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
    </>
  );
};

export default UserElement;
