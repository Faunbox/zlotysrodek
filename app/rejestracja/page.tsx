"use client";
import { registerUser } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import { useState } from "react";
import Link from "next/dist/client/link";
import { redirect } from "next/navigation";
import FilledButton from "@/components/typography/filledButton";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";

const LoggingIinPage = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function onSend(formData: FormData) {
    try {
      const res = await registerUser(formData);
      setResponse(res.response);
      console.log(res.response);
      setInterval(() => redirect("/logowanie"), 5000);
    } catch {
      alert("Błąd podczas tworzenia konta");
    }
  }

  return (
    <main className="w-full h-full flex flex-col">
      <BackgroundedHeader>Stwórz konto</BackgroundedHeader>
      <div className="flex flex-row h-full w-full">
        <div className="w-full mx-1 md:w-1/2 flex flex-col items-center justify-center gap-4">
          <form
            action={onSend}
            className="flex flex-col gap-2 my-10 md:w-10/12 lg:w-8/12 xl:w-6/12"
          >
            <div className="flex flex-col">
              <label htmlFor="username" className="focus:text-error">
                Nazwa użytkownika
              </label>
              <input
                type="text"
                name="username"
                id="username"
                title="Pseudonim"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                name="password"
                id="password"
                title="Hasło"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmedPassword">Powtórz hasło</label>
              <input
                type="password"
                name="confirmedPassword"
                id="confirmedPassword"
                title="Powtórz hasło"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Adres email:</label>
              <input
                type="email"
                name="email"
                id="email"
                title="email"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Numer telefonu</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                title="Numer telefonu"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mb-5">
              <div className="flex flex-col">
                <label htmlFor="name">Imie</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  title="Imie"
                  className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="surname">Nazwisko</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  title="Nazwisko"
                  className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
                />
              </div>
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
