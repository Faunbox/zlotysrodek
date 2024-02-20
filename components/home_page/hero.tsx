import Image from "next/image";
import Link from "next/link";
import FilledButton from "../typography/filledButton";

const HeroSection = () => {
  return (
    <div className="relative bg-green w-screen h-full lg:h-[71vh] mb-20 flex justify-center items-center z-10 text-white overflow-hidden after:bg-white after:absolute after:-bottom-20 after:left-0 after:right-0 after:-rotate-6 after:w-[150vw] after:h-[28%] after:md:h-[35%] after:lg:h-[38%] after:z-0">
      <div className="flex flex-row lg:gap-10 items-center justify-center w-full lg:w-9/12">
        <div className="flex flex-col m-10 mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-abhaya">
            Psychodietetyk
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-abhaya">
            Konsultant żywieniowy
          </h2>
          <div className="flex flex-col gap-3 py-6 text-medium lg:text-xl md:w-8/12">
            <p className="">
              <span className="uppercase text-gold font-semibold">Uczę</span>{" "}
              ludzi zdrowego stylu życia i poprawnej relacji z jedzeniem.
            </p>
            <div>
              <p>
                <span className="uppercase text-gold font-semibold">
                  POMAGAM
                </span>{" "}
                zmienić niezdrowe nawyki żywieniowe i odnaleźć
              </p>
              <p>
                <span className="uppercase text-gold font-semibold">
                  ZŁOTY ŚRODEK -
                </span>{" "}
                własny dobrostan
              </p>
            </div>
            <p>
              <span className="uppercase text-gold font-semibold">
                WSPIERAM
              </span>{" "}
              osoby, które są gotowe na wprowadzenie zmian w swoim życiu, ale
              brak im odwagi, pewności siebie i planu działania.
            </p>
          </div>
          <div className="flex flex-cal lg:flex-row gap-6 ml-8">
            <Link href={"/oferta"}>
              <FilledButton>Oferta</FilledButton>
            </Link>
            <Link href={"/o-mnie"}>
              <FilledButton color="bg-darkGreen" text="white">
                O mnie
              </FilledButton>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <Image
            src={"/images/hero-image.png"}
            alt="psychodietetyk"
            width={300}
            height={600}
            className="hidden md:flex "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
