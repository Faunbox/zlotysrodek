"use client";
import { registerUser } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import { useState } from "react";
import Link from "next/dist/client/link";
import { redirect } from "next/navigation";

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
          <input
            type="text"
            name="username"
            id="username"
            title="username"
            placeholder="SuperFilip"
          />
          <input
            type="password"
            name="password"
            id="password"
            title="password"
            placeholder="*****"
          />
          <input
            type="email"
            name="email"
            id="email"
            title="email"
            placeholder="Twój adres email"
          />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            title="phoneNumber"
            placeholder="phoneNumber"
          />
          <input
            type="text"
            name="name"
            id="name"
            title="name"
            placeholder="Filip"
          />
          <input
            type="text"
            name="surname"
            id="surname"
            title="surname"
            placeholder="Sojecki"
          />
          <button className="border-black border" type="submit">
            Zarejestruj
          </button>
          <p>{response.message}</p>
          <Link href="/logowanie">Masz konto? Przejdz do strony logowania</Link>
        </form>
      </div>
      <div className="w-1/2 h-full max-h-screen bg-[url('/images/log.jpg')] bg-center"></div>
    </main>
  );
};

export default LoggingIinPage;
