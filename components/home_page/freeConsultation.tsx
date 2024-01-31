import FilledButton from "../typography/filledButton";
import Header from "../typography/headers";

const FreeConsultation = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 my-20 w-9/12">
      <div className="flex flex-col items-center justify-center border-1 border-lightGreen pb-20 text-green">
        <Header>BEZPŁATNA WSTĘPNA KONSULTACJA</Header>
        <p className="px-20 text-center text-sm">
          Rozumiem, że możesz mieć wątpliwości zanim zdecydujesz się na dłuższą
          indywidualną współpracę, dlatego pomogę Ci je rozwiać. Zanim
          skorzystasz z mojej pomocy, wypij ze mną kawę online, podczas której
          poznamy się bliżej. W ciągu 30 minut przekonasz się, czy praca ze mną
          może Ci pomóc.
        </p>
      </div>
      <FilledButton color="green" text="white" bold={false}>
        Wiecej informacji
      </FilledButton>
    </section>
  );
};

export default FreeConsultation;
