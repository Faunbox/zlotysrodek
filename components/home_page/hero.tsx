import Image from "next/image";
import HeroArrowss from "./heroArrow";
import HeroInfo from "./heroInfo";

const HeroSection = () => {
  return (
    <div className="bg-lightGreen w-screen">
      <div className="w-screen max-w-[1700px] h-full lg:h-[80vh] max-h-[600px] 2xl:max-h-[700px] md:my-2 xl:my-0 pt-6 pb-4 2xl:px-[7%] flex justify-center items-center z-10 text-white 2xl:mx-auto">
        <div className="flex flex-row relative lg:gap-10 items-center mx-auto justify-center container w-full lg:w-9/12 2xl:w-10/12 border-2 border-white shadow-lg shadow-black ">
          <HeroInfo />
          <div className="hidden w-0 lg:w-3/12 md:flex items-center justify-center">
            <Image
              src={"/images/hero-image.png"}
              alt="psychodietetyk"
              width={355}
              height={600}
              className="hidden lg:flex absolute bottom-[265px] translate-y-[50%]"
            />
          </div>
        </div>
      </div>
      <HeroArrowss />
    </div>
  );
};

export default HeroSection;
