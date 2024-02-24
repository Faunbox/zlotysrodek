import Link from "next/link";
import FilledButton from "../typography/filledButton";
import Header from "../typography/headers";

const FreeConsultation = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 my-20 mx-auto pb-10 px-20 w-full lg:w-8/12 bg-green md:rounded-md">
      <div className="flex flex-col items-center justify-center pb-2 text-white">
        <Header>BEZPŁATNA WSTĘPNA KONSULTACJA</Header>
        <p className=" text-center text-sm leading-relaxed  md:w-8/12">
          Rozumiem, że możesz mieć wątpliwości zanim zdecydujesz się na dłuższą
          indywidualną współpracę, dlatego pomogę Ci je rozwiać. Zanim
          skorzystasz z mojej pomocy, wypij ze mną kawę online, podczas której
          poznamy się bliżej. W ciągu 30 minut przekonasz się, czy praca ze mną
          może Ci pomóc.
        </p>
      </div>
      <Link href={"/kontakt"}>
        <FilledButton color="bg-darkGreen" text="white" bold={false}>
          Wiecej informacji
        </FilledButton>
      </Link>
    </section>
  );
};

export default FreeConsultation;
