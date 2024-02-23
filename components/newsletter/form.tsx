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
  const [newsletterHoneypot, setNewsletterHoneypot] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    setNewsletterCheckbox(!newsletterCheckbox);
  };

  const onSend = async (formData: FormData) => {
    if (!newsletterCheckbox && newsletterHoneypot) return;
    const res = await addToContact(formData);
    setResponse(res.response!);
    formRef.current?.reset();
  };

  return (
    <>
      <form
        action={onSend}
        className="flex flex-col items-start justify-center px-8 pb-2 gap-4 w-full"
        ref={formRef}
      >
        <div className="flex flex-col gap-2">
          <h3 className="uppercase font-semibold">Newsletter</h3>
          <p className="font-light text-sm">
            Bądź na bieżąco! Zapisz się do newslettera!
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-col mx-auto">
            <label htmlFor="name" className="font-light">
              Imię
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="border-white border-1 bg-green"
            />
          </div>
          <div className="flex flex-col mx-auto">
            <label htmlFor="email" className="font-light">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border-white border-1 bg-green"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-2">
            {/* Honeypot */}
            <input
              type="checkbox"
              id="checkbox"
              className="bg-green hidden"
              checked={newsletterHoneypot}
              //@ts-ignore
              onChange={setNewsletterHoneypot}
            />
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
          <div>
            <FilledButton
              type="submit"
              color="bg-darkGreen"
              text="white"
              disabled={response.status || !newsletterCheckbox ? true : false}
              py={1}
            >
              Wyślij
            </FilledButton>
          </div>
        </div>
        <p className="font-light">{response?.message}</p>
      </form>
    </>
  );
};

export default NewsletterForm;
