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
        <Link
          href={`/user/${username}`}
          className="text-gold font-normal hover:border-b-small"
        >
          {username}
        </Link>
        <button
          className="mx-4 hover:border-b-small"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Wyloguj
        </button>
      </section>
    );
  }
  return (
    <>
      <Link href="/logowanie">
        <button className="uppercase text-gold hover:border-b-small">
          Logowanie
        </button>
      </Link>
    </>
  );
};

export default UserPanel;
