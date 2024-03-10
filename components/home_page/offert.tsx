import { getConsultationPrices } from "@/lib/contentful";
import FilledButton from "../typography/filledButton";
import Header from "../typography/headers";

const Offert = async ({ title = false }: { title?: boolean }) => {
  const consultationPrices = await getConsultationPrices();

  return (
    <section className="flex flex-col items-center justify-center  text-green my-10 mx-10 md:w-9/12 lg:relative">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center lg:items-end lg:justify-end text-white">
        <div className="bg-offertGreen flex flex-col gap-10 order-2 lg:order-1 text-lg p-8 items-center justify-center w-full text-center rounded-lg font-poppins">
          <p className=" px-6 font-extralight">
            Kupując pakiet 4 konsultacji oszczędzasz 80 zł, płacąc za spotkanie
            140 zł.
          </p>
          <div className="flex flex-col items-center justify-center font-abhaya">
            <p className="text-lg px-6">PAKIET KONSULTACJI ON-LINE 4 SPOTKAŃ</p>
            <p className="text-lg px-6">
              {consultationPrices.zestaw3Konsultacji as string}
            </p>
          </div>
          <FilledButton>KUP PAKIET KONSULTACJI</FilledButton>
        </div>

        <div
          className={`bg-green order-1 lg:order-2 flex flex-col ${
            title ? "gap-5" : "gap-10"
          } p-8 items-center justify-center w-full mb-10 rounded-lg font-poppins`}
        >
          {title && <Header>Oferta</Header>}
          <ul className="flex flex-col list-disc gap-2 text-left font-extralight font-poppins text-lg">
            <li>Spotkamy się na 50 min </li>
            <li>Przeanalizujemy Twój przypadek</li>{" "}
            <li>Opracujemy plan małych kroków</li>
            <li>Będziemy monitorować Twoje postępy</li>{" "}
            <li>Dostaniesz moje wsparcie</li>
          </ul>
          <div className="flex flex-col items-center justify-center text-center font-abhaya">
            <p className="text-lg px-6">POJEDYNCZA KONSULTACJA</p>
            <p className="text-lg px-6 ">
              {consultationPrices.konsultacja as string}
            </p>
          </div>
          <FilledButton>KUP KONSULTACJĘ</FilledButton>
        </div>

        <div className="bg-offertGreen order-3 lg:order-3 flex flex-col gap-10 p-8 items-center justify-center w-full rounded-lg font-poppins">
          <p className="px-6 font-light text-lg">
            Kupując pakiet 8 konsultacji oszczędzasz aż 320 zł, płacąc za
            spotkanie tylko 120 zł.
          </p>
          <div className="flex flex-col items-center justify-center text-center font-abhaya">
            <p className="text-lg px-6">PAKIET KONSULTACJI ON-LINE 8 SPOTKAŃ</p>
            <p className="text-lg px-6 ">
              {consultationPrices.zestaw10Konsultacji as string}
            </p>
          </div>
          <FilledButton>KUP PAKIET KONSULTACJI</FilledButton>
        </div>
      </div>
    </section>
  );
};

export default Offert;
