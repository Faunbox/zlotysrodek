import Image from "next/image";
import Header from "../typography/headers";

const Info = () => {
  const texts = [
    {
      data: "Wiem, że nie ma jednej gotowej recepty. Każdy z nas sam wypracowuje swoje zasady. Ja tylko słucham i szukam, czego potrzebujesz, żeby pomóc Ci to odnaleźć. Umów się na konsultację i zacznij swoją zmianę.",
    },
    {
      data: "Na problem nadwagi i otyłości patrzę szerzej niż tylko przez pryzmat odżywiania - poszukuję głębszych przyczyn problematycznych zachowań żywieniowych.",
    },
    {
      data: "Czasem to będzie nauka radzenia sobie z trudnymi emocjami, a czasem wprowadzenie stopniowych zmian do diety. Podczas indywidualnych konsultacji pracuję holistycznie. Pomagam wychodzić z błędnego koła odchudzania, uczę jak budować trwałe nawyki żywieniowe i promuję zdrowie psychiczne.",
    },
    {
      data: "Pracuję w duchu Dialogu Motywującego łącząc Dietetykę z Psychodietetyką. Wykorzystuję również narzędzia z Terapii Poznawczo-Behawioralnej (CBT), Terapii Skoncentrowanej na Rozwiązaniach (TSR) oraz Technikami Regulacji Emocji abyś zyskała/zyskał szybsze i trwałe rezultaty.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mx-10 lg:mx-20 my-20 text-green">
      <Header>DODATKOWE INFORMACJE O WSPÓŁPRACY</Header>
      <div className="grid grid-cols-1 gap-4 text-center text-darkGreen px-2 md:px-40 ">
        {texts.map((text) => (
          <div key={text.data.slice(1, 8)} className="relative p-4 text-left">
            <p className="text-large">{text.data}</p>
            <Image
              src={"/images/avocado-ciemne.svg"}
              alt="awokado"
              width={30}
              height={30}
              className="absolute top-0  translate-y-1/2 -left-8 md:-left-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
