import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-green w-screen h-[71vh] mb-12 flex justify-center items-center z-10 text-white overflow-hidden after:bg-white after:absolute after:-bottom-20 after:left-0 after:right-0 after:-rotate-6 after:w-[150vw] after:h-[40%] ">
      <div className="flex flex-row gap-4 lg:w-9/12">
        <div className="flex flex-col lg:w-4/6">
          <h1 className="text-7xl font-abhaya">Psychodietetyk</h1>
          <h2 className="text-4xl font-abhaya">Konsultant żywieniowy</h2>
          <div className="flex flex-col gap-3 py-6">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, nam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, nam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, nam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, nam.
            </p>
          </div>
          <div className="flex flex-cal lg:flex-row gap-6 ml-8">
            <Link href={"/konsultacje"}>
              <button className="bg-gold py-2 px-6 uppercase text-dark-green font-semibold font-montserrat">
                Oferta
              </button>
            </Link>
            <Link href={"/o-mnie"}>
              <button className="border-white border-1 bg-transparent py-2 px-6 uppercase text-white font-semibold font-montserrat">
                O mnie
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-2/6">
          <Image
            src={"/images/hero-image.png"}
            alt="psychodietetyk"
            width={300}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
