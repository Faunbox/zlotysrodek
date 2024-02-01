"use client";

import { useRef, useState } from "react";
import { ResponseData } from "../contact/FormComponent";
import { addToContact } from "@/actions/newsletterActions";
import FilledButton from "../typography/filledButton";

const NewsletterForm = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [newsletterCheckbox, setNewsletterCheckbox] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    setNewsletterCheckbox(!newsletterCheckbox);
  };

  const onSend = async (formData: FormData) => {
    if (!newsletterCheckbox) return;
    const res = await addToContact(formData);
    setResponse(res.response!);
    formRef.current?.reset();
  };

  return (
    <>
      <form
        action={onSend}
        className="flex flex-col items-start justify-center px-8 pb-8 gap-4"
        ref={formRef}
      >
        <div className="flex flex-col gap-2">
          <h3 className="uppercase font-semibold">Newsletter</h3>
          <p>Bądź na bieżąco! Zapisz się do newslettera!</p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-col mx-auto">
            <label htmlFor="name" className="font-light">
              Imię
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Newsletter name"
              className="border-black border-1"
            />
          </div>
          <div className="flex flex-col mx-auto">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Newsletter email"
              className="border-black border-1"
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            id="checkbox"
            className="bg-green"
            checked={newsletterCheckbox}
            onChange={handleChange}
          />
          <label htmlFor="checkbox" className="text-xs font-light">
            Wyrażam zgodę na przesyłanie informacji o produktach i usługach.
            Szczegóły związane z przetwarzaniem danych osobowych znajdziesz w
            polityce prywatności.
          </label>
        </div>
        <FilledButton
          type="submit"
          color="darkGreen"
          text="white"
          disabled={response.status ? true : false}
          py={1}
        >
          Wyślij
        </FilledButton>
      </form>
      <p>{response?.message}</p>
      <p>Sukces</p>
    </>
  );
};

export default NewsletterForm;
