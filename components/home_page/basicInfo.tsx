import Image from "next/image";

const BasicInfo = () => {
  return (
    <section className="flex flex-row items-center justify-center text-center md:mx-20 my-20 w-full text-green">
      <div className="w-full mx-60 relative after:absolute after:h-full after:w-0.5 after:bg-offertGreen after:-left-16 -z-10 after:-ml-0.5 after:top-0">
        <div className="flex flex-col text-left gap-4 mb-10">
          <div className="flex flex-row relative">
            <Image
              src={"/images/avocado-ciemne.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20"
            />

            <h2 className="text-2xl font-semibold uppercase">Jak pracuję?</h2>
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
        <div className="flex flex-col text-left gap-4 mb-10">
          <div className="flex flex-row relative">
            <Image
              src={"/images/avocado-ciemne.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20"
            />
            <h2 className="text-2xl font-semibold uppercase">
              PRACUJĘ Z OSOBAMI KTÓRE:
            </h2>
          </div>
          <ul>
            <li>
              mają choroby tarczycy (Hashimoto, niedoczynność, nadczynność);
            </li>
            <li>mają problemy z redukcją masy ciała (nadwaga, otyłość);</li>
            <li>chcą odzyskać kontrolę nad słodyczami;</li>
            <li>
              chcą zmienić nieprawidłowe nawyki żywieniowe (podjadanie,
              zajadanie emocji);
            </li>
            <li>
              borykają się z zaburzeniami odżywiania (anoreksja, bulimia);
            </li>
            <li>mają problem z insulinoopornością;</li>
          </ul>
        </div>
        <div className="flex flex-col text-left gap-4 mb-10">
          <div className="flex flex-row relative">
            <Image
              src={"/images/avocado-ciemne.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20"
            />
            <h2 className="text-2xl font-semibold uppercase">
              GDY ZDECYDUJESZ SIĘ NA WSPÓŁPRACĘ:
            </h2>
          </div>
          <p>
            Zmiana nawyków żywieniowych, poprawa zdrowia czy utrata dodatkowych
            kilogramów nie jest prosta i szybka - jeśli chcesz to zrobić dobrze
            i skutecznie, dlatego nasza współpraca będzie długoterminowa.
          </p>
          <ul>
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
        <div className="flex flex-col text-left gap-4 mb-10">
          <div className="flex flex-row relative">
            <Image
              src={"/images/avocado-ciemne.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20"
            />
            <h2 className="text-2xl font-semibold uppercase">CO OTRZYMASZ?</h2>
          </div>
          <p>
            Dzięki naszej współpracy nauczysz się układać swój jadłospis bez
            konieczności trzymania się uciążliwej diety. Nauczysz się radzić
            sobie w trudnych sytuacjach i zmagać z pojawiającymi się problemami.
            Uregulujesz swój stan zdrowia, poprawisz swoje samopoczucie,
            staniesz się osobą świadomą swoich wyborów i zachowań żywieniowych.
          </p>
        </div>
        <div className="flex flex-col text-left gap-4 mb-10">
          <div className="flex flex-row relative">
            <Image
              src={"/images/avocado-ciemne.svg"}
              alt="avocado"
              width={30}
              height={30}
              className="absolute top-0 -left-20"
            />
            <h2 className="text-2xl font-semibold uppercase">
              MÓJ SPOSÓB DZIAŁANIA:
            </h2>
          </div>
          <ul>
            <li>
              <p>
                <span>
                  Pracuję z małą ilością osób, gdyż stawiam na jakość, a nie
                  ilość.
                </span>
                Chcę żebyś czuła / czuł się bezpieczna/ny i zaopiekowana/ny.
              </p>
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
