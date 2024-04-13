"use client";
import { useSession } from "next-auth/react";
import FilledButton from "../typography/filledButton";
import Header from "../typography/headers";
import { Prices } from "@/app/page";
import Link from "next/link";

const Offert = ({
  title = false,
  prices,
}: {
  title?: boolean;
  prices: Prices;
}) => {
  const { data: session } = useSession();
  const email: string = session?.user?.email!;

  return (
    <div className="w-screen bg-green">

    
    <section className="flex flex-col items-center justify-center container text-green mt-10 mb-16 px-10 lg:px-20 md:w-9/12 lg:w-full lg:relative font-tinos">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center lg:items-center lg:justify-center text-white 2xl:w-11/12">
        <div className="bg-lightGreen flex flex-col gap-10 order-2 lg:order-1 p-8 items-center justify-center w-full lg:w-3/12 text-center border-2 border-white shadow-lg shadow-black">
          <p className=" px-3 font-extralight text-md">
            {prices.pakiet4OpisOferty}
          </p>
          <div className="flex flex-col items-center justify-center ">
            <p className="text-xl px-6 ">
              PAKIET KONSULTACJI ON-LINE 4 SPOTKAŃ
            </p>
            <p className="text-2xl px-6 ">
              {prices.zestaw3Konsultacji as string}
            </p>
          </div>
          {email ? (
            <a
              href={`${
                prices.linkDo4Konsultacji
              }?prefilled_email=${encodeURIComponent(email)}`}
            >
              <FilledButton ariaLabel="Kup konsultację">
                KUP PAKIET KONSULTACJI
              </FilledButton>
            </a>
          ) : (
            <Link href={"/logowanie"}>
              <FilledButton ariaLabel="Logowanie">
                Zaloguj się, by kupić konsultacje
              </FilledButton>
            </Link>
          )}
        </div>

        <div
          className={`bg-lightGreen order-1 text-center lg:order-2 shadow-lg shadow-black flex flex-col gap-8 ${
            !title && "pt-8"
          } pb-8 px-8 md:pb-8 items-center justify-center w-full lg:w-3/12 mb-10 border-2 border-white `}
        >
          {title && <Header>Oferta</Header>}
          <ul className="flex flex-col list-disc text-left font-extralight text-md">
            <li>Spotkamy się na 50 min </li>
            <li>Przeanalizujemy Twój przypadek</li>{" "}
            <li>Opracujemy plan małych kroków</li>
            <li>Będziemy monitorować Twoje postępy</li>{" "}
            <li>Dostaniesz moje wsparcie</li>
          </ul>
          <div className="flex flex-col items-center justify-center text-center  text-xl">
            <p className="text-lg px-6 ">POJEDYNCZA KONSULTACJA</p>
            <p className="text-2xl px-6 ">
              {prices.konsultacja as string}
            </p>
          </div>
          {email ? (
            <a
              href={`${
                prices.linkDoJednejKonsultacji
              }?prefilled_email=${encodeURIComponent(email)}`}
            >
              <FilledButton ariaLabel="Kup konsultację">
                KUP KONSULTACJĘ
              </FilledButton>
            </a>
          ) : (
            <Link href={"/logowanie"}>
              <FilledButton ariaLabel="Logowanie">
                Zaloguj się, by kupić konsultacje
              </FilledButton>
            </Link>
          )}
        </div>

        <div className="bg-lightGreen text-center order-3 lg:order-3 flex flex-col gap-8 p-8 items-center justify-center w-full lg:w-3/12 border-2 border-white shadow-lg shadow-black">
          <p className="px-6 font-extralight text-md">
            {prices.pakiet8OpisOferty}
          </p>
          <div className="flex flex-col items-center justify-center text-center  text-xl">
            <p className="text-lg px-6">PAKIET KONSULTACJI ON-LINE 8 SPOTKAŃ</p>
            <p className="text-2xl px-6 ">
              {prices.zestaw10Konsultacji as string}
            </p>
          </div>
          {email ? (
            <a
              href={`${
                prices.linkDo8Konsultacji
              }?prefilled_email=${encodeURIComponent(email)}`}
            >
              <FilledButton ariaLabel="Kup konsultację">
                KUP PAKIET KONSULTACJI
              </FilledButton>
            </a>
          ) : (
            <Link href={"/logowanie"}>
              <FilledButton ariaLabel="Logowanie">
                Zaloguj się, by kupić konsultacje
              </FilledButton>
            </Link>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Offert;
