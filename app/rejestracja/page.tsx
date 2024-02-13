"use client";
import { registerUser } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import { useState } from "react";
import Link from "next/dist/client/link";
import { redirect } from "next/navigation";
import FilledButton from "@/components/typography/filledButton";

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
    <main className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-full bg-green-600 flex items-center justify-center">
        <form
          action={onSend}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex flex-col gap-1">
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
          <div className="flex flex-col">
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
          <div className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-1">
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
      <div className="w-1/2 h-full max-h-screen bg-[url('/images/log.jpg')] bg-center"></div>
    </main>
  );
};

export default LoggingIinPage;
