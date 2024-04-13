import Image from "next/image";
import FilledButton from "../typography/filledButton";
import Link from "next/link";

const BenefitsComponent = () => {
  const benefits = [
    {
      title: "Umówienie spotkania",
      text: `Aby zarezerwować termin możesz:`,
      text2: "- wykupić konsultację na stronie (link) lub",
      text3:
        "- dokonać wpłaty na dane: DBS Dorota Sojecka nr konta (mBank): 94 1140 2004 0000 3002 3009 8288. W tytule wpisz: swoje imię i nazwisko, datę i godzinę konsultacji",
    },
    {
      title: "Oszczędność czasu",
      text: "Nie tracisz czasu na dojazdy i rozmawiasz w wygodnym i bezpiecznym dla Ciebie miejscu.",
    },
    {
      title: "Stały kontakt",
      text: "Obecnie konsultacje prowadzę zdalnie. Spotykamy się za pomocą komunikatorów: Google Meet, Skype lub WhatsApp.",
    },
  ];

  return (
    <div className="bg-green w-screen font-tinos">
      <div className="mx-10 lg:mx-auto lg:w-10/12 flex items-center justify-center mt-10 mb-20 text-white container bg-lightGreen border-2 border-white py-5">
        <ul className=" flex flex-row gap-8 w-full items-center justify-center text-large">
          <li className="w-1/3 flex flex-col items-center justify-center text-center px-14 pt-32">
            <Image
              src={"/images/zegar.svg"}
              height={100}
              width={100}
              alt="zegar"
              className="pb-6"
            />
            <h4 className="text-2xl mb-2">Oszczędność czasu</h4>
            <p>
              Nie tracisz czasu na dojazdy i rozmawiasz w wygodnym i bezpiecznym
              dla Ciebie miejscu.
            </p>
          </li>
          <li className="w-1/3 flex flex-col items-center justify-center text-center px-10 mb-40">
            <h4 className="text-3xl underline mb-2">Umówienie spotkania</h4>
            <p>Aby zarezerwować termin możesz:</p>
            <p>- wykupić konsultację na stronie lub</p>
            <p>
              - dokonać wpłaty na dane: DBS Dorota Sojecka nr konta (mBank): 94
              1140 2004 0000 3002 3009 8288. W tytule wpisz: swoje imię i
              nazwisko, datę i godzinę konsultacji.
            </p>
            <Link href="/kontakt" className="pt-4">
              <FilledButton>Kontakt</FilledButton>
            </Link>
          </li>
          <li className="w-1/3 flex flex-col items-center justify-center text-center px-14 pt-32">
            <Image
              src={"/images/sluchawka1.svg"}
              height={100}
              width={100}
              alt="zegar"
              className="pb-6"
            />
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
