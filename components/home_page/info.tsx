const Info = () => {
  const texts = {
    first: {
      data: "Wiem, że nie ma jednej gotowej recepty. Każdy z nas sam wypracowuje swoje zasady. Ja tylko słucham i szukam, czego potrzebujesz, żeby pomóc Ci to odnaleźć.",
      span: "Umów się na konsultację i zacznij swoją zmianę.",
    },
    row: [
      {
        data: "Pracuję w duchu Dialogu Motywującego łącząc Dietetykę z Psychodietetyką. Wykorzystuję również narzędzia z Terapii Poznawczo-Behawioralnej (CBT), Terapii Skoncentrowanej na Rozwiązaniach (TSR) oraz Technikami Regulacji Emocji abyś zyskała/zyskał szybsze i trwałe rezultaty.",
      },
      {
        data: "Na problem nadwagi i otyłości patrzę szerzej niż tylko przez pryzmat odżywiania - poszukuję głębszych przyczyn problematycznych zachowań żywieniowych.",
      },
      {
        data: "Czasem to będzie nauka radzenia sobie z trudnymi emocjami, a czasem wprowadzenie stopniowych zmian do diety. Podczas indywidualnych konsultacji pracuję holistycznie. Pomagam wychodzić z błędnego koła odchudzania, uczę jak budować trwałe nawyki żywieniowe i promuję zdrowie psychiczne.",
      },
    ],
  };

  return (
    <div className=" flex flex-col items-center justify-center font-tinos md:bg-linear w-screen relative after:bg-green after:h-full after:md:h-1/2 after:absolute after:bottom-0 after:right-0 after:left-0 after:z-10">
      <section className="flex flex-col items-center justify-center w-10/12 md:w-full 2xl:w-8/12 my-20 mx-10 lg:mx-20 text-black gap-8 container bg-white border-2 border-darkGreen z-20 shadow-lg shadow-black">
        <div className="flex flex-col gap-5 text-center lg:pt-6 p-6 md:p-14">
          {/* @ts-ignore */}
          <div className="flex flex-col">
            <h3 className="text-darkGreen font-semibold text-xl">
              {texts?.first.data}
            </h3>
            <p className=" text-darkGreen font-semibold text-xl underline">
              {texts?.first.span}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x text-black text-large pt-8 md:pt-20 md:*:h-[50%]">
            {texts.row.map((text) => {
              return (
                <p key={text.data.slice(0.5)} className="w-full md:w-1/3 h-full py-10 md:py-0 md:px-10">
                  {text.data}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
