"use client";

import { useState } from "react";
import Link from "next/dist/client/link";
import { signIn } from "next-auth/react";
import { checkForUserFromDb } from "@/actions/authActions";

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
        <input
          type="email"
          name="email"
          id="email"
          title="email"
          placeholder="Twój adres email"
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
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
          }
        />

        <button
          className="border-black border"
          onClick={async () => await tryToLogin()}
        >
          Zaloguj
        </button>
        <Link href='/resetowanie-hasla'>Przypomnij hasło</Link>
        <Link href="/rejestracja">
          Nie masz jeszcze konta? Przejdz do strony rejestracji
        </Link>
      </div>
      <div className="w-1/2 h-full max-h-screen bg-[url('/images/log.jpg')] bg-center"></div>
    </main>
  );
};

export default LoggingIinPage;
