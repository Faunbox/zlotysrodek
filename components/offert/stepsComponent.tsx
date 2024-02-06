import Image from "next/image";

const StepsComponent = () => {
  return (
    <section className="flex flex-col mx-60 py-20 md:flex-row text-darkGreen gap-10 text-center">
      <div className="flex flex-col items-center justify-start w-3/12 gap-8">
        <Image
          src={"/images/1.svg"}
          alt={"Jeden svg"}
          width={150}
          height={150}
        />
        <p>
          Umów się na bezpłatną, wstępną konsultację poprzez formularz
          kontaktowy lub mailowo.
        </p>
      </div>
      <div className="w-1/12 pt-[50px]">
        <Image
          src={"/images/strz.svg"}
          alt={"Jeden svg"}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center justify-start w-3/12 gap-8 ">
        <Image
          src={"/images/2.svg"}
          alt={"Jeden svg"}
          width={150}
          height={150}
        />
        <p>
          Wybierz i opłać konsultację lub pakiet (ustalimy to na wstępnej
          konsultacji).
        </p>
      </div>
      <div className="w-1/12 pt-[50px]">
        <Image
          src={"/images/strz.svg"}
          alt={"Jeden svg"}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center justify-start w-3/12 gap-8">
        <Image
          src={"/images/3.svg"}
          alt={"Jeden svg"}
          width={150}
          height={150}
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
