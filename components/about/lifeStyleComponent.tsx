import Image from "next/image";

const LifestyleComponent = () => {
  return (
    <div className="mx-60">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-7/12">
          <Image
            src={"/images/sadzonka.jpeg"}
            alt="sadzonka"
            width={600}
            height={1160}
          />
        </div>
        <ul className="flex flex-col gap-5 font-semibold justify-center items-start text-green list-image-avocado text-large w-5/12 ">
          <li className="marker:text-[2.25em] marker:list-item">
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
