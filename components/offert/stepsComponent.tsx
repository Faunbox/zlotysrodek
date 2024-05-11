import Image from "next/image";
import React from "react";
import StepsArrow from "./stepsArrow";

const StepsComponent = () => {
  const texts = [
    "Umów się na bezpłatną, wstępną konsultację poprzez formularz kontaktowy lub mailowo.",
    "Wybierz i opłać konsultację lub pakiet (ustalimy to na wstępnej konsultacji).",
    "Skontaktuj się poprzez formularz kontaktowy lub mailowo w celu uzgodnienia dogodnego dla Ciebie terminu spotkań.",
  ];

  return (
    <section className="text-black mx-10 flex flex-col items-center justify-center py-10 lg:py-20 text-center font-tinos text-lg md:items-start md:gap-10 lg:mx-40 lg:flex-row">
      {texts.map((text, index) => {
        return (
          <React.Fragment key={index + Math.random()}>
            <div className="mx-auto flex flex-col items-center justify-start gap-8 lg:mx-0 lg:w-3/12 2xl:w-2/12">
              <Image
                src={`/images/${index + 1}.svg`}
                alt={"Jeden svg"}
                width={50}
                height={50}
                className="xl:w-[100px] xl:h-[100px]"
              />
              <p className="w-full max-w-[60vw]">{text}</p>
            </div>
            {index < 2 && (
              <StepsArrow />
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default StepsComponent;
