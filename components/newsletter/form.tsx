"use client";

import { useState } from "react";
import { ResponseData } from "../contact/FormComponent";
import { addToContact } from "@/actions/newsletterActions";

const NewsletterForm = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  const onSend = async (formData: FormData) => {
    const res = await addToContact(formData);
    setResponse(res.response!);
  };

  return (
    <>
      <form action={onSend} className="flex flex-col">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Newsletter email"
          className="border-black border-1"
        />
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Newsletter name"
          className="border-black border-1"
        />
        <button type="submit">Wyślij</button>
      </form>
      <p>{response?.message}</p>
    </>
  );
};

export default NewsletterForm;
