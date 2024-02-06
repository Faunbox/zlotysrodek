import FilledButton from "../typography/filledButton";

const OptionsComponent = ({ email }: { email: string }) => {
  return (
    <section className="flex flex-col items-center justify-center text-white mx-auto mt-20 w-9/12">
      <div className="flex flex-row gap-20 items-center justify-center">
        <div className="bg-offertGreen flex flex-col gap-10 p-10 items-center justify-center w-full text-center">
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
          <a
            href={`https://buy.stripe.com/test_dR62b43vtc2i7yo6op?prefilled_email=${encodeURIComponent(
              email
            )}`}
          >
            <FilledButton>KUP PAKIET KONSULTACJI</FilledButton>
          </a>
        </div>

        <div className="bg-green  flex flex-col gap-10 p-10 lg:mb-24 items-center justify-center w-full">
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
          <a
            href={`https://buy.stripe.com/test_dR62b43vtc2i7yo6op?prefilled_email=${encodeURIComponent(
              email
            )}`}
          >
            <FilledButton>KUP KONSULTACJĘ</FilledButton>
          </a>
        </div>

        <div className="bg-offertGreen  flex flex-col gap-10 p-10 items-center justify-center w-full">
          <p className="text-sm px-6 font-light">
            Kupując pakiet 8 konsultacji oszczędzasz aż 320 zł, płacąc za
            spotkanie tylko 120 zł.
          </p>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg px-6">PAKIET KONSULTACJI ON-LINE 8 SPOTKAŃ</p>
            <p className="text-lg px-6 font-semibold">960 ZŁ</p>
          </div>
          <a
            href={`https://buy.stripe.com/test_dR62b43vtc2i7yo6op?prefilled_email=${encodeURIComponent(
              email
            )}`}
          >
            <FilledButton>KUP PAKIET KONSULTACJI</FilledButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OptionsComponent;
