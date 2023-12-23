"use client";
import { sendResetPasswordToken } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import { useState } from "react";

const Page = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function onSend(formData: FormData) {
    try {
      const res = await sendResetPasswordToken(formData);
      setResponse(res.response);
      console.log(res.response);
    } catch {
      alert("Błąd podczas tworzenia konta");
    }
  }

  return (
    <div className="flex justify-center align-center flex-col w-full py-5">
      <form action={onSend}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Twoj adres email"
        />
        <button type="submit">Zresetuj hasło</button>
      </form>
      <p>{response.message}</p>
    </div>
  );
};

export default Page;
