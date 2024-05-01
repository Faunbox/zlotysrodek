"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const HeroArrowss = () => {
  const container = {
    hidden: {
      translateY: 5,
    },
    show: {
      translateY: 0,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="relative pt-10 2xl:pt-0"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          {/* <motion.div variants={item}> */}
          <Image
            src={"/images/arrowss1.svg"}
            alt="strzalki"
            width={35}
            height={51}
            className="mx-auto absolute inset-x-0 bottom-3"
          />
          {/* </motion.div> */}
        </div>
        <div>
          {/* <motion.div variants={item}> */}
          <Image
            src={"/images/arrowss2.svg"}
            alt="strzalki"
            width={35}
            height={51}
            className="mx-auto mb-10"
          />
          {/* </motion.div> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroArrowss;
