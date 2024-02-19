import Image from "next/image";

const LifestyleComponent = () => {
  return (
    <div className="lg:mx-20 mb-10 lg:mb-20">
      <div className="flex flex-col md:flex-row gap-20 relative">
        <div className="md:w-7/12 lg:w-5/12">
          <Image
            src={"/images/sadzonka.jpeg"}
            alt="sadzonka"
            width={400}
            height={800}
            className="lg:mr-20 object-scale-down lg:absolute lg:-top-10"
          />
        </div>
        <ul className="flex flex-col gap-3 mt-10 mx-10 md:mx-2 font-semibold justify-center items-start text-green list-image-avocado text-large md:w-6/12 ">
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
