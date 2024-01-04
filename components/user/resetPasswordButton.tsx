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
    <li>
      Ustaw nowe hasło{" "}
      <button
        onClick={() => handleSend(email)}
        className="border-black border-1"
      >
        Wyślij
      </button>
      <p>{response.message}</p>
    </li>
  );
};

export default ResetPasswordButton;
