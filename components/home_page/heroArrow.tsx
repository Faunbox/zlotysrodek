"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroArrowss = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.2,
      },
    }
  };

  const item = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative pt-10 2xl:pt-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <Image
          src={"/images/arrowss1.svg"}
          alt="strzalki"
          width={35}
          height={51}
          className="mx-auto absolute inset-x-0 bottom-3"
        />
      </motion.div>
      <motion.div variants={item}>
        <Image
          src={"/images/arrowss2.svg"}
          alt="strzalki"
          width={35}
          height={51}
          className="mx-auto mb-10"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroArrowss;
