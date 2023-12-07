"use client";
import Google from "next-auth/providers/google";
import { signOut, signIn, useSession } from "next-auth/react";
import Link from "next/link";

const UserPanel = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email!;

  if (session) {
    return (
      <section className="flex flex-row justify-end items-center my-2">
        <Link href={`/user/${session?.user?.email}`}>
          {userEmail.substring(0, userEmail?.indexOf("@"))}
        </Link>
        <button className="mx-4" onClick={() => signOut({ callbackUrl: "/" })}>
          Wyloguj
        </button>
      </section>
    );
  }
  return (
    <>
      <Link href="/rejestracja">
        <button className="mx-4">Rejestracja</button>
      </Link>
      <Link href="/logowanie">
        <button className="mx-4">Logowanie</button>
      </Link>
    </>
  );
};

export default UserPanel;
