"use client";

import { sendVeryfiactionToken } from "@/actions/authActions";
import FilledButton from "../typography/filledButton";

const VeryficationButton = ({children, email }: { children:string, email: string}) => {
  return (
    <>
      <FilledButton onClick={() => sendVeryfiactionToken(email!)}>
        {children}
      </FilledButton>
    </>
  );
};

export default VeryficationButton;
