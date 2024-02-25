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
            className="flex flex-col gap-6 my-10 md:w-10/12 lg:w-8/12 xl:w-6/12"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Nazwa użytkownika</label>
              <input
                type="text"
                name="username"
                id="username"
                title="Pseudonim"
                placeholder="SuperFilip"
                className="border-green border-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                name="password"
                id="password"
                title="Hasło"
                placeholder="*****"
                className="border-green border-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmedPassword">Powtórz hasło</label>
              <input
                type="password"
                name="confirmedPassword"
                id="confirmedPassword"
                title="Powtórz hasło"
                placeholder="*****"
                className="border-green border-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Adres email:</label>
              <input
                type="email"
                name="email"
                id="email"
                title="email"
                placeholder="Twój adres email"
                className="border-green border-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber">Numer telefonu</label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                title="Numer telefonu"
                placeholder="phoneNumber"
                className="border-green border-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Imie</label>
              <input
                type="text"
                name="name"
                id="name"
                title="Imie"
                placeholder="Filip"
                className="border-green border-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="surname">Nazwisko</label>
              <input
                type="text"
                name="surname"
                id="surname"
                title="Nazwisko"
                placeholder="Sojecki"
                className="border-green border-1 bg-transparent"
              />
            </div>
            <FilledButton type="submit">Zarejestruj</FilledButton>
            <p>{response.message}</p>
            <p>
              Masz konto? Przejdz do strony{" "}
              <Link href="/logowanie" className="underline underline-offset-4">
                logowania
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden md:block w-1/2 h-full bg-login bg-center z-0 "></div>
      </div>
    </main>
  );
};

export default LoggingIinPage;
