import Link from "next/link";
import FilledButton from "../typography/filledButton";
import { getStatuate } from "@/lib/contentful";

const CancelationComponent = async ({ link }: { link?: string }) => {
  const statuateUrl = await getStatuate();

  return (
    <div className="px-10 w-9/12 flex flex-col md:flex-row items-center justify-center my-20 gap-8">
      <h4 className="text-large  text-green font-poppins font-light w-full md:w-8/12">
        Odwołanie sesji na mniej niż 24 h przed umówionym terminem jest
        traktowane jako spotkanie zrealizowane.
      </h4>
      <div className="flex flex-col gap-2">
        <Link
          href={`https:${statuateUrl}`}
          target="_blank"
          rel="noopener"
          className="md:ml-12 w-full md:w-4/12 "
        >
          <FilledButton color="bg-darkGreen" text="white">
            Regulamin
          </FilledButton>
        </Link>
        <Link href={"/kontakt"} className="md:ml-12 w-full md:w-4/12 ">
          <FilledButton color="bg-darkGreen" text="white">
            Kontakt
          </FilledButton>
        </Link>
      </div>
    </div>
  );
};

export default CancelationComponent;
