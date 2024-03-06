"use client";
import { registerUser } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import { useState } from "react";
import Link from "next/dist/client/link";
import { redirect } from "next/navigation";
import FilledButton from "@/components/typography/filledButton";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z
  .object({
    username: z.string().min(1, { message: "Podaj nazwę dla swojego konta" }),
    password: z
      .string()
      .min(6, { message: "Hasło powinno zawierać conajmniej 6 znaków" })
      .max(20, { message: "Hasło powinno zawierać maksymalnie 20 znaków" }),
    confirmedPassword: z
      .string()
      .min(6, { message: "Hasło powinno zawierać conajmniej 6 znaków" })
      .max(20, { message: "Hasło powinno zawierać maksymalnie 20 znaków" }),
    email: z
      .string()
      .min(1, { message: "Adres email jest wymagany" })
      .email({ message: "Adres email musi być poprawny" }),
    phoneNumber: z
      .string()
      .min(1, { message: "Podaj numer telefonu" })
      .max(9, { message: "Podaj numer, bez numeru kierunkowego" }),
    name: z.string().min(1, { message: "Podaj swoje imie" }),
    surname: z.string().min(1, { message: "Podaj swoje nazwisko" }),
    checkbox: z.literal(true, {
      errorMap: () => ({ message: "Zaakceptuj warunki warunki" }),
    }),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Hasła nie są takie same",
    path: ["confirmedPassword"],
  });
type ValidationSchema = z.infer<typeof validationSchema>;

const LoggingIinPage = () => {
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
    console.log(data);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value));
      });
      const res = await registerUser(formData);
      setResponse(res.response);
      console.log(res.response);
      setInterval(() => redirect("/logowanie"), 5000);
    } catch {
      alert("Błąd podczas tworzenia konta");
    }
  }

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => await onSend(data);

  return (
    <main className="w-full h-full flex flex-col">
      <BackgroundedHeader>Stwórz konto</BackgroundedHeader>
      <div className="flex flex-row h-full w-full">
        <div className="w-full mx-1 md:w-1/2 flex flex-col items-center justify-center gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 my-10 md:w-10/12 lg:w-8/12 xl:w-6/12"
          >
            <div className="flex flex-col">
              <label htmlFor="username" className="focus:text-error">
                Nazwa użytkownika
              </label>
              <input
                type="text"
                {...register("username")}
                id="username"
                title="Pseudonim"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
              {errors.username && (
                <p className="text-sm italic text-error font-bold">
                  {errors.username?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                {...register("password")}
                id="password"
                title="Hasło"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
              {errors.password && (
                <p className="text-sm italic text-error font-bold">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmedPassword">Powtórz hasło</label>
              <input
                type="password"
                {...register("confirmedPassword")}
                id="confirmedPassword"
                title="Powtórz hasło"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
              {errors.confirmedPassword && (
                <p className="text-sm italic text-error font-bold">
                  {errors.confirmedPassword?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Adres email:</label>
              <input
                type="email"
                {...register("email")}
                id="email"
                title="email"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
              {errors.email && (
                <p className="text-sm italic text-error font-bold">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Numer telefonu</label>
              <input
                type="text"
                {...register("phoneNumber")}
                id="phoneNumber"
                title="Numer telefonu"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
              {errors.phoneNumber && (
                <p className="text-sm italic text-error font-bold">
                  {errors.phoneNumber?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between ">
              <div className="flex flex-col">
                <label htmlFor="name">Imie</label>
                <input
                  type="text"
                  {...register("name")}
                  id="name"
                  title="Imie"
                  className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
                />
                {errors.name && (
                  <p className="text-sm italic text-error font-bold">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="surname">Nazwisko</label>
                <input
                  type="text"
                  {...register("surname")}
                  id="surname"
                  title="Nazwisko"
                  className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
                />
                {errors.surname && (
                  <p className="text-sm italic text-error font-bold">
                    {errors.surname?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-1 mb-4">
              <input
                type="checkbox"
                id="checkbox"
                className="bg-green"
                // checked={newsletterCheckbox}
                // onChange={handleChange}
                {...register("checkbox")}
              />
              <label htmlFor="checkbox" className="text-xs font-light" />
              Akceptuję regulamin oraz politykę prywatności.
              <span className="text-error">* </span>
              {errors.checkbox && (
                <p className="text-sm italic text-error font-bold">
                  {errors.checkbox?.message}
                </p>
              )}
            </div>
            <FilledButton type="submit">Zarejestruj</FilledButton>
            <div className="text-center">
              <p>{response.message}</p>
              <p>
                Masz konto? Przejdz do strony{" "}
                <Link
                  href="/logowanie"
                  className="underline underline-offset-4"
                >
                  logowania.
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2 bg-[url('/images/log.jpg')] bg-center z-0 "></div>
      </div>
    </main>
  );
};

export default LoggingIinPage;
