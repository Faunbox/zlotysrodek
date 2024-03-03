"use client";
import Image from "next/image";

const FooterLogo = () => {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Image
        src={"/images/logo_footer.svg"}
        alt="Logo złoty środek"
        width={150}
        height={150}
        className="hover:rotate-[360deg] duration-700 lg:absolute lg:top-[9%] lg:-translate-y-[50%]"
        onClick={scrollToTop}
      />
      <Image
        src={"/images/zloty-srodek_napis.svg"}
        alt="Logo złoty środek"
        width={150}
        height={150}
        className="hidden lg:block lg:absolute lg:top-[31%] lg:-translate-y-[50%] hover:scale-105 duration-700"
        onClick={scrollToTop}
      />
    </>
  );
};

export default FooterLogo;
