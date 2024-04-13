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
    text: "Czujesz zagubienie w dostępnych informacjach, gdy jedni odradzają, a inni wymieniają korzystne właściwości.",
    last: true,
  },
];

const Reasons = () => {
  return (
    <div className="mx-10 lg:mx-20 pb-32 w-screen bg-green">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center container w-8/12 font-tinos">
        <div className="hidden lg:flex lg:w-6/12 mt-4">
          <Image
            src={"/images/cooking.jpeg"}
            alt="gotowanie"
            width={540}
            height={750}
            className="border-2 border-white mt-6"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center text-white mt-4 lg:w-6/12 px-10">
          <h4 className="text-3xl underline w-full">Powody konsultacji:</h4>
          <ul className="flex flex-col gap-5 2xl:gap-8 mt-4 justify-center items-start text-large xl:text-xl mr-20">
            {reasons.map((reason) => {
              return (
                <li className="relative " key={reason.title}>
                  <h4 className="font-semibold">{reason.title}</h4>
                  <p
                    className={`${
                      !reason.last &&
                      "after:w-1/2 after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-3"
                    }`}
                  >
                    {reason.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
