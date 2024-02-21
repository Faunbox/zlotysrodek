"use client";

import { useState } from "react";
import Link from "next/dist/client/link";
import { signIn } from "next-auth/react";
import { checkForUserFromDb } from "@/actions/authActions";
import FilledButton from "@/components/typography/filledButton";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";

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
    <main className="w-full h-screen max-h-[1024px] flex flex-col">
      <BackgroundedHeader>Logowanie</BackgroundedHeader>
      <div className="flex flex-row h-full">
        <div className="w-full mx-10 md:w-1/2 bg-green-600 flex flex-col items-center justify-center gap-4">
          <form
            action={tryToLogin}
            className="flex flex-col gap-6 md:w-10/12 lg:w-8/12 xl:w-6/12"
          >
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                id="contactEmail"
                title="email"
                placeholder="Email"
                aria-label="email"
                className="border-green border-1 bg-transparent h-9"
                onChange={(e) =>
                  setLoginInfo({
                    ...loginInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="password"
                name="password"
                id="password"
                title="password"
                placeholder="Hasło"
                aria-label="password"
                className="border-green border-1 bg-transparent mb-4 h-9"
                onChange={(e) =>
                  setLoginInfo({
                    ...loginInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <FilledButton type="submit" color={"bg-green"} text="white">
              Zaloguj
            </FilledButton>
          </form>
          <Link href="/user/resetowanie-hasla">Nie pamiętasz hasła?</Link>
          <p>
            Nie masz jeszcze konta? Przejdz do strony{" "}
            <Link href="/rejestracja" className="underline underline-green">
              rejestracji
            </Link>
          </p>
        </div>
        <div className="hidden md:block w-1/2 h-full bg-[url('/images/log.jpg')] bg-center z-0 "></div>
      </div>
    </main>
  );
};

export default LoggingIinPage;
