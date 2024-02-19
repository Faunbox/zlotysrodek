import FilledButton from "../typography/filledButton";
import Header from "../typography/headers";

const Offert = () => {
  return (
    <section className="flex flex-col items-center justify-center text-green my-10 mx-10 md:w-9/12">
      <Header>Oferta</Header>
      <div className="flex flex-col lg:flex-row gap-20 items-center justify-center text-white">
        <div className="bg-offertGreen flex flex-col gap-10 order-2 lg:order-1 p-10 items-center justify-center w-full text-center">
          <p className="text-sm px-6 font-light">
            Kupując pakiet 4 konsultacji oszczędzasz 80 zł, płacąc za spotkanie
            140 zł.
          </p>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg px-6">
              PAKIET KONSULTACJI ON-LINE 4 SPOTKANIA
            </p>
            <p className="text-lg px-6 font-semibold">560 ZŁ</p>
          </div>
          <FilledButton>KUP PAKIET KONSULTACJI</FilledButton>
        </div>

        <div className="bg-green order-1 lg:order-2 flex flex-col gap-10 p-10 items-center justify-center w-full">
          <ul className="flex flex-col text-sm list-disc gap-2 text-left font-light">
            <li>Spotkamy się na 50 min </li>
            <li>Przeanalizujemy Twój przypadek</li>{" "}
            <li>Opracujemy plan małych kroków</li>
            <li>Będziemy monitorować Twoje postępy</li>{" "}
            <li>Dostaniesz moje wsparcie</li>
          </ul>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg px-6">POJEDYNCZA KONSULTACJA</p>
            <p className="text-lg px-6 font-semibold">160 ZŁ</p>
          </div>
          <FilledButton>KUP KONSULTACJĘ</FilledButton>
        </div>

        <div className="bg-offertGreen order-3 lg:order-3 flex flex-col gap-10 p-10 items-center justify-center w-full">
          <p className="text-sm px-6 font-light">
            Kupując pakiet 8 konsultacji oszczędzasz aż 320 zł, płacąc za
            spotkanie tylko 120 zł.
          </p>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg px-6">PAKIET KONSULTACJI ON-LINE 8 SPOTKAŃ</p>
            <p className="text-lg px-6 font-semibold">960 ZŁ</p>
          </div>
          <FilledButton>KUP PAKIET KONSULTACJI</FilledButton>
        </div>
      </div>
    </section>
  );
};

export default Offert;
