import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaTiktok  } from "react-icons/fa6";

const FollowMe = () => {
  return (
    <section className="rotate-90 font-montserrat text-sm flex w-full py-10 content-end items-start justify-end z-30 fixed top-[45%] md:top-[50%] 2xl:-top-[25%] translate-y-[50%] left-[45%] md:left-[40%] md:ml-14 text-black">
      <div className="flex flex-row items-center justify-center gap-2 uppercase">
        <p className="text-black text-[15px]">Śledź mnie </p>
        <IoIosArrowRoundDown className="-rotate-90"/>
        <a
          href="https://www.instagram.com/zllotysrodek/"
          target="_blank"
          rel="noopener"
        >
          <SlSocialInstagram className="-rotate-90" />
        </a>
        <a
          href="https://www.facebook.com/zllotysrodek"
          target="_blank"
          rel="noopener"
        >
          <FaFacebook className="-rotate-90" />
        </a>
        <a
          href="https://www.tiktok.com/@zllotysrodek"
          target="_blank"
          rel="noopener"
        >
          <FaTiktok  className="-rotate-90" />
        </a>
        <a href="mailto:kontakt@zlotysrodek.eu" target="_blank" rel="noopener">
          <MdEmail className="-rotate-90" />
        </a>
        <a href="tel:+48737881617" target="_blank" rel="noopener">
          <FaPhone className="-rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default FollowMe;
