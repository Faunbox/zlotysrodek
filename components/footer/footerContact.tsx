import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa6";

const FooterContact = ({
  urls,
}: {
  urls: {
    privacyPolicyDataUrl: string;
    statuteDataUrl: string;
    rodoDataUrl: string;
  };
}) => {
  const contactData = [
    {
      icon: <FaPhoneAlt />,
      data: "+48 737 881 617",
      href: "tel:+48737881617",
    },
    {
      icon: <MdEmail />,
      data: "kontakt@zlotysrodek.eu",
      href: "mailto:kontakt@zlotysrodek.eu",
    },
    {
      icon: <FaInstagram />,
      data: "zllotysrodek",
      href: "https://www.instagram.com/zllotysrodek/",
    },
    {
      icon: <FaFacebook />,
      data: "zllotysrodek",
      href: "https://www.facebook.com/zllotysrodek",
    },
    {
      icon: <FaTiktok />,
      data: "zllotysrodek",
      href: "https://www.tiktok.com/@zllotysrodek",
    },
  ];

  const pdfFiles = [
    {
      text: "Polityka prywatności",
      href: `https://${urls?.privacyPolicyDataUrl}`,
    },
    { text: "Regulamin", href: `https://${urls?.statuteDataUrl}` },
    { text: "RODO", href: `https://${urls?.rodoDataUrl}` },
  ];

  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-4 lg:w-9/12 text-center lg:text-start ">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="font-semibold uppercase">Kontakt</h2>
        <ul className="text-white gap-5 grid ">
          {contactData.map((contactElem) => (
            <li
              key={contactElem.href}
              className="flex flex-row gap-2 items-center font-light"
            >
              {contactElem.icon}
              <a href={contactElem.href} target="_blank" rel="noopener">
                {contactElem.data}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <ul className="flex flex-col gap-3 pt-5 font-montserrat w-full text-left">
          {pdfFiles.map((pdf) => (
            <Link
              key={pdf.href}
              href={pdf.href}
              className=" tracking-widest uppercase hover:font-semibold duration-150"
            >
              {pdf.text}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
