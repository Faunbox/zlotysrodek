import Image from "next/image";

const LifestyleComponent = () => {
  return (
    <div className="lg:mx-20 mb-10 lg:mb-20 relative">
      <div className="flex flex-col md:flex-row gap-5 lg:gap-20 ">
        <div className="md:w-7/12 lg:w-6/12">
          <Image
            src={"/images/sadzonka.jpeg"}
            alt="sadzonka"
            width={440}
            height={900}
            className="lg:mr-20 object-cover lg:absolute lg:-top-5 "
          />
        </div>
        <ul className="flex flex-col gap-3 lg:gap-5 2xl:gap-7 mt-2  lg:mt-7 px-10 md:mx-2 lg:mx-10 font-semibold justify-center items-start text-green list-image-avocado text-large md:w-8/12 font-abhaya">
          <li className="marker:text-[2.25em] marker:list-item tracking-wide">
            Wybór odpowiednich, dobrej jakości produktów spożywczych, z których
            komponuję zbilansowane posiłki
          </li>
          <li className="marker:text-[2.25em] marker:mt-10">
            Umiarkowana aktywność fizyczna wpleciona w codzienne życie
          </li>
          <li className="marker:text-[2.25em]">
            Czas spędzony na łonie natury
          </li>
          <li className="marker:text-[2.25em]">Odpoczynek i regeneracja</li>
          <li className="marker:text-[2.25em]">
            Utrzymanie rytmu dobowego (rytm dnia i nocy)
          </li>
          <li className="marker:text-[2.25em]">
            Pozytywne relacje z bliskimi oraz otaczającymi mnie ludźmi
          </li>
          <li className="marker:text-[2.25em]">
            Regulacja emocji poprzez zastosowanie odpowiednich technik
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LifestyleComponent;
