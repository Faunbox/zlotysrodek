"use client";

import { sendVeryfiactionToken } from "@/actions/authActions";
import FilledButton from "../typography/filledButton";
import { useState } from "react";
import { string } from "zod";

const VeryficationButton = ({
  children,
  email,
}: {
  children: string;
  email: string;
}) => {
  const [response, setResponse] = useState({ status: null, message: null });

  const handleClick = async () => {
    await sendVeryfiactionToken(email!).then((data) =>
    //@ts-ignore
      setResponse({ status: data?.status!, message: data?.message! })
    );
  };

  return (
    <>
      <FilledButton onClick={handleClick}>
        {children}
      </FilledButton>
      {response && <p>{response.message}</p>}
    </>
  );
};

export default VeryficationButton;
