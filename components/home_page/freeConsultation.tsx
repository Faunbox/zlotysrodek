import Header from "../typography/headers";

const FreeConsultation = () => {
  return (
    <div className="bg-green w-screen pb-32">

    <section className="flex flex-col items-center justify-center gap-2  mx-auto pb-10 px-10 w-full lg:w-8/12 bg-lightGreen border-2 border-white container shadow-lg shadow-black">
      <div className="flex flex-col items-center justify-center pb-2 text-white font-tinos">
        <Header>Bezpłatna wstępna konsultacja</Header>
        <p className=" text-center leading-relaxed w-full font-extralight tracking-wide text-lg pt-4">
          Rozumiem, że możesz mieć wątpliwości zanim zdecydujesz się na dłuższą
          indywidualną współpracę, dlatego pomogę Ci je rozwiać. Zanim
          skorzystasz z mojej pomocy, wypij ze mną kawę online, podczas której
          poznamy się bliżej. W ciągu 30 minut przekonasz się, czy praca ze mną
          może Ci pomóc.
        </p>
      </div>
    </section>
    </div>
  );
};

export default FreeConsultation;
