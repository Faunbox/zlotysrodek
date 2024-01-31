import Header from "../typography/headers";

const Info = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-60 my-20">
      <Header>DODATKOWE INFORMACJE O WSPÓŁPRACY</Header>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-green border-1 p-4 bg-lightGreen bg-opacity-10">
          <p>
            Wiem, że nie ma jednej gotowej recepty. Każdy z nas sam wypracowuje
            swoje zasady. Ja tylko słucham i szukam, czego potrzebujesz, żeby
            pomóc Ci to odnaleźć. Umów się na konsultację i zacznij swoją
            zmianę.
          </p>
        </div>
        <div className="border-green border-1 p-4 bg-lightGreen bg-opacity-10 flex items-center justify-center">
          <p>
            Na problem nadwagi i otyłości patrzę szerzej niż tylko przez pryzmat
            odżywiania - poszukuję głębszych przyczyn problematycznych zachowań
            żywieniowych.
          </p>
        </div>
        <div className="border-green border-1 p-4 bg-lightGreen bg-opacity-10">
          <p>
            Czasem to będzie nauka radzenia sobie z trudnymi emocjami, a czasem
            wprowadzenie stopniowych zmian do diety. Podczas indywidualnych
            konsultacji pracuję holistycznie. Pomagam wychodzić z błędnego koła
            odchudzania, uczę jak budować trwałe nawyki żywieniowe i promuję
            zdrowie psychiczne.
          </p>
        </div>
        <div className="border-green border-1 p-4 bg-lightGreen bg-opacity-10">
          <p>
            Pracuję w duchu Dialogu Motywującego łącząc Dietetykę z
            Psychodietetyką. Wykorzystuję również narzędzia z Terapii
            Poznawczo-Behawioralnej (CBT), Terapii Skoncentrowanej na
            Rozwiązaniach (TSR) oraz Technikami Regulacji Emocji abyś
            zyskała/zyskał szybsze i trwałe rezultaty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
