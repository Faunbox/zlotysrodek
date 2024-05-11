"use client";

import { sendResetPasswordTokenByButton } from "@/actions/authActions";
import { useState } from "react";
import { ResponseData } from "../contact/FormComponent";

const ResetPasswordButton = ({ email }: { email: string }) => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function handleSend(email: string) {
    const res = await sendResetPasswordTokenByButton(null, email);
    setResponse(res.response);
  }

  return (
    <>
      <button
        onClick={() => handleSend(email)}
        className="text-large tracking-wide text-green font-semibold"
      >
        Ustaw nowe hasło
      </button>
      <p>{response.message}</p>
    </>
  );
};

export default ResetPasswordButton;
