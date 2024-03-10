import Image from "next/image";
import Link from "next/link";
import FilledButton from "../typography/filledButton";

const HeroSection = () => {
  return (
    <div className="relative bg-green w-screen h-full lg:h-[80vh] max-h-[700px] mb-20 2xl:px-[2%] flex justify-center items-center z-10 text-white overflow-hidden after:bg-white after:absolute after:-bottom-20 after:left-0 after:right-0 after:-rotate-6 after:w-[150vw] after:h-[28%] after:md:h-[31%] after:lg:h-[30%] after:xl:h-[35%] after:2xl:h-[20vh%] after:z-0">
      <div className="flex flex-row lg:gap-10 items-center mx-auto justify-center container w-full lg:w-9/12 2xl:w-7/12">
        <div className="flex flex-col m-10 mb-24 md:text-center items-center lg:items-start justify-center w-full lg:relative">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-abhaya lg:mb-16">
            Psychodietetyk
          </h1>
          <h2 className="pl-30 text-2xl md:text-3xl lg:text-4xl font-abhaya lg:absolute lg:top-20 lg:-right-[40%]">
            Konsultant żywieniowy
          </h2>
          <div className="flex flex-col gap-3 py-6 text-medium md:text-left lg:text-xl md:w-full font-light">
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
          <div className="flex flex-row gap-6 ml-8 z-40">
            <Link href={"/oferta"}>
              <FilledButton>Oferta</FilledButton>
            </Link>
            <Link href={"/o-mnie"}>
              <FilledButton color="bg-transparent" text="white" border={true}>
                O mnie
              </FilledButton>
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/images/hero-image.png"}
            alt="psychodietetyk"
            width={300}
            height={600}
            className="hidden md:flex absolute"
          />
          <Image
            src={"/images/blob.svg"}
            alt="blob"
            width={300}
            height={600}
            className="hidden md:flex absolute -z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
