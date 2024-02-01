import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const FollowMe = () => {
  return (
    <section className=" font-montserrat text-sm flex w-full py-10 content-end items-start justify-end z-10 relative ml-14">
      <div className="rotate-90 flex flex-row items-center justify-center gap-2 sticky top-60 uppercase">
        <p>Śledź mnie </p>
        <IoIosArrowRoundDown className="-rotate-90" />
        <SlSocialInstagram className="-rotate-90" />
        <FaFacebook className="-rotate-90" />
        <MdEmail className="-rotate-90" />
        <FaPhone className="-rotate-90" />
      </div>
    </section>
  );
};

export default FollowMe;
