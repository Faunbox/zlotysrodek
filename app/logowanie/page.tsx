"use client";

import { useState } from "react";
import Link from "next/dist/client/link";
import { signIn } from "next-auth/react";
import { checkForUserFromDb } from "@/actions/authActions";
import FilledButton from "@/components/typography/filledButton";

const LoggingIinPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const tryToLogin = async () => {
    try {
      const isUserInDb = await checkForUserFromDb(
        loginInfo.email,
        loginInfo.password
      );

      isUserInDb
        ? signIn("credentials", {
            email: loginInfo.email,
            password: loginInfo.password,
            callbackUrl: "/",
          })
        : alert("Niepoprawny email lub hasło");
    } catch (error) {
      throw new Error("Błąd podczas logowania");
    }
  };

  return (
    <main className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-full bg-green-600 flex flex-col items-center justify-center gap-4">
        <form action={tryToLogin} className="flex flex-col gap-6">
          <input
            type="email"
            name="email"
            id="email"
            title="email"
            placeholder="Twój adres email"
            className="border-green border-1 bg-transparent"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            id="password"
            title="password"
            placeholder="*****"
            className="border-green border-1 bg-transparent mb-4"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
            }
          />

          <FilledButton type="submit" color={"bg-green"} text="white">
            Zaloguj
          </FilledButton>
        </form>
        <Link href="/user/resetowanie-hasla">Przypomnij hasło</Link>
        <p>
          Nie masz jeszcze konta? Przejdz do strony{" "}
          <Link href="/rejestracja" className="underline underline-green">
            rejestracji
          </Link>
        </p>
      </div>
      <div className="w-1/2 h-full max-h-screen bg-[url('/images/log.jpg')] bg-center"></div>
    </main>
  );
};

export default LoggingIinPage;
