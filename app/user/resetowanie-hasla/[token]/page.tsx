"use client";
import { resetUserPassword } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import FilledButton from "@/components/typography/filledButton";
import ResetPasswordForm from "@/components/user/resetPasswordForm";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const validationSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Hasło powinno zawierać conajmniej 6 znaków" })
      .max(20, { message: "Hasło powinno zawierać maksymalnie 20 znaków" }),
    confirmedPassword: z
      .string()
      .min(6, { message: "Hasło powinno zawierać conajmniej 6 znaków" })
      .max(20, { message: "Hasło powinno zawierać maksymalnie 20 znaków" }),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Hasła nie są takie same",
    path: ["confirmedPassword"],
  });
type ValidationSchema = z.infer<typeof validationSchema>;

const Page = ({ params }: { params: { token: string } }) => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

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
        formData.append(key, value);
      });
      formData.append("token", params.token);

      const res = await resetUserPassword(formData);

      setResponse(res.response);
    } catch (err) {
      alert("Błąd podczas resetowania hasła");
    } finally {
      () =>
        setTimeout(() => {
          redirect("/");
        }, 5000);
    }
  }

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    await onSend(data);
  };

  return (
    <div className="page">
      <BackgroundedHeader>Reset hasła</BackgroundedHeader>
      <div className="flex flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-10 w-full md:w-6/12 items-center md:items-center justify-center gap-10 "
        >
          <div className="flex flex-col ">
            <label htmlFor="email" className="font-light">
              Nowe hasło
            </label>
            <input
              type="password"
              {...register("password")}
              title="password"
              id="password"
              className="border-black  border-1 "
            />
            {errors.password && (
              <p className="text-sm italic text-error font-bold">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="font-light">
              Powtórz hasło
            </label>
            <input
              type="password"
              {...register("confirmedPassword")}
              title="confirmedPassword"
              id="confirmPassword"
              className="border-black  border-1 "
            />
            {errors.confirmedPassword && (
              <p className="text-sm italic text-error font-bold">
                {errors.confirmedPassword?.message}
              </p>
            )}
          </div>
          <FilledButton type="submit">Zresetuj hasło</FilledButton>
          <p className="font-semibold text-lg text-darkGreen">
            {response.message}
          </p>
          {response.status === "error" && <ResetPasswordForm />}
        </form>
        <div className="w-6/12 xl:w-6/12 hidden md:flex">
          <Image
            src={"/images/kontakt.jpg"}
            alt="tak"
            width={400}
            height={700}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
