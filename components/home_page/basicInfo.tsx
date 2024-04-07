import Image from "next/image";

const BasicInfo = () => {
  return (
    <section className="flex flex-row relative items-start justify-center text-center md:mx-20 my-20 w-full text-darkGreen">
      <div className="w-2/12 md:w-1/12 sticky top-1/4 mb-[130%] md:mb-[42%] lg:mb-[24%] xl:mb-[12%] flex items-start justify-end -translate-y-[10%] translate-x-[1px]">
        <Image
          // src={"/images/logo_footer (2).svg"}
          src={"/images/ooo.svg"}
          width={85}
          height={85}
          alt="logo"
          className="mr-[34px] lg:mr-[23px] xl:mr-6"
        />
      </div>
      <div className="w-7/12 md:w-6/12 first-letter:mx-60 relative before:absolute before:h-[82%] before:md:h-4/5 before:w-0.5 before:bg-offertGreen before:-left-16 before:top-3 -z-10 before:-ml-0.5 before:opacity-50 font-poppins">
        <div className="flex flex-col text-left gap-4 mb-16">
          <div className="flex flex-row relative">
            <Image
              src={"/images/kropka.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20  z-10"
            />

            <h2 className="text-2xl uppercase font-abhaya ">Jak pracuję?</h2>
          </div>
          <p>
            Jestem Twoją towarzyszką w podróży po zdrowie, lepsze samopoczucie,
            lepszą relację z jedzeniem i samą / samym sobą. Nasza podróż
            rozpocznie się od bezpłatnej 30 minutowej konsultacji wstępnej, na
            której poznamy się bliżej. Opowiesz mi o swoich potrzebach i
            problemach oraz poznasz mnie i moje metody pracy. Gdy po konsultacji
            wstępnej zdecydujesz się na dalszą współpracę ze mną, to jej zasady
            ustalimy indywidualnie, w zależności od Twojej sytuacji zdrowotnej,
            potrzeb i możliwości.
          </p>
        </div>
        <div className="flex flex-col text-left gap-4 mb-16">
          <div className="flex flex-row relative">
            <Image
              src={"/images/kropka.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20 z-10"
            />
            <h2 className="text-2xl uppercase font-abhaya">
              PRACUJĘ Z OSOBAMI KTÓRE:
            </h2>
          </div>
          <ul className="list-disc">
            <li>
              <span className="font-semibold">mają choroby tarczycy</span>{" "}
              (Hashimoto, niedoczynność, nadczynność);
            </li>
            <li>
              <span className="font-semibold">
                mają problemy z redukcją masy ciała
              </span>{" "}
              (nadwaga, otyłość);
            </li>
            <li className="font-semibold">
              chcą odzyskać kontrolę nad słodyczami;
            </li>
            <li>
              <span className="font-semibold">
                chcą zmienić nieprawidłowe nawyki żywieniowe
              </span>{" "}
              (podjadanie, zajadanie emocji);
            </li>
            <li>
              <span className="font-semibold">
                borykają się z zaburzeniami odżywiania
              </span>{" "}
              (anoreksja, bulimia);
            </li>
            <li className="font-semibold">
              mają problem z insulinoopornością;
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-left gap-4 mb-16">
          <div className="flex flex-row relative">
            <Image
              src={"/images/kropka.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20 z-10"
            />
            <h2 className="text-2xl uppercase font-abhaya">
              GDY ZDECYDUJESZ SIĘ NA WSPÓŁPRACĘ:
            </h2>
          </div>
          <p>
            Zmiana nawyków żywieniowych, poprawa zdrowia czy utrata dodatkowych
            kilogramów nie jest prosta i szybka - jeśli chcesz to zrobić dobrze
            i skutecznie, dlatego nasza współpraca będzie długoterminowa.
          </p>
          <ul className="list-disc">
            <li>
              Przygotuj się, że zajmie to trochę czasu. Proces zmiany trwa
              zwykle kilka miesięcy
            </li>
            <li>
              Na początku wspólnej drogi ustalimy cel i znaki, po których
              poznamy, że cel został osiągnięty.
            </li>
            <li>
              Będziemy widywać się co 2 tygodnie, a każde spotkanie potrwa ok.{" "}
              50 minut (+/- 10min. w zależności od Twoich potrzeb).
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-left gap-4 mb-16">
          <div className="flex flex-row relative">
            <Image
              src={"/images/kropka.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20 z-10"
            />
            <h2 className="text-2xl uppercase font-abhaya">CO OTRZYMASZ?</h2>
          </div>
          <p>
            Dzięki naszej współpracy nauczysz się układać swój jadłospis bez
            konieczności trzymania się uciążliwej diety. Nauczysz się radzić
            sobie w trudnych sytuacjach i zmagać z pojawiającymi się problemami.
            Uregulujesz swój stan zdrowia, poprawisz swoje samopoczucie,
            staniesz się osobą świadomą swoich wyborów i zachowań żywieniowych.
          </p>
        </div>
        <div className="flex flex-col text-left gap-4 mb-16">
          <div className="flex flex-row relative">
            <Image
              src={"/images/kropka.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20 z-10"
            />
            <h2 className="text-2xl font-abhaya uppercase">
              MÓJ SPOSÓB DZIAŁANIA:
            </h2>
          </div>
          <ul className="list-disc">
            <li>
              <p className="font-semibold">
                Pracuję z małą ilością osób, gdyż stawiam na jakość, a nie
                ilość.{" "}
              </p>
              <p>Chcę żebyś czuła/czuł się bezpieczna/ny i zaopiekowana/ny.</p>
            </li>
            <li>
              Poproszę Cię, abyś opowiedziała/opowiedział mi o swoim problemie,
              żebym mogła jak najlepiej poznać Twoją sytuację.
            </li>
            <li>
              Będziemy dużo rozmawiać – to najważniejszy element naszej pracy.
            </li>
            <li>Razem poszukamy satysfakcjonujących dla Ciebie rozwiązań.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BasicInfo;
