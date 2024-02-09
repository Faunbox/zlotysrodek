"use client";

import { sendResetPasswordToken } from "@/actions/authActions";
import { useState } from "react";
import { ResponseData } from "../contact/FormComponent";

const ResetPasswordButton = ({ email }: { email: string }) => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function handleSend(email: string) {
    const res = await sendResetPasswordToken(null, email);
    setResponse(res.response);
  }

  return (
    <>
      <button
        onClick={() => handleSend(email)}
        className="text-large tracking-wide"
      >
        Ustaw nowe hasło
      </button>
      <p>{response.message}</p>
    </>
  );
};

export default ResetPasswordButton;
