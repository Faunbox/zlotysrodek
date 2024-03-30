import Image from "next/image";

const LifestyleComponent = () => {
  return (
    <div className="lg:mx-20 mx-10 mb-10 lg:mb-20 relative">
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-20 items-center justify-center lg:justify-end">
        <div className="hidden lg:flex lg:w-10/12">
          <Image
            src={"/images/sadzonka.jpeg"}
            alt="sadzonka"
            width={480}
            height={900}
            className="lg:mr-20 object-cover lg:absolute lg:-top-5 "
          />
        </div>
        <ul className="flex flex-col gap-3 lg:gap-5 2xl:gap-8 mt-8 lg:pl-10 md:mx-2 font-semibold justify-center items-start text-darkGreen list-image-avocado text-large xl:text-xl md:w-7/12 lg:w-8/12 font-abhaya">
          <li className="marker:text-[3.3em] marker:list-item tracking-wide">
            Wybór odpowiednich, dobrej jakości produktów spożywczych, z których
            komponuję zbilansowane posiłki
          </li>
          <li className="marker:text-[3.3em] marker:mt-4">
            Umiarkowana aktywność fizyczna wpleciona w codzienne życie
          </li>
          <li className="marker:text-[3.3em]">Czas spędzony na łonie natury</li>
          <li className="marker:text-[3.3em]">Odpoczynek i regeneracja</li>
          <li className="marker:text-[3.3em]">
            Utrzymanie rytmu dobowego (rytm dnia i nocy)
          </li>
          <li className="marker:text-[3.3em]">
            Pozytywne relacje z bliskimi oraz otaczającymi mnie ludźmi
          </li>
          <li className="marker:text-[3.3em]">
            Regulacja emocji poprzez zastosowanie odpowiednich technik
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LifestyleComponent;
