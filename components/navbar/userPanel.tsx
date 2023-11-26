"use client";
import { signOut, signIn } from "next-auth/react";

const UserPanel = () => {
  return (
    <section className="flex flex-row justify-end items-center my-2">
      <button className="mx-4" onClick={() => signIn()}>
        Zaloguj
      </button>
      <button className="mx-4" onClick={() => signOut()}>
        Zarejestruj
      </button>
    </section>
  );
};

export default UserPanel;
