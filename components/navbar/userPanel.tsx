"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserPanel = () => {
  const { data: session } = useSession();
  //@ts-expect-error
  const username: string = session?.user?.username;

  if (session) {
    return (
      <li className="flex flex-col md:flex-row justify-end items-center my-2">
        <Link
          href={`/user/${username}`}
          className="text-gold font-normal hover:scale-105 duration-300"
        >
          {username}
        </Link>
        <button
          className="mx-4 hover:scale-105 duration-300"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Wyloguj
        </button>
      </li>
    );
  }
  return (
    <li>
      <Link href="/logowanie">
        <button className="uppercase text-gold hover:border-b-small">
          Logowanie
        </button>
      </Link>
    </li>
  );
};

export default UserPanel;
