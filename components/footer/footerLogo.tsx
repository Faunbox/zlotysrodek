'use client'
import Image from "next/image";

const FooterLogo = () => {

  const isBrowser = () => typeof window !== 'undefined'

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
        className="hover:rotate-[360deg] duration-250"
        onClick={scrollToTop}
      />
    </>
  );
};

export default FooterLogo;
