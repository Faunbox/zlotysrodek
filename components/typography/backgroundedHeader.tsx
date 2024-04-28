"use client";
import { motion } from "framer-motion";

const BackgroundedHeader = ({
  children,
  size = "text-5xl xl:text-6xl",
  position = "text-left",
  title = true,
  classname = "",
}: {
  children: string;
  size?: string;
  position?: string;
  title?: boolean;
  classname?: string;
}) => {
  return (
    <header className={`w-screen bg-green py-6 ${title && "pt-5 xl:pt-20"} `}>
      <div className={`container xl:pl-10 ${classname}`}>
        <motion.h3
          className={`${size} ${position} text-white font-abhaya mx-8 md:mx-10 lg:mx-20 tracking-wide	`}
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.h3>
      </div>
    </header>
  );
};

export default BackgroundedHeader;
