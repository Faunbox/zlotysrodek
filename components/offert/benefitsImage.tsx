"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BenefitsImage = ({ src }: { src: string }) => {
  return (
    <motion.div
      initial={{ translateY: 5 }}
      whileInView={{ translateY: 0 }}
      transition={{ repeatType: "reverse", duration: 1, repeat: Infinity }}
    >
      <Image src={src} height={100} width={100} alt="zegar" className="pb-6" />
    </motion.div>
  );
};

export default BenefitsImage;
