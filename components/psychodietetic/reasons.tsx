import Image from "next/image";
import ReasonsText from "./reasonsText";

const reasons = [
  {
    title: "Dieta nie pomaga?",
    text: "Próbujesz kolejnych diet i nie osiągasz lub nie utrzymujesz zadawalających efektów?",
  },
  {
    title: "Złe nawyki?",
    text: "Męczą Cię nieprawidłowe nawyki żywieniowe, takie jak podjadanie, zajadanie stresu czy nudy.",
  },
  {
    title: "Zaburzenia odżywiania??",
    text: "Cierpisz na kompulsywne objadanie (BED), anoreksję lub bulimię.",
  },
  {
    title: "Choroba?",
    text: "Zdiagnozowano u Ciebie chorobę tarczycy, insulinooporność lub masz nieprawidłowe wyniki badań laboratoryjnych.",
  },
  {
    title: "Tryb życia?",
    text: "Ze względu na tryb życia lub pracy nie potrafisz wprowadzić i utrzymać prawidłowego sposobu odżywiania.",
  },
  {
    title: "Nadmiar informacji?",
    text: "Czujesz zagubienie w dostępnych informacjach, gdy jedni odradzają, a inni wymieniają korzystne właściwości.",
    last: true,
  },
];

const Reasons = () => {
  return (
    <div className="mx-10 lg:mx-20 pb-10 lg:pb-32 pt-4 w-screen bg-green border-b-1 lg:border-0 border-white">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center container w-8/12 max-w-[1200px] font-tinos">
        <div className="hidden xl:flex xl:w-6/12 mt-4">
          <Image
            src={"/images/cooking.jpeg"}
            alt="gotowanie"
            width={540}
            height={750}
            className="border-2 border-white mt-6"
            loading="lazy"
          />
        </div>
        <ReasonsText reasons={reasons} />
      </div>
    </div>
  );
};

export default Reasons;
