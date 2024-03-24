import Image from "next/image";

const StepsComponent = () => {
  return (
    <section className="flex flex-col mx-10 lg:mx-40 py-20 md:flex-row text-darkGreen md:gap-10 text-center items-center md:items-start justify-center text-lg">
      <div className="flex flex-col items-center justify-start md:w-2/12 lg:w-3/12 2xl:w-2/12 gap-8 ">
        <Image
          src={"/images/1.svg"}
          alt={"Jeden svg"}
          width={40}
          height={40}
          className="w-3/12 md:w-full"
        />
        <p className="w-full">
          Umów się na bezpłatną, wstępną konsultację poprzez formularz
          kontaktowy lub mailowo.
        </p>
      </div>
      <div className="w-1/12 py-10 lg:py-16  ">
        <Image
          src={"/images/strz.svg"}
          alt={"Jeden svg"}
          width={100}
          height={100}
          className="rotate-90 md:rotate-0"
        />
      </div>
      <div className="flex flex-col items-center justify-start md:w-2/12 lg:w-3/12 2xl:w-2/12 gap-8">
        <Image
          src={"/images/2.svg"}
          alt={"Jeden svg"}
          width={150}
          height={150}
          className="w-3/12 md:w-full"
        />
        <p>
          Wybierz i opłać konsultację lub pakiet (ustalimy to na wstępnej
          konsultacji).
        </p>
      </div>
      <div className="w-1/12 py-10 lg:py-16  ">
        <Image
          src={"/images/strz.svg"}
          alt={"Jeden svg"}
          width={100}
          height={100}
          className="rotate-90 md:rotate-0"
        />
      </div>
      <div className="flex flex-col items-center justify-start md:w-2/12 lg:w-3/12 2xl:w-2/12 gap-8">
        <Image
          src={"/images/3.svg"}
          alt={"Jeden svg"}
          width={150}
          height={150}
          className="w-3/12 md:w-full"
        />
        <p>
          Skontaktuj się poprzez formularz kontaktowy lub mailowo w celu
          uzgodnienia dogodnego dla Ciebie terminu spotkań.
        </p>
      </div>
    </section>
  );
};

export default StepsComponent;
