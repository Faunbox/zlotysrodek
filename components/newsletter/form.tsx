"use client";

import { useRef, useState } from "react";
import { ResponseData } from "../contact/FormComponent";
import { addToContact } from "@/actions/newsletterActions";
import FilledButton from "../typography/filledButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  name: z.string().min(1, { message: "Imie jest wymagane" }),
  email: z
    .string()
    .min(1, { message: "Adres email jest wymagany" })
    .email({ message: "Adres email musi być poprawny" }),
  checkbox: z.literal(true, {
    errorMap: () => ({ message: "Musisz zaakceptować warunki" }),
  }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

const NewsletterForm = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [newsletterCheckbox, setNewsletterCheckbox] = useState(false);
  const [newsletterHoneypot, setNewsletterHoneypot] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });


  const onSend = async (data: ValidationSchema) => {
    if (!newsletterCheckbox && newsletterHoneypot) return;
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, JSON.stringify(value));
    });
    const res = await addToContact(formData);
    setResponse(res.response!);
    formRef.current?.reset();
  };

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => await onSend(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center px-8 pb-2 gap-4 w-full"
        ref={formRef}
        id="form"
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
              Imię <span className="text-error">*</span>
            </label>
            <input
              type="name"
              id="name"
              className="border-white border-1 bg-green"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-small italic text-error mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mx-auto">
            <label htmlFor="email" className="font-light">
              Email <span className="text-error">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              className="border-white border-1 bg-green"
            />
            {errors.email && (
              <p className="text-small italic text-error mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-2">
            {/* Honeypot */}
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              checked={newsletterHoneypot}
              onChange={() => setNewsletterHoneypot(!newsletterHoneypot)}
            />
            <input
              type="checkbox"
              id="checkbox"
              className="bg-green"
              // checked={newsletterCheckbox}
              // onChange={handleChange}
              {...register("checkbox")}
            />
            <label htmlFor="checkbox" className="text-xs font-light">
              <span className="text-error">* </span>Wyrażam zgodę na przesyłanie
              informacji o produktach i usługach. Szczegóły związane z
              przetwarzaniem danych osobowych znajdziesz w polityce prywatności.
            </label>
          </div>
          {errors.checkbox && (
            <p className="text-xs italic text-error mt-2">
              {errors.checkbox?.message}
            </p>
          )}
          <p className="font-light">{response?.message}</p>
          <div>
            <FilledButton
              type="submit"
              color="bg-darkGreen"
              text="white"
              // disabled={response.status || !newsletterCheckbox ? true : false}
              py={1}
            >
              Wyślij
            </FilledButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewsletterForm;
