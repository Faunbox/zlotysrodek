"use client";

import { useState } from "react";
import Link from "next/dist/client/link";
import { signIn } from "next-auth/react";
import { checkForUserFromDb } from "@/actions/authActions";
import FilledButton from "@/components/typography/filledButton";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { IoEye, IoEyeOff } from "react-icons/io5";

const LoggingIinPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const tryToLogin = async () => {   
    try {
      const isUserInDb = await checkForUserFromDb(
        loginInfo.email,
        loginInfo.password
      );
      console.log({isUserInDb});
      
      isUserInDb
        ? signIn("credentials", {
            email: loginInfo.email,
            password: JSON.stringify(loginInfo.password)  ,
            callbackUrl: "/",
          })
        : alert("Niepoprawny email lub hasło");
    } catch (error) {
      throw new Error("Błąd podczas logowania");
    }
  };

  return (
    <main className="page w-full h-screen font-tinos text-black">
      <BackgroundedHeader>Logowanie</BackgroundedHeader>
      <div className="flex flex-row h-full w-full">
        <div className="w-full md:mx-10 md:w-1/2 flex flex-col items-center justify-center gap-4">
          <form
            action={tryToLogin}
            className="flex flex-col gap-6 w-9/12 md:w-10/12 lg:w-8/12 xl:w-6/12"
          >
            <div className="flex flex-col ">
              <label htmlFor="contactEmail">Adres email</label>
              <input
                type="email"
                name="email"
                id="contactEmail"
                title="Adres email"
                aria-label="email"
                className="border-green border-1 bg-transparent h-9 focus-within:shadow-lg"
                onChange={(e) =>
                  setLoginInfo({
                    ...loginInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="password">Hasło</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                title="Hasło"
                aria-label="password"
                className="border-green border-1 bg-transparent mb-4 h-9 focus-within:shadow-lg"
                onChange={(e) =>
                  setLoginInfo({
                    ...loginInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {showPassword ? (
                <button
                  onClick={(e) => {
                    e.preventDefault(), setShowPassword(!showPassword);
                  }}
                  className="absolute right-4 top-[50%] translate-y-[-25%]"
                >
                  <IoEye />
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault(), setShowPassword(!showPassword);
                  }}
                  className="absolute right-4 top-[50%] translate-y-[-25%]"
                >
                  <IoEyeOff />
                </button>
              )}
            </div>

            <FilledButton type="submit" color={"bg-green"} text="white">
              Zaloguj
            </FilledButton>
          </form>
          <div className="flex flex-col items-center text-center gap-1 w-9/12">
            <Link
              href="/user/resetowanie-hasla"
              className="text-start underline"
            >
              Nie pamiętasz hasła?
            </Link>
            <p>
              Nie masz jeszcze konta? Przejdz do strony{" "}
              <Link href="/rejestracja" className="underline underline-green">
                rejestracji.
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block w-1/2 h-full bg-[url('/images/log.jpg')] bg-center z-0 "></div>
      </div>
    </main>
  );
};

export default LoggingIinPage;
