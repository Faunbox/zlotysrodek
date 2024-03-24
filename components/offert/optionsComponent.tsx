"use client";
import { useSession } from "next-auth/react";
import FilledButton from "../typography/filledButton";

const OptionsComponent = ({
  prices,
}: {
  prices: {
    konsultacja: string;
    zestaw3Konsultacji: string;
    zestaw10Konsultacji: string;
    tytul: string;
  };
}) => {
  const { data: session } = useSession();
  const email: string = session?.user?.email!;

  return (
    <section className="flex flex-col items-center justify-center text-white my-20 mx-10 md:mx-auto lg:w-9/12">
      <div className="flex flex-col lg:flex-row gap-20 items-center justify-center">
        <div className="bg-offertGreen order-2 lg:order-none flex flex-col gap-10 p-10 items-center justify-center w-full text-center">
          <p className="text-md px-6 font-light font-poppins">
            Kupując pakiet 4 konsultacji oszczędzasz 80 zł, płacąc za spotkanie
            140 zł.
          </p>
          <div className="flex flex-col items-center justify-center font-abhaya">
            <p className="text-lg px-6">
              PAKIET KONSULTACJI ON-LINE 4 SPOTKANIA
            </p>
            <p className="text-lg px-6 font-semibold font-abhaya">
              {prices.zestaw3Konsultacji}
            </p>
          </div>
          <a
            href={`https://buy.stripe.com/test_dR62b43vtc2i7yo6op?prefilled_email=${encodeURIComponent(
              email
            )}`}
          >
            <FilledButton>KUP PAKIET KONSULTACJI</FilledButton>
          </a>
        </div>

        <div className="bg-green flex flex-col gap-10 p-10  order-1 lg:order-none items-center justify-center w-full">
          <ul className="flex flex-col list-disc gap-1 text-left font-poppins font-extralight">
            <li>Spotkamy się na 50 min </li>
            <li>Przeanalizujemy Twój przypadek</li>{" "}
            <li>Opracujemy plan małych kroków</li>
            <li>Będziemy monitorować Twoje postępy</li>{" "}
            <li>Dostaniesz moje wsparcie</li>
          </ul>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg px-6 font-abhaya">POJEDYNCZA KONSULTACJA</p>
            <p className="text-lg px-6 font-semibold font-abhaya">
              {prices.konsultacja}
            </p>
          </div>
          <a
            href={`https://buy.stripe.com/test_dR62b43vtc2i7yo6op?prefilled_email=${encodeURIComponent(
              email
            )}`}
          >
            <FilledButton>KUP KONSULTACJĘ</FilledButton>
          </a>
        </div>

        <div className="bg-offertGreen order-3 lg:order-none  flex flex-col gap-10 p-10 items-center justify-center w-full">
          <p className="text-md px-6 font-light font-poppins">
            Kupując pakiet 8 konsultacji oszczędzasz aż 320 zł, płacąc za
            spotkanie tylko 120 zł.
          </p>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg px-6 font-abhaya">
              PAKIET KONSULTACJI ON-LINE 8 SPOTKAŃ
            </p>
            <p className="text-lg px-6 font-semibold font-abhaya">
              {prices.zestaw10Konsultacji}
            </p>
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
