"use client";

import { sendVeryfiactionToken } from "@/actions/authActions";

const VeryficationButton = (email: string) => {    
  return (
    <li>
      Wyślij ponownie email potwierdzający{" "}
      <button
        onClick={() => sendVeryfiactionToken(email)}
        className="border-black border-1"
      >
        Wyślij
      </button>
    </li>
  );
};

export default VeryficationButton;
