import Image from "next/image";

const FooterLogo = () => {
  return (
    <>
      <Image
        src={"/images/logo_footer.svg"}
        alt="Logo złoty środek"
        width={100}
        height={100}
      />
    </>
  );
};

export default FooterLogo;
