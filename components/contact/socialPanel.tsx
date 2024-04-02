import { FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";

const SocialPanel = () => {
  return (
    <section className="mx-10 lg:px-40 mb-20 w-full font-montserrat">
      <div className="flex flex-col items-center justify-center md:flex-row text-darkGreen gap-10">
        <div className="flex flex-col items-center justify-center md:w-4/12">
          <a
            href="tel:+48602778499"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center justify-center"
          >
            <FaPhone
              className={
                "max-w-[40px] max-h-[40px] w-full h-full hover:scale-110 duration-400"
              }
            />
            <p className="text-medium mt-6">+48 602 778 499</p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center md:w-4/12">
          <a
            href="mailto:kontakt@zlotysrodek.eu"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center justify-center"
          >
            <MdEmail
              className={
                "max-w-[40px] max-h-[40px] w-full h-full hover:scale-110 duration-400"
              }
            />
            <p className="text-medium mt-6">kontakt@zlotysrodek.eu</p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center md:w-4/12">
          <a
            href="https://www.instagram.com/zloty__srodek/"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center justify-center"
          >
            <SlSocialInstagram
              className={
                "max-w-[40px] max-h-[40px] w-full h-full hover:scale-110 duration-400"
              }
            />
            <p className="text-medium mt-6">zloty__srodek</p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center md:w-4/12">
          <a
            href="https://www.facebook.com/zllotysrodek"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center justify-center"
          >
            <FaFacebook
              className={
                "max-w-[40px] max-h-[40px] w-full h-full hover:scale-110 duration-400"
              }
            />
            <p className="text-medium mt-6 ">zllotysrodek</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialPanel;
