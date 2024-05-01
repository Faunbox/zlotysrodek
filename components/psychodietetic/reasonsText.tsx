"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ReasonsText = ({
  reasons,
}: {
  reasons: { title: string; text: string; last?: boolean }[];
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-white mt-4 xl:w-6/12 xl:px-10"
      initial={{ translateX: 2000 }}
      animate={{ translateX: 0 }}
      transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
    >
      <h4 className="text-3xl underline w-full mt-4">Powody konsultacji:</h4>
      <ul className="flex flex-col gap-5 2xl:gap-8 mt-10 justify-center items-start text-large mx-auto xl:text-xl 2xl:mr-20 w-full">
        {reasons.map((reason) => {
          return (
            <li className="relative " key={reason.title}>
              <h4 className="font-semibold">{reason.title}</h4>
              <p
                className={`${
                  !reason.last &&
                  "after:w-[200px] after:md:w-[250px] after:lg:w-[300px] after:xl:w-[150px] after:2xl:w-[200px] after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-3"
                }`}
              >
                {reason.text}
              </p>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default ReasonsText;
