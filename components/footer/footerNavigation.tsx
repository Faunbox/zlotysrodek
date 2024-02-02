import Link from "next/link";

const FooterNav = () => {
  const navigation = [
    { text: "Strona główna", href: "/" },
    { text: "O mnie", href: "/o-mnie" },
    { text: "Psychodietetyk", href: "/psychodietetyk" },
    { text: "Oferta", href: "/oferta" },
    // { text: "Blog", href: "/blog" },
    { text: "Kontakt", href: "/kontakt" },
    { text: "Logowanie", href: "/logowanie" },
    { text: "Polityka prywatności", href: "/oferta" },
    { text: "Regulamin", href: "/regulamin" },
    { text: "RODO", href: "/rodo" },
  ];

  return (
    <div className="flex flex-col gap-2 w-6/12">
      <h2 className="font-semibold uppercase">Nawigacja</h2>
      <ul className="grid gap-3">
        {navigation.map((navElem) => (
          <Link key={navElem.href} href={navElem.href} className="font-light text-sm tracking-wider">
            {navElem.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
