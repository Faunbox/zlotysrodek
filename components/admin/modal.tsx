"use client";
import { updateUserData } from "@/actions/adminActions";
import {
  Button,
  CircularProgress,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const ModalAdminPanel = ({ data }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    formData.append("email", data.email);
    try {
      setSending(true);
      const res = await updateUserData(formData);
      console.log(res);
    } catch (error) {
      alert("Błąd podczas zmiany danych");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
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
                <form action={handleSubmit}>
                  <p>Notatka</p>
                  <Textarea
                    name="adminDescription"
                    id="adminDescription"
                    type="text"
                    placeholder={data?.adminDescription}
                  />
                  <div>
                    <p>Darmowa konsultacja</p>
                    <Input
                      type="text"
                      name="freeConsultation"
                      id="freeConsultation"
                      placeholder={data?.freeConsultation as string}
                    />
                  </div>
                  <div>
                    <p>Konsultacje</p>
                    <Input
                      type="number"
                      name="consultations"
                      id="consultations"
                      placeholder={data?.consultations as string}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                  <div>
                    <Button className="mt-6" type="submit" color="primary">
                      {sending ? <CircularProgress /> : "Zmień dane"}
                    </Button>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Zamknij
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAdminPanel;
