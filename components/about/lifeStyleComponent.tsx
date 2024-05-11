"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LifestyleComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mx-10 lg:mx-20 pb-14 w-screen bg-green">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center container w-8/12 max-w-[1200px] font-tinos">
        <div className="hidden xl:flex xl:w-6/12">
          <Image
            src={"/images/sadzonka.jpeg"}
            alt="sadzonka"
            width={440}
            height={750}
            className="border-2 border-white mt-6"
          />
        </div>
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-white mt-4 xl:w-6/12 xl:px-10"
          initial={{ translateX: 2000 }}
          animate={{ translateX: 0 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
        >
          <h4 className="text-3xl underline w-full mx-2">
            Zdrowy styl życia to dla mnie:
          </h4>
          <ul className="flex flex-col gap-5 2xl:gap-8 mt-10 justify-center items-start text-large mx-auto xl:text-xl 2xl:mr-20 w-full">
            <li className="relative">
              <p className="after:w-[200px] after:md:w-[250px] after:lg:w-[300px] after:xl:w-[150px] after:2xl:w-[200px] after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-3">
                Wybór odpowiednich, dobrej jakości produktów spożywczych, z
                których komponuję zbilansowane posiłki
              </p>
            </li>
            <li className="relative">
              <p className="after:w-[200px] after:md:w-[250px] after:lg:w-[300px] after:xl:w-[150px] after:2xl:w-[200px] after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-4">
                Umiarkowana aktywność fizyczna wpleciona w codzienne życie
              </p>
            </li>
            <li className="relative">
              <p className="after:w-[200px] after:md:w-[250px] after:lg:w-[300px] after:xl:w-[150px] after:2xl:w-[200px] after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-4">
                Czas spędzony na łonie natury
              </p>
            </li>
            <li className="relative">
              <p className="after:w-[200px] after:md:w-[250px] after:lg:w-[300px] after:xl:w-[150px] after:2xl:w-[200px] after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-4">
                Odpoczynek i regeneracja
              </p>
            </li>
            <li className="relative">
              <p className="after:w-[200px] after:md:w-[250px] after:lg:w-[300px] after:xl:w-[150px] after:2xl:w-[200px] after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-4">
                Utrzymanie rytmu dobowego
              (rytm dnia i nocy)</p>
            </li>
            <li className="relative">
              <p className="after:w-[200px] after:md:w-[250px] after:lg:w-[300px] after:xl:w-[150px] after:2xl:w-[200px] after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-4">
                Pozytywne relacje z bliskimi oraz otaczającymi mnie ludźmi
              </p>
            </li>
            <li className="relative">
              <p>Regulacja emocji poprzez zastosowanie odpowiednich technik</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default LifestyleComponent;
