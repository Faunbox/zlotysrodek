"use client";
import { sendResetPasswordToken } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import FilledButton from "@/components/typography/filledButton";
import { useState } from "react";

const Page = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);

  async function onSend(formData: FormData) {
    try {
      const res = await sendResetPasswordToken(formData);
      setResponse(res.response);
      setDisabled(true);
    } catch {
      alert("Błąd podczas resetowania hasła");
    }
  }

  return (
    <div className="flex justify-center items-center flex-col w-full h-[70vh] max-h-[1024px] gap-2 text-center">
      <BackgroundedHeader>Resetowanie hasła</BackgroundedHeader>
      <h3 className="font-light text-lg px-10 py-5">
        Na podany adres email zostanie wysłany link do zmiany hasła.
      </h3>
      <form
        action={onSend}
        className="flex justify-center align-center flex-col w-full h-full px-10 gap-2 text-left"
      >
        <label htmlFor="emailReset">Email</label>
        <input
          type="text"
          name="email"
          id="emailReset"
          placeholder="Twoj adres email"
          className="border-green border-1 bg-transparent mb-10"
        />
        <FilledButton type="submit" disabled={disabled}>
          Zresetuj hasło
        </FilledButton>
      </form>
      <p className="py-5 font-semibold">{response.message}</p>
    </div>
  );
};

export default Page;
