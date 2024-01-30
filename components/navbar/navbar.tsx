import Link from "next/link";
import UserPanel from "./userPanel";
import Image from "next/image";

const navbarData = [
  { name: "Strona główna", href: "/" },
  { name: "O mnie", href: "/o-mnie" },
  { name: "Psychodietetyk", href: "/psychodietetyk" },
  { name: "Sklep", href: "/konsultacje" },
  { name: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  return (
    <nav className="w-screen flex flex-row sticky bg-green top-0 z-50 justify-around items-center backdrop-blur-2xl">
      <div>
        <Image
          src={"/images/logo2.svg"}
          alt="Logo Złoty środek"
          width={200}
          height={100}
          // className="w-auto h-auto"
        />
      </div>
      <div>
        <ul className="flex flex-row  gap-5 text-white items-center justify-center uppercase text-sm font-light">
          {navbarData.map((link) => (
            <Link
              href={link.href}
              className="hover:border-b-small"
              key={link.name}
            >
              <li>{link.name}</li>
            </Link>
          ))}
          <UserPanel />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
