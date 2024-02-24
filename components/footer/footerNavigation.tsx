"use client";
import { getDownloadableFiles } from "@/lib/contentful";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const FooterNav = () => {
  
  const { isLoading, data } = useQuery({
    queryKey: ["urls"],
    queryFn: async () => await getDownloadableFiles(),
  });

  const navigation = [
    { text: "Strona główna", href: "/" },
    { text: "O mnie", href: "/o-mnie" },
    { text: "Psychodietetyk", href: "/psychodietetyk" },
    { text: "Oferta", href: "/oferta" },
    // { text: "Blog", href: "/blog" },
    { text: "Kontakt", href: "/kontakt" },
    { text: "Logowanie", href: "/logowanie" },
    {
      text: "Polityka prywatności",
      href: `https://${data?.privacyPolicyDataUrl}`,
    },
    { text: "Regulamin", href: `https://${data?.statuteDataUrl}` },
    { text: "RODO", href: `https://${data?.rodoDataUrl}` },
  ];

  return (
    <div className="flex flex-col gap-2 w-full md:w-6/12">
      <h2 className="font-semibold uppercase">Nawigacja</h2>
      <ul className="grid gap-3">
        {navigation.map((navElem) => (
          <Link
            key={navElem.href}
            href={navElem.href}
            className="font-light text-sm tracking-wider hover:font-semibold duration-150"
          >
            {navElem.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
