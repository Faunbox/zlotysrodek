"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserPanel = () => {
  const { data: session } = useSession();
  //@ts-expect-error
  const username: string = session?.user?.username;

  if (session) {
    return (
      <section className="flex flex-row justify-end items-center my-2">
        <Link href={`/user/${username}`}>
          {/* {userEmail.substring(0, userEmail?.indexOf("@"))} */}
          {username}
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
