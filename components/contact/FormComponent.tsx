"use client";
import { sendContactEmail } from "@/actions/contactActions";
import { Button, CircularProgress, Input } from "@nextui-org/react";
import {  useState } from "react";
import { useFormStatus } from "react-dom";

export type ResponseData = {
  status?: string;
  message?: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? (
        <CircularProgress size="sm" aria-label="Loading..." />
      ) : (
        "Wyślij"
      )}
    </Button>
  );
}

const FormComponent = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function onSend(formData: FormData) {
    try {
      const res = await sendContactEmail(formData);
      setResponse(res.response);
    } catch {
      alert("Błąd podczas wysyłania formularza");
    }
  }

  return (
    <form action={onSend}>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        title="Email"
        variant="bordered"
        defaultValue={""}
      />
      <SubmitButton />
      <p>{response.message}</p>
    </form>
  );
};

export default FormComponent;
