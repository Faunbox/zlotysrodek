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
        <ul className="flex flex-col gap-5 lg:gap-5 2xl:gap-8 mt-16 md:mt-8 lg:pl-10 md:mx-2 font-semibold justify-center items-start text-darkGreen text-large xl:text-xl md:w-7/12 lg:w-8/12 font-abhaya">
          <li className="relative">
            <p>
              Wybór odpowiednich, dobrej jakości produktów spożywczych, z
              których komponuję zbilansowane posiłki
            </p>
            <Image
              src={"/images/avocado.svg"}
              alt="awokado"
              width={25}
              height={25}
              className="absolute top-0 translate-y-1/2 -left-8 md:-left-14"
            />
          </li>
          <li className="relative">
            <p>Umiarkowana aktywność fizyczna wpleciona w codzienne życie</p>
            <Image
              src={"/images/avocado.svg"}
              alt="awokado"
              width={25}
              height={25}
              className="absolute top-0 translate-y-1/2 -left-8 md:-left-14"
            />
          </li>
          <li className="relative">
            <p>Czas spędzony na łonie natury</p>
            <Image
              src={"/images/avocado.svg"}
              alt="awokado"
              width={25}
              height={25}
              className="absolute top-0  -left-8 md:-left-14"
            />
          </li>
          <li className="relative">
            <p>Odpoczynek i regeneracja</p>
            <Image
              src={"/images/avocado.svg"}
              alt="awokado"
              width={25}
              height={25}
              className="absolute top-0  -left-8 md:-left-14"
            />
          </li>
          <li className="relative">
            <p>Utrzymanie rytmu dobowego (rytm dnia i nocy)</p>
            <Image
              src={"/images/avocado.svg"}
              alt="awokado"
              width={25}
              height={25}
              className="absolute top-0 translate-y-1/2 md:translate-y-0 -left-8 md:-left-14"
            />
          </li>
          <li className="relative">
            <p>Pozytywne relacje z bliskimi oraz otaczającymi mnie ludźmi</p>
            <Image
              src={"/images/avocado.svg"}
              alt="awokado"
              width={25}
              height={25}
              className="absolute top-0 translate-y-1/2 -left-8 md:-left-14"
            />
          </li>
          <li className="relative">
            <p>Regulacja emocji poprzez zastosowanie odpowiednich technik</p>
            <Image
              src={"/images/avocado.svg"}
              alt="awokado"
              width={25}
              height={25}
              className="absolute top-0 translate-y-1/2 -left-8 md:-left-14"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LifestyleComponent;
