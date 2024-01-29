import Link from "next/link";
import UserPanel from "./userPanel";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row sticky bg-green top-0 z-50 justify-around items-center backdrop-blur-2xl">
      <div>
        <Image
          src={"/images/logo.png"}
          alt="Logo Złoty środek"
          width={200}
          height={100}
          className="w-auto h-auto"
        />
      </div>
      <div>
        <ul className="flex flex-row  gap-5 text-white items-center justify-center uppercase text-sm font-light">
          <Link href="/" className="hover:border-b-small ">
            <li>Strona główna</li>
          </Link>
          <Link href={"/o-mnie"} className="hover:border-b-small ">
            <li>O mnie</li>
          </Link>
          <Link href={"/konsultacje"} className="hover:border-b-small ">
            <li>Psychodietetyk</li>
          </Link>
          <Link href={"/konsultacje"} className="hover:border-b-small ">
            <li>Sklep</li>
          </Link>
          <Link href={"/kontakt"} className="hover:border-b-small ">
            <li>Kontakt</li>
          </Link>
          <UserPanel />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
