"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const BasicInfo = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };
  const image = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="basicInfo"
      className="text-black  my-20 flex w-10/12 flex-row items-start justify-center text-center font-tinos md:mx-20"
    >
      <motion.div
        className="sticky top-1/4 flex w-2/12 -translate-y-[10%] translate-x-[1px] items-start justify-end mb-14"
        variants={image}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {/* mb-[162%] md:mb-[42%] md:w-1/12 lg:mb-[24%] xl:mb-[14%] 2xl:mb-[15%] */}
        <Image
          src={"/images/ooo.svg"}
          width={85}
          height={85}
          alt="logo"
          className="mr-[39px] md:mr-[24px] lg:mr-[24px] xl:mr-6"
        />
      </motion.div>
      <motion.div
        className="-z-10 w-7/12 relative font-tinos first-letter:mx-60 md:before:absolute md:before:-left-16 md:before:top-3 md:before:-ml-0.5 md:before:w-0.5 md:before:bg-offertGreen md:before:opacity-50 md:before:h-[94%]"
        variants={container}
        initial={"hidden"}
        whileInView={"show"}
        transition={{ duration: 1.5, staggerChildren: 0.5 }}
      >
        {/* before:min-[412px]:h-4/5 before:h-[82%] md:w-6/12*/}
        <motion.div
          className="mb-20 flex flex-col gap-1 text-left"
          variants={container}
        >
          <motion.div className="relative flex flex-row" variants={container}>
            <Image
              src={"/images/bi1.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute -left-20 top-2 z-10"
            />
            <motion.h2 className="text-2xl uppercase" variants={container}>
              Jak pracuję?
            </motion.h2>
          </motion.div>
          <motion.p className="text-large" variants={container}>
            Jestem Twoją towarzyszką w podróży po zdrowie, lepsze samopoczucie,
            lepszą relację z jedzeniem i samą / samym sobą. Nasza podróż
            rozpocznie się od bezpłatnej 30 minutowej konsultacji wstępnej, na
            której poznamy się bliżej. Opowiesz mi o swoich potrzebach i
            problemach oraz poznasz mnie i moje metody pracy. Gdy po konsultacji
            wstępnej zdecydujesz się na dalszą współpracę ze mną, to jej zasady
            ustalimy indywidualnie, w zależności od Twojej sytuacji zdrowotnej,
            potrzeb i możliwości.
          </motion.p>
        </motion.div>
        <motion.div
          className="mb-20 flex flex-col gap-1 text-left"
          variants={container}
        >
          <motion.div className="relative flex flex-row">
            <Image
              src={"/images/bi2.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute -left-20 top-0 z-10"
            />
            <motion.h2 className="text-2xl uppercase">
              PRACUJĘ Z DOROSŁYMI OSOBAMI KTÓRE:
            </motion.h2>
          </motion.div>
          <motion.ul className="list-disc" variants={container}>
            <motion.li>
              <span className="font-semibold">mają choroby tarczycy</span>{" "}
              (Hashimoto, niedoczynność, nadczynność);
            </motion.li>
            <motion.li>
              <span className="font-semibold">
                mają problemy z redukcją masy ciała
              </span>{" "}
              (nadwaga, otyłość);
            </motion.li>
            <motion.li className="font-semibold">
              chcą odzyskać kontrolę nad słodyczami;
            </motion.li>
            <motion.li>
              <span className="font-semibold">
                chcą zmienić nieprawidłowe nawyki żywieniowe
              </span>{" "}
              (podjadanie, zajadanie emocji);
            </motion.li>
            <motion.li>
              <span className="font-semibold">
                borykają się z zaburzeniami odżywiania
              </span>{" "}
              (anoreksja, bulimia);
            </motion.li>
            <motion.li className="font-semibold">
              mają problem z insulinoopornością;
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="mb-20 flex flex-col gap-1 text-left"
          variants={container}
        >
          <motion.div className="relative flex flex-row">
            <Image
              src={"/images/bi3.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute -left-20 top-0 z-10"
            />
            <motion.h2 className="text-2xl uppercase">
              GDY ZDECYDUJESZ SIĘ NA WSPÓŁPRACĘ:
            </motion.h2>
          </motion.div>
          <motion.p>
            Zmiana nawyków żywieniowych, poprawa zdrowia czy utrata dodatkowych
            kilogramów nie jest prosta i szybka - jeśli chcesz to zrobić dobrze
            i skutecznie, dlatego nasza współpraca będzie długoterminowa.
          </motion.p>
          <motion.ul className="list-disc">
            <motion.li>
              Przygotuj się, że zajmie to trochę czasu. Proces zmiany trwa
              zwykle kilka miesięcy
            </motion.li>
            <motion.li>
              Na początku wspólnej drogi ustalimy cel i znaki, po których
              poznamy, że cel został osiągnięty.
            </motion.li>
            <motion.li>
              Będziemy widywać się co 2 tygodnie, a każde spotkanie potrwa ok.{" "}
              50 minut (+/- 10min. w zależności od Twoich potrzeb).
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="mb-20 flex flex-col gap-1 text-left"
          variants={container}
        >
          <motion.div className="relative flex flex-row">
            <Image
              src={"/images/bi4.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute -left-20 top-0 z-10"
            />
            <motion.h2 className="text-2xl uppercase">CO OTRZYMASZ?</motion.h2>
          </motion.div>
          <motion.p>
            Dzięki naszej współpracy nauczysz się układać swój jadłospis bez
            konieczności trzymania się uciążliwej diety. Nauczysz się radzić
            sobie w trudnych sytuacjach i pokonywać pojawiające się problemy.
            Uregulujesz swój stan zdrowia, poprawisz swoje samopoczucie,
            staniesz się osobą świadomą swoich wyborów i zachowań żywieniowych.
          </motion.p>
        </motion.div>
        <motion.div
          className="mb-20 flex flex-col gap-1 text-left"
          variants={container}
        >
          <motion.div className="relative flex flex-row">
            <Image
              src={"/images/bi5.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute -left-20 top-0 z-10"
            />
            <motion.h2 className="text-2xl uppercase">
              MÓJ SPOSÓB DZIAŁANIA:
            </motion.h2>
          </motion.div>
          <motion.ul className="list-disc" variants={container}>
            <motion.li>
              <motion.p className="font-semibold">
                Pracuję z małą ilością osób, gdyż stawiam na jakość, a nie
                ilość.{" "}
              </motion.p>
              <p>Chcę żebyś czuła/czuł się bezpieczna/ny i zaopiekowana/ny.</p>
            </motion.li>
            <motion.li>
              <motion.p className="">
                Pracuję tylko z osobami dorosłymi.
              </motion.p>
            </motion.li>
            <motion.li>
              Poproszę Cię, abyś opowiedziała/opowiedział mi o swoim problemie,
              żebym mogła jak najlepiej poznać Twoją sytuację.
            </motion.li>
            <motion.li>
              Będziemy dużo rozmawiać – to najważniejszy element naszej pracy.
            </motion.li>
            <motion.li>
              Razem poszukamy satysfakcjonujących dla Ciebie rozwiązań.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BasicInfo;
