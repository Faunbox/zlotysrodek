"use client";
import { updateUserData } from "@/actions/adminActions";
import {
  Button,
  CircularProgress,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const ModalAdminPanel = ({ data }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [sending, setSending] = useState(false);
  const [inputData, setInputData] = useState({
    adminDescription: data?.adminDescription,
    freeConsultation: data?.freeConsultation,
    consultations: data?.consultations,
  });
  const [done, setDone] = useState(false);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
      setDone(true);
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
        backdrop="blur"
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
                    aria-label="Notatka"
                    placeholder={inputData?.adminDescription}
                    value={inputData.adminDescription}
                    onChange={handleOnChange}
                  />
                  <div>
                    <p>Darmowa konsultacja</p>
                    <Input
                      type="number"
                      name="freeConsultation"
                      id="freeConsultation"
                      aria-label="Darmowa konsultacja"
                      placeholder={inputData?.freeConsultation}
                      value={inputData?.freeConsultation}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div>
                    <p>Konsultacje</p>
                    <Input
                      type="number"
                      name="consultations"
                      id="consultations"
                      aria-label="Konsultacje"
                      placeholder={inputData?.consultations}
                      onChange={handleOnChange}
                      value={inputData?.consultations}
                    />
                  </div>
                  <div>
                    <Button
                      className="mt-6"
                      type="submit"
                      color="primary"
                      disabled={done}
                    >
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
