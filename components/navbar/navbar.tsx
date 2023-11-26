import Link from "next/link";
import UserPanel from "./userPanel";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col">
      <UserPanel />
      <section>
        <ul className="flex flex-row justify-around">
          <Link href="/">
            <li>Główna</li>
          </Link>
          <Link href={"/o-mnie"}>
            <li>O mnie</li>
          </Link>
          <Link href={"/konsultacje"}>
            <li>Konultacje</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/kontakt"}>
            <li>Kontakt</li>
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
