"use client";
import { sendResetPasswordToken } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import FilledButton from "@/components/typography/filledButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Adres email jest wymagany" })
    .email({ message: "Adres email musi być poprawny" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

const Page = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  async function onSend(data: ValidationSchema) {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value));
      });
      const res = await sendResetPasswordToken(formData);
      setResponse(res.response);
      setDisabled(true);
    } catch {
      alert("Błąd podczas resetowania hasła");
    }
  }

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => await onSend(data);

  return (
    <div className="page">
      <BackgroundedHeader>Resetowanie hasła</BackgroundedHeader>
      <h3 className="font-light text-lg px-10 py-5">
        Na podany adres email zostanie wysłany link do zmiany hasła.
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center align-center flex-col  h-full px-10 gap-1 text-left"
      >
        <label htmlFor="emailReset">Email</label>
        <input
          type="text"
          {...register("email")}
          id="emailReset"
          placeholder="Twoj adres email"
          className="border-green border-1 bg-transparent h-9 "
        />
        {errors.email && (
          <p className="text-sm italic text-error font-bold mb-10">
            {errors.email?.message}
          </p>
        )}
        <FilledButton type="submit" disabled={disabled}>
          Zresetuj hasło
        </FilledButton>
      </form>
      <p className="py-5 font-semibold">{response.message}</p>
    </div>
  );
};

export default Page;
