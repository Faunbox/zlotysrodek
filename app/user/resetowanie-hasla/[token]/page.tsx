"use client";
import { resetUserPassword } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import FilledButton from "@/components/typography/filledButton";
import ResetPasswordForm from "@/components/user/resetPasswordForm";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

const Page = ({ params }: { params: { token: string } }) => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function onSend(formData: FormData) {
    const token = params.token;
    formData.append("token", token);
    try {
      const res = await resetUserPassword(formData);

      setResponse(res.response);
      // console.log(res.response);
    } catch (err) {
      alert("Błąd podczas resetowania hasła");
    } finally {
      setTimeout(() => {
        redirect("/");
      }, 5000);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <BackgroundedHeader>Reset hasła</BackgroundedHeader>
      <div className="flex flex-row">
        <form
          action={onSend}
          className="flex flex-col p-10 w-full md:w-6/12 items-center md:items-center justify-center gap-10 "
        >
          <div className="flex flex-col ">
            <label htmlFor="email" className="font-light">
              Nowe hasło
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-black  border-1 "
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="font-light">
              Powtórz hasło
            </label>
            <input
              type="password"
              name="confirmedPassword"
              id="confirmPassword"
              className="border-black  border-1 "
            />
          </div>
          <FilledButton type="submit">Zresetuj hasło</FilledButton>
          <p className="font-semibold text-lg text-darkGreen">
            {response.message}
          </p>
          {response.status === "error" && <ResetPasswordForm />}
        </form>
        <div className="w-6/12 xl:w-6/12 hidden md:flex">
          <Image
            src={"/images/kontakt.jpg"}
            alt="tak"
            width={400}
            height={700}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
