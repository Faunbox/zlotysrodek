
import FilledButton from "../typography/filledButton";
import Link from "next/link";
import BenefitsImage from "./benefitsImage";

const BenefitsComponent = () => {
  return (
    <div className="bg-green w-screen font-tinos">
      <div className="w-full lg:mx-auto lg:w-10/12 flex items-center justify-center mt-10 lg:mb-20 text-white container bg-lightGreen border-2 border-white pt-5">
        <ul className="flex flex-col lg:flex-row gap-8 w-full items-center justify-center text-large pb-10">
          <li className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center px-14 lg:pt-20">
            <BenefitsImage src="/images/zegar.svg" />
            <h4 className="text-2xl mb-2">Oszczędność czasu</h4>
            <p>
              Nie tracisz czasu na dojazdy i rozmawiasz w wygodnym i bezpiecznym
              dla Ciebie miejscu.
            </p>
          </li>
          <li className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center px-10 lg:mb-40 lg:mt-8">
            <h4 className="text-3xl underline mb-2">Umówienie spotkania</h4>
            <p>Aby zarezerwować termin możesz:</p>
            <p>- wykupić konsultację na stronie lub</p>
            <p>
              - dokonać wpłaty na dane: DBS Dorota Sojecka nr konta (mBank):{" "}
              <br />
              94 1140 2004 0000 3002 3009 8288. <br />W tytule wpisz: swoje imię
              i nazwisko, datę i godzinę konsultacji.
            </p>
            <Link href="/kontakt" className="pt-8">
              <FilledButton>Kontakt</FilledButton>
            </Link>
          </li>
          <li className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center px-14 lg:py-20">
            <BenefitsImage src="/images/sluchawka1.svg" />
            <h4 className="text-2xl mb-2">Stały kontakt</h4>
            <p>
              Obecnie konsultacje prowadzę zdalnie. Spotykamy się za pomocą
              komunikatorów: Google Meet, Skype lub WhatsApp.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsComponent;
