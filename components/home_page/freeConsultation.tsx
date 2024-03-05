import Link from "next/link";
import FilledButton from "../typography/filledButton";
import Header from "../typography/headers";

const FreeConsultation = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 mt-20  mx-auto pb-10 px-10 w-full lg:w-8/12 bg-green md:rounded-xl md:shadow-lg">
      <div className="flex flex-col items-center justify-center pb-2 text-white font-abhaya">
        <Header>Bezpłatna wstępna konsultacja</Header>
        <p className=" text-center leading-relaxed font-poppins w-full font-light tracking-wide text-lg">
          Rozumiem, że możesz mieć wątpliwości zanim zdecydujesz się na dłuższą
          indywidualną współpracę, dlatego pomogę Ci je rozwiać. Zanim
          skorzystasz z mojej pomocy, wypij ze mną kawę online, podczas której
          poznamy się bliżej. W ciągu 30 minut przekonasz się, czy praca ze mną
          może Ci pomóc.
        </p>
      </div>
      {/* <Link href={"/kontakt"}>
        <FilledButton color="bg-darkGreen" text="white" bold={false}>
          Wiecej informacji
        </FilledButton>
      </Link> */}
    </section>
  );
};

export default FreeConsultation;
