"use client";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SocialPanel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="mx-10 lg:px-40 mb-20 w-full font-montserrat xl:mt-10">
      <motion.div
        ref={ref}
        className="flex flex-col md:flex-row items-center justify-center text-darkGreen gap-10"
        initial={{ translateY: 50 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 1}}
      >
        <div className="flex flex-col items-center justify-center md:w-4/12">
          <a
            href="tel:+48737881617"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center justify-center"
          >
            <FaPhone
              className={
                "max-w-[40px] max-h-[40px] w-full h-full hover:scale-110 duration-400"
              }
            />
            <p className="text-medium mt-6">+48 737 881 617</p>
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
            href="https://www.instagram.com/zllotysrodek/"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center justify-center"
          >
            <SlSocialInstagram
              className={
                "max-w-[40px] max-h-[40px] w-full h-full hover:scale-110 duration-400"
              }
            />
            <p className="text-medium mt-6">zllotysrodek</p>
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
      </motion.div>
    </section>
  );
};

export default SocialPanel;
