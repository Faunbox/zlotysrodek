import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterContact = () => {
  const contactData = [
    {
      icon: <FaPhoneAlt />,
      data: "+48 602 778 499",
      href: "phone:+48602778499",
    },
    {
      icon: <MdEmail />,
      data: "kontakt@zlotysrodek.eu",
      href: "mailto:kontakt@zlotysrodek.eu",
    },
    {
      icon: <FaInstagram />,
      data: "zloty__srodek",
      href: "https://www.instagram.com/zloty__srodek/",
    },
    {
      icon: <FaFacebook />,
      data: "zllotysrodek",
      href: "https://www.facebook.com/zllotysrodek",
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-6/12 mx-auto">
      <h2 className="font-semibold uppercase">Kontakt</h2>
      <ul className="text-white gap-3 grid">
        {contactData.map((contactElem) => (
          <li
            key={contactElem.data}
            className="flex flex-row gap-2 items-center font-light"
          >
            {contactElem.icon}
            <a href={contactElem.href} target="_blank">
              {contactElem.data}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContact;
