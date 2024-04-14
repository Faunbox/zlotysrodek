"use client";
import { useState } from "react";
import FilledButton from "../typography/filledButton";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { sendEndEmail } from "@/actions/adminActions";

const VisitationEndComponent = ({
  children,
  email,
  consultations,
  name,
  link,
}: {
  children: string;
  email: string | FormDataEntryValue;
  consultations: number | string;
  name: string;
  link?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [response, setResponse] = useState({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [inputData, setInputData] = useState({
    date: "",
    hour: "",
    link: "",
  });

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
    formData.append("email", email),
      formData.append("consultations", consultations! as string),
      formData.append("name", name!);
    formData.append("link", link!);
    try {
      setSending(true);
      await sendEndEmail(formData);
    } catch (error) {
      alert("Błąd podczas wysyłania maila");
    } finally {
      setSending(false);
      setDone(true);
    }
  };

  return (
    <>
      <FilledButton onClick={onOpen} color="bg-red-200">
        {children}
      </FilledButton>
      <Modal
        isOpen={isOpen}
        placement={"top-center"}
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Zakończ wizytę</ModalHeader>
              <ModalBody>
                <p className="my-2">
                  Email:{" "}
                  <span className="font-light underline underline-offset-8">
                    {email as string}
                  </span>
                </p>
                <form action={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <p>Data następnego spotkania</p>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      aria-label="Data następnego spotkania"
                      placeholder="Data kolejnego spotkania"
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                  <div>
                    <p>Godzina następnego spotkania</p>
                    <Input
                      type="time"
                      name="time"
                      id="time"
                      aria-label="Godzina następnego spotkania"
                      placeholder="Data kolejnego spotkania"
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                  <div>
                    <p>Link do spotkania</p>
                    <Input
                      type="string"
                      name="link"
                      id="link"
                      required
                      value={link ? link : inputData.link}
                      aria-label="Link for next meeting"
                      placeholder={"Link do spotkania"}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div>
                    <Button
                      className="mt-6 disabled:bg-lightGreen bg-green"
                      type="submit"
                      color="primary"
                      disabled={done}
                    >
                      Wyślij email
                    </Button>

                    <Button color="danger" variant="light" onPress={onClose}>
                      Zamknij
                    </Button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter className="flex items-center w-auto justify-start">
                <p>{sending && "Wysyłam. . ."}</p>
                <p>{done && "Email został wysłany"}</p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default VisitationEndComponent;
