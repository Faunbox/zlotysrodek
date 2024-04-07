import Link from "next/link";
import FilledButton from "../typography/filledButton";
import { getStatuate } from "@/lib/contentful";

const CancelationComponent = async ({ link }: { link?: string }) => {
  const statuateUrl = await getStatuate();

  return (
    <div className="px-4 md:px-10 w-full lg:w-9/12 flex flex-col lg:flex-row items-center justify-center my-20 gap-8">
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 py-6 shadow-medium w-10/12 ">
        <h5 className="hidden lg:flex font-abhaya text-lightGreen px-4 text-6xl">24h</h5>
        <div className="flex flex-col gap-8 md:gap-0">
          <h4 className="text-large  text-black font-abhaya font-light w-full ">
            Odwołanie sesji na mniej niż 24 h przed umówionym terminem jest
            traktowane jako spotkanie zrealizowane.
          </h4>
          <div className="flex flex-col gap-2 items-center justify-center md:items-end mx-auto md:mx-0">
            <Link
              href={`https:${statuateUrl}`}
              target="_blank"
              rel="noopener"
              className="md:ml-12 w-full md:w-4/12 "
            >
              <FilledButton
                color="bg-darkGreen"
                text="white"
                ariaLabel="Regulamin"
              >
                Regulamin
              </FilledButton>
            </Link>
          </div>
        </div>
      </div>
      <Link href={"/kontakt"} className="w-full lg:w-2/12 flex items-center justify-center md:ml-12 ">
        <FilledButton color="bg-darkGreen" text="white" ariaLabel="Kontakt">
          Formularz kontaktowy
        </FilledButton>
      </Link>
    </div>
  );
};

export default CancelationComponent;
