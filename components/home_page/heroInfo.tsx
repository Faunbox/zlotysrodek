"use client";
import Link from "next/link";
import FilledButton from "../typography/filledButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroInfo = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  const container = {
    hidden: { translateX: -400, opacity: 1 },
    show: {
      translateX: 0,
      opacity: 1,
      transition: { duration: 0.7, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
    ref={ref}
      className="flex flex-col m-10 mb-24 lg:mb-10 text-left md:text-center items-start md:items-center xl:items-start justify-start md:justify-center w-full lg:relative"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-7xl font-tinos lg:mb-16 tracking-wide text-shadow-lg shadow-green"
        variants={item}
      >
        <span className="underline underline-offset-4 decoration-2">
          Psycho
        </span>
        dietetyk
      </motion.h1>
      <motion.h2
        variants={item}
        className="text-2xl md:text-3xl lg:text-4xl font-tinos tracking-wide lg:absolute lg:top-[75px] lg:right-[28%] pl-10 lg:pl-0 text-shadow-lg shadow-green"
      >
        Konsultant żywieniowy
      </motion.h2>
      <motion.div
        variants={item}
        className="flex flex-col gap-3 py-6 mt-4 pb-4 2xl:w-11/12 text-medium md:text-left lg:text-xl md:w-full tracking-widest font-light font-tinos "
      >
        <motion.p variants={item} className="">
          {/* <span className="uppercase text-gold font-semibold">Uczę</span>{" "} */}
          UCZĘ - ludzi zdrowego stylu życia i poprawnej relacji z jedzeniem.
        </motion.p>
        <motion.div variants={item}>
          <motion.p variants={item}>
            {/* <span className="uppercase text-gold font-semibold">
          POMAGAM
        </span>{" "} */}
            POMAGAM - zmienić niezdrowe nawyki żywieniowe i odnaleźć
          </motion.p>
          <motion.p variants={item}>
            {/* <span className="uppercase text-gold font-semibold">
          ZŁOTY ŚRODEK -
        </span>{" "} */}
            <span className="text-gold italic">Złoty Środek -</span> własny
            dobrostan.
          </motion.p>
        </motion.div>
        <motion.p variants={item}>
          {/* <span className="uppercase text-gold font-semibold">
        WSPIERAM
      </span>{" "} */}
          WSPIERAM osoby, które są gotowe na wprowadzenie zmian w swoim życiu,
          ale brak im odwagi, pewności siebie i planu działania.
        </motion.p>
      </motion.div>
      <motion.div
        variants={item}
        className="flex flex-row gap-6 :mx-auto lg:pl-24 2xl:pl-52 z-40 pt-10 self-center"
      >
        <Link href={"/oferta"}>
          <FilledButton ariaLabel="Oferta">Oferta</FilledButton>
        </Link>
        <Link href={"/o-mnie"}>
          <FilledButton
            color="bg-transparent"
            text="white"
            border={true}
            ariaLabel="O mnie"
          >
            O mnie
          </FilledButton>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroInfo;
