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
    <section className="flex flex-col items-center justify-center text-green mt-10 mb-24 px-10 lg:px-20 md:w-9/12 lg:w-full lg:relative">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center lg:items-end lg:justify-center text-white 2xl:w-9/12">
        <div className="bg-offertGreen flex flex-col gap-10 order-2 lg:order-1 p-8 items-center justify-center w-full lg:w-3/12 text-center rounded-lg ">
          <p className=" px-3 font-extralight text-md font-poppins">
            {prices.pakiet4OpisOferty}
          </p>
          <div className="flex flex-col items-center justify-center font-abhaya">
            <p className="text-xl px-6 font-abhaya">
              PAKIET KONSULTACJI ON-LINE 4 SPOTKAŃ
            </p>
            <p className="text-2xl px-6 font-abhaya">
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
          className={`bg-green order-1 lg:order-2 flex flex-col gap-8 ${
            !title && "pt-8"
          } pb-8 px-8 md:pb-8 items-center justify-center w-full lg:w-3/12 mb-10 rounded-lg `}
        >
          {title && <Header>Oferta</Header>}
          <ul className="flex flex-col list-disc text-left font-extralight font-poppins text-md">
            <li>Spotkamy się na 50 min </li>
            <li>Przeanalizujemy Twój przypadek</li>{" "}
            <li>Opracujemy plan małych kroków</li>
            <li>Będziemy monitorować Twoje postępy</li>{" "}
            <li>Dostaniesz moje wsparcie</li>
          </ul>
          <div className="flex flex-col items-center justify-center text-center font-abhaya text-xl">
            <p className="text-lg px-6 font-abhaya">POJEDYNCZA KONSULTACJA</p>
            <p className="text-2xl px-6 font-abhaya">
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

        <div className="bg-offertGreen order-3 lg:order-3 flex flex-col gap-8 p-8 items-center justify-center w-full lg:w-3/12 rounded-lg ">
          <p className="px-6 font-extralight text-md font-poppins">
            {prices.pakiet8OpisOferty}
          </p>
          <div className="flex flex-col items-center justify-center text-center font-abhaya text-xl">
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
  );
};

export default Offert;
