import Image from "next/image";

const StepsComponent = () => {
  const texts = [
    "Umów się na bezpłatną, wstępną konsultację poprzez formularz kontaktowy lub mailowo.",
    "Wybierz i opłać konsultację lub pakiet (ustalimy to na wstępnej konsultacji).",
    "Skontaktuj się poprzez formularz kontaktowy lub mailowo w celu uzgodnienia dogodnego dla Ciebie terminu spotkań.",
  ];

  return (
    <section className="flex flex-col lg:flex-row mx-10 lg:mx-40 py-20  text-black md:gap-10 text-center items-center md:items-start justify-center text-lg font-tinos">
      {texts.map((text, index) => {
        return (
          <>
            <div
              key={text}
              className="flex flex-col items-center justify-start mx-auto lg:mx-0 lg:w-3/12 2xl:w-2/12 gap-8 "
            >
              <Image
                src={`/images/${index + 1}.svg`}
                alt={"Jeden svg"}
                width={35}
                height={35}
                className="w-3/12 lg:w-full"
              />
              <p className="w-full max-w-[60vw]">{text}</p>
            </div>
            {index < 2 && (
              <div className="w-1/12 py-10 mx-auto lg:mx-0 lg:py-16 xl:py-24 ">
                <Image
                  src={"/images/strz.svg"}
                  alt={"Jeden svg"}
                  width={80}
                  height={80}
                  className="rotate-90 lg:rotate-0"
                />
              </div>
            )}
          </>
        );
      })}
    </section>
  );
};

export default StepsComponent;
