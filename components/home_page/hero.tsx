import Image from "next/image";
import Link from "next/link";
import FilledButton from "../typography/filledButton";

const HeroSection = () => {
  return (
    <div className="bg-lightGreen w-screen">
      <div className=" bg-lightGreen w-screen  h-full lg:h-[80vh] max-h-[700px] md:my-16 pt-10 pb-20 2xl:px-[10%] flex justify-center items-center z-10 text-white  ">
        <div className="flex flex-row relative lg:gap-10 items-center mx-auto justify-center container w-full  lg:w-9/12 2xl:w-10/12 border-2 border-white shadow-lg shadow-black">
          <div className="flex flex-col m-10 mb-24 lg:mb-10 text-left md:text-center items-start justify-start lg:justify-center w-full lg:relative">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-tinos lg:mb-16 tracking-wide text-shadow-lg shadow-green">
              <span className="underline underline-offset-4 decoration-2">
                Psycho
              </span>
              dietetyk
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-tinos tracking-wide lg:absolute lg:top-[75px] lg:right-[28%] pl-10 lg:pl-0 text-shadow-lg shadow-green">
              Konsultant żywieniowy
            </h2>
            <div className="flex flex-col gap-3 py-6 mt-4 pb-4 2xl:w-11/12 text-medium md:text-left lg:text-xl md:w-full tracking-widest font-light font-tinos ">
              <p className="">
                {/* <span className="uppercase text-gold font-semibold">Uczę</span>{" "} */}
                UCZĘ - ludzi zdrowego stylu życia i poprawnej relacji z
                jedzeniem.
              </p>
              <div>
                <p>
                  {/* <span className="uppercase text-gold font-semibold">
                  POMAGAM
                </span>{" "} */}
                  POMAGAM - zmienić niezdrowe nawyki żywieniowe i odnaleźć
                </p>
                <p>
                  {/* <span className="uppercase text-gold font-semibold">
                  ZŁOTY ŚRODEK -
                </span>{" "} */}
                  <span className="text-gold italic">Złoty Środek -</span>{" "}
                  własny dobrostan
                </p>
              </div>
              <p>
                {/* <span className="uppercase text-gold font-semibold">
                WSPIERAM
              </span>{" "} */}
                WSPIERAM osoby, które są gotowe na wprowadzenie zmian w swoim
                życiu, ale brak im odwagi, pewności siebie i planu działania.
              </p>
            </div>
            <div className="flex flex-row gap-6 ml-8 2xl:pl-44 z-40 pt-10 self-center">
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
            </div>
          </div>
          <div className="hidden w-full md:w-3/12 md:flex items-center justify-center">
            <Image
              src={"/images/hero-image.png"}
              alt="psychodietetyk"
              width={355}
              height={600}
              className="hidden md:flex absolute bottom-[265px] translate-y-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
