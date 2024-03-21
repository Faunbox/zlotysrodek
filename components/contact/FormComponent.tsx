"use client";
import { sendContactEmail } from "@/actions/contactActions";
import { CircularProgress } from "@nextui-org/react";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import FilledButton from "../typography/filledButton";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type ResponseData = {
  status?: string;
  message?: string;
};

const validationSchema = z.object({
  name: z.string().min(1, { message: "Imie jest wymagane" }),
  email: z
    .string()
    .min(1, { message: "Adres email jest wymagany" })
    .email({ message: "Adres email musi być poprawny" }),
  description: z
    .string()
    .min(10, { message: "Wiadomość musi posiadać minimum 10 znaków" })
    .max(300, { message: "Wiadomość musi posiadać mniej niż 300 znaków" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

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
  const [honeypot, setHoneypot] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  async function onSend(data: ValidationSchema) {
    if (honeypot) {
      return;
    }
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value));
      });
      const res = await sendContactEmail(formData);
      setResponse(res.response);
    } catch {
      alert("Błąd podczas wysyłania formularza");
    } finally {
      setDisabled(true);
    }
  }

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => await onSend(data);

  return (
    <aside className="flex flex-col items-start justify-center text-lightGreen mt-14 mx-10 ">
      <h4 className="text-2xl font-abhaya">Chcesz nawiązać współpracę?</h4>
      <h4 className="text-2xl font-abhaya">A może masz pytania?</h4>
      <h3 className="text-4xl font-abhaya">Wyślij wiadomość!</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start w-full max-h-full gap-2 mt-10 text-darkGreen"
      >
        {/* <div className="w-full flex lg:flex-row lg:justify-between gap-10"> */}
        <div className="flex flex-col w-full ">
          <label htmlFor="name">
            Imię i nazwisko <span className="text-error">* </span>
          </label>
          <input
            type="name"
            {...register("name")}
            id="name"
            className="border-green border-1 bg-transparent mb-1 h-9 focus-within:shadow-lg"
          />
          {errors.name && (
            <p className="text-xs italic text-error ">{errors.name?.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email">
            Adres email <span className="text-error">* </span>
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="border-green border-1 bg-transparent mb-1 h-9 focus-within:shadow-lg"
          />
          {errors.email && (
            <p className="text-xs italic text-error">{errors.email?.message}</p>
          )}
        </div>
        {/* </div> */}
        <div className="flex flex-col w-full text-black">
          <label htmlFor="email">
            Wiadomość <span className="text-error">* </span>
          </label>
          <textarea
            {...register("description")}
            id="description"
            spellCheck={true}
            rows={10}
            className="border-green border-1 resize-y max-h-full h-auto "
          />
          {errors.description && (
            <p className="text-xs italic text-error ">
              {errors.description?.message}
            </p>
          )}
        </div>
        <input
          type="checkbox"
          name="honeypot"
          onChange={() => setHoneypot(!honeypot)}
          className="hidden"
        />
        <div className="flex w-full justify-end md:items-center mt-5">
          <p>{response.message}</p>
          <SubmitButton disabled={disabled} />
        </div>
      </form>
    </aside>
  );
};

export default FormComponent;
