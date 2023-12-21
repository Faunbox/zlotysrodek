"use client";
import { sendResetPasswordToken } from "@/actions/authActions";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center align-center flex-col w-full py-5">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Twoj adres email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => sendResetPasswordToken(email)}>
        Zresetuj hasło
      </button>
    </div>
  );
};

export default Page;
