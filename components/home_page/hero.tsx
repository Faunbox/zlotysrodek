import Image from "next/image";


const HeroSection = () => {

   

  return (
    <div className="bg-green w-screen h-screen flex justify-center items-center text-white after:bg-white after:absolute after:-bottom-20 after:-left-10 after:-rotate-6 after:w-[150vw] after:h-[40%]">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col lg:w-4/6">
          <h1 className="text-6xl font-abhaya">Psychodietetyk</h1>
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
            <button className="bg-gold py-2 px-6 uppercase text-dark-green font-semibold font-montserrat">
              Oferta
            </button>
            <button className="border-white border-1 bg-transparent py-2 px-6 uppercase text-white font-semibold font-montserrat">
              O mnie
            </button>
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
