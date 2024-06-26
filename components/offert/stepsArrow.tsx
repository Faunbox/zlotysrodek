"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const StepsArrow = ({ delay = 0 }: { delay?: number }) => {
  let variant = {};
  const isMobile = window.innerWidth < 1024;
  if (!isMobile) {
    variant = {
      hidden: {
        // opacity: 0,
        translateX: -10,
      },
      show: {
        // opacity: [1, 0.5, 0],
        translateX: 10,
        transition: {
          delay: delay,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          // repeatDelay: 1,
        },
      },
    };
  }

  return (
    <motion.div
      className="mx-auto w-1/12 py-10 lg:mx-0 "
      // lg:py-16 xl:py-24  strzalka na srodku
      variants={variant}
      initial="hidden"
      whileInView="show"
    >
      <Image
        src={"/images/strz.svg"}
        alt={"Jeden svg"}
        width={40}
        height={40}
        className="rotate-90 lg:rotate-0"
      />
    </motion.div>
  );
};

export default StepsArrow;
