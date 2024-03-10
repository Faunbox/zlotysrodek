import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const FollowMe = () => {
  return (
    <section className="rotate-90 font-montserrat text-sm flex w-full py-10 content-end items-start justify-end z-10 fixed bottom-[25%] md:bottom-[40%] lg:bottom-[87%] left-[40%] md:ml-14 text-darkGreen">
      <div className="flex flex-row items-center justify-center gap-2 uppercase text-black">
        <p className="mix-blend-difference text-black">Śledź mnie </p>
        <IoIosArrowRoundDown className="-rotate-90" />
        <a
          href="https://www.instagram.com/zloty__srodek/"
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
        <a href="mailto:kontakt@zlotysrodek.eu" target="_blank" rel="noopener">
          <MdEmail className="-rotate-90" />
        </a>
        <a href="tel:+48602778499" target="_blank" rel="noopener">
          <FaPhone className="-rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default FollowMe;
