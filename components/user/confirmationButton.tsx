"use client";

import { sendVeryfiactionToken } from "@/actions/authActions";

const VeryficationButton = ({ email }: { email: string }) => {
  return (
    <>
      <button
        onClick={() => sendVeryfiactionToken(email!)}
        className="border-black border-1"
      >
        Potwierdz konto
      </button>
    </>
  );
};

export default VeryficationButton;
