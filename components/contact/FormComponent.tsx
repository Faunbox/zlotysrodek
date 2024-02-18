"use client";
import { sendContactEmail } from "@/actions/contactActions";
import { Button, CircularProgress, Input } from "@nextui-org/react";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import FilledButton from "../typography/filledButton";

export type ResponseData = {
  status?: string;
  message?: string;
};

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <FilledButton
      type="submit"
      color="bg-darkGreen"
      text="white"
      disabled={disabled}
      aria-disabled={pending}
    >
      {pending ? (
        <CircularProgress size="sm" aria-label="Loading..." />
      ) : (
        "Wyślij"
      )}
    </FilledButton>
  );
}

const FormComponent = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);

  async function onSend(formData: FormData) {
    try {
      const res = await sendContactEmail(formData);
      setResponse(res.response);
    } catch {
      alert("Błąd podczas wysyłania formularza");
    } finally {
      setDisabled(true);
    }
  }

  return (
    <aside className="flex flex-col items-start justify-center text-lightGreen mt-14">
      <h4 className="text-large font-abhaya">Chcesz nawiązać współpracę?</h4>
      <h4 className="text-large font-abhaya">A może masz pytania?</h4>
      <h3 className="text-2xl font-abhaya">Wyślij wiadomość!</h3>
      <form
        action={onSend}
        className="flex flex-col items-start w-full max-h-full gap-2 mt-10"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="font-light">
            Imię i nazwisko
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="border-black border-1 "
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="font-light">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-black  border-1 "
          />
        </div>
        <div className="flex flex-col w-full text-black">
          <label htmlFor="email" className="font-light">
            Wiadomość
          </label>
          <textarea
            name="description"
            id="description"
            spellCheck={true}
            rows={10}
            className="border-black border-1 resize-y max-h-full h-auto "
          />
        </div>
        <div className="flex w-full justify-end md:items-center mt-5">
          <p>{response.message}</p>
          <SubmitButton disabled={disabled} />
        </div>
      </form>
    </aside>
  );
};

export default FormComponent;
