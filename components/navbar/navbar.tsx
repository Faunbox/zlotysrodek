"use client";
import Link from "next/link";
import UserPanel from "./userPanel";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";

const navbarData = [
  { name: "Strona główna", href: "/" },
  { name: "O mnie", href: "/o-mnie" },
  { name: "Psychodietetyk", href: "/psychodietetyk" },
  { name: "Oferta", href: "/oferta" },
  // { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const currentPath = usePathname();
  const { data: session } = useSession();
  //@ts-expect-error
  const username: string = session?.user?.username as string;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 w-full bg-lightGreen py-3">
      <div className="container relative flex max-w-[1600px] flex-row items-center justify-around px-2 lg:px-10">
        <div className="w-2/4 lg:w-1/4">
          <Link href={"/"}>
            <Image
              src={"/images/logo (2).svg"}
              alt="Logo Złoty środek"
              width={200}
              height={100}
              className="my-2 lg:absolute lg:top-[87%] lg:-translate-y-[50%] hover:scale-105 duration-300 cursor-pointer  "
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:inline-block lg:w-8/12">
          <ul className="flex flex-row items-center justify-end gap-5 font-montserrat text-sm font-light uppercase text-white">
            {navbarData.map((link) => (
              <Link
                href={link.href}
                prefetch
                className={`${
                  currentPath === link.href && "underline-offset-4 underline"
                } hover:scale-110 transform transition duration-300`}
                key={link.name}
              >
                <li>{link.name}</li>
              </Link>
            ))}
            {/* @ts-ignore */}
            <UserPanel />
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          {!open ? (
            <button
              onClick={handleClick}
              className={`z-50`}
              aria-label="Otwórz menu"
            >
              <FiMenu
                size={35}
                className={`text-white ${open ? "opacity-0" : "opacity-100"}`}
              />
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="fixed top-8 z-50"
              aria-label="Zamknij menu"
            >
              <RxCross2
                size={40}
                className={`text-black ${!open ? "opacity-0" : "opacity-100"}`}
              />
            </button>
          )}
          {open && (
            <ul className="text-md fixed left-[0%] top-[0%] z-10 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-white font-semibold uppercase text-darkGreen opacity-90 backdrop-blur-md">
              {navbarData.map((link) => (
                <Link
                  href={link.href}
                  className={`${
                    currentPath === link.href && "underline-offset-8 underline"
                  } hover:scale-110 transform transition duration-300 `}
                  key={link.name}
                  onClick={() => setOpen(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
              {/* @ts-ignore */}
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
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
