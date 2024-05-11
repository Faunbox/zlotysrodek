"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserPanel = (fn?: () => void) => {
  const { data: session } = useSession();
  //@ts-expect-error
  const username: string = session?.user?.username as string;

  const handleClick = () => {
    fn;
  };

  if (session) {
    return (
      <li className="flex flex-col md:flex-row justify-end items-center my-2">
        <Link
          href={`/user/${username}`}
          prefetch
          className="text-gold font-normal hover:scale-105 duration-300"
          onClick={handleClick}
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
      <Link href="/logowanie" onClick={handleClick}>
        <button className="uppercase text-gold hover:border-b-small">
          Logowanie
        </button>
      </Link>
    </li>
  );
};

export default UserPanel;
