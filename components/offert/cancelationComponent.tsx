import Link from "next/link";
import FilledButton from "../typography/filledButton";
import { getStatuate } from "@/lib/contentful";

const CancelationComponent = async ({ link }: { link?: string }) => {
  const statuateUrl = await getStatuate();

  return (
    <div className="px-4 md:px-10 w-full lg:w-9/12 flex flex-row lg:flex-row items-center justify-center mb-20 gap-8">
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 py-6 border-2 shadow-lg border-darkGreen container ">
        <h5 className="hidden lg:flex font-tinos text-lightGreen px-4 text-6xl">
          24h
        </h5>
        <div className="flex flex-row gap-8 md:gap-0">
          <h4 className="text-large text-black font-tinos font-light w-full">
            Odwołanie sesji na mniej niż 24 h przed umówionym terminem jest
            traktowane jako spotkanie zrealizowane.
          </h4>
          <div className="flex flex-row gap-4 items-center justify-center mx-auto md:mx-0">
            <Link
              href={`https:${statuateUrl}`}
              target="_blank"
              rel="noopener"
              className="md:ml-12 w-full  "
            >
              <FilledButton
                color="bg-darkGreen"
                text="white"
                ariaLabel="Regulamin"
              >
                Regulamin
              </FilledButton>
            </Link>
            <Link
              href={"/kontakt"}
              className="w-full flex items-center justify-center md:ml-2 "
            >
              <FilledButton
                color="bg-darkGreen"
                text="white"
                ariaLabel="Kontakt"
              >
                Formularz kontaktowy
              </FilledButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelationComponent;
