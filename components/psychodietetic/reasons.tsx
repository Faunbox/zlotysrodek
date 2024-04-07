import Image from "next/image";

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
    text: "Czujesz zagubienie w dostępnych informacjach, gdy jedni odradzają a inni wymieniają korzystne właściwości.",
  },
];

const Reasons = () => {
  return (
    <section className="flex flex-col mx-10 pb-20 lg:mx-20 lg:flex-row relative">
      <div className="hidden xl:flex w-6/12">
        <Image
          src={"/images/cooking.jpeg"}
          alt="Gotowanie"
          width={580}
          height={600}
          className="xl:absolute xl:-top-6 xl:-left-[7%]"
        />{" "}
      </div>
      <div className="w-full xl:w-6/12 py-2 lg:pl-14">
        <ul className="text-[22px] font-abhaya">
          {reasons.map((reason) => {
            return (
              <li className="relative" key={reason.title}>
                <Image
                  src={"/images/avocado.svg"}
                  alt="awokado"
                  width={25}
                  height={25}
                  className="absolute top-0 -left-8 md:-left-14"
                />
                <h4 className="font-semibold">{reason.title}</h4>
                <p>{reason.text}</p>
              </li>
            );
          })}
        </ul>{" "}
      </div>
    </section>
  );
};

export default Reasons;
