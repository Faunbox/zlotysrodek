"use client";

import { sendVeryfiactionToken } from "@/actions/authActions";

const VeryficationButton = ({ email }: { email: string }) => {
  return (
    <li>
      <button
        onClick={() => sendVeryfiactionToken(email!)}
        className="border-black border-1"
      >
        Potwierdz konto
      </button>
    </li>
  );
};

export default VeryficationButton;
