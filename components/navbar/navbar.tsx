"use client";
import Link from "next/link";
import UserPanel from "./userPanel";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const navbarData = [
  { name: "Strona główna", href: "/" },
  { name: "O mnie", href: "/o-mnie" },
  { name: "Psychodietetyk", href: "/psychodietetyk" },
  { name: "Oferta", href: "/oferta" },
  { name: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full sticky bg-green top-0 right-0 left-0 z-50 ">
      <div className="flex flex-row justify-around items-center p-2 lg:px-10 container relative">
        <div className="w-2/4 lg:w-1/4  ">
          <Link href={"/"}>
            <Image
              src={"/images/logo3.svg"}
              alt="Logo Złoty środek"
              width={200}
              height={100}
              className="my-2 lg:absolute lg:top-[75%] lg:-translate-y-[50%]"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:inline-block">
          <ul className="flex flex-row gap-10 text-white items-center justify-center uppercase text-sm font-light">
            {navbarData.map((link) => (
              <Link
                href={link.href}
                className={`${
                  currentPath === link.href && "underline-offset-8 underline"
                } hover:scale-110 transform transition duration-300`}
                key={link.name}
              >
                <li>{link.name}</li>
              </Link>
            ))}
            <UserPanel />
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden ">
          <button onClick={handleClick} className={`z-50 `}>
            <FiMenu
              size={35}
              className={`text-white ${open ? "opacity-0" : "opacity-100"}`}
            />
          </button>
          {open && (
            <ul className="fixed top-[0%] left-[0%] flex flex-col bg-white opacity-90 backdrop-blur-md h-screen w-screen gap-5 text-darkGreen items-center justify-center uppercase text-md font-semibold  z-40">
              <button onClick={handleClick} className="absolute top-5 right-8">
                <RxCross2 size={40} />
              </button>
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
              <UserPanel />
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
