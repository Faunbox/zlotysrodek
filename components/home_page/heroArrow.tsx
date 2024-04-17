"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroArrowss = () => {
  return (
    <motion.div className="relative pt-10 2xl:pt-0">
      <Image
        src={"/images/arrowss1.svg"}
        alt="strzalki"
        width={35}
        height={51}
        className="mx-auto absolute inset-x-0 bottom-3"
      />
      <Image
        src={"/images/arrowss2.svg"}
        alt="strzalki"
        width={35}
        height={51}
        className="mx-auto mb-10"
      />
    </motion.div>
  );
};

export default HeroArrowss;
