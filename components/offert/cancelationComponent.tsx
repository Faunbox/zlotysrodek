import Link from "next/link";
import FilledButton from "../typography/filledButton";

const CancelationComponent =  ({link}: {link:string}) => {

  

  return (
    <div className="mx-auto w-full text-center flex flex-col items-center justify-center my-20 gap-8">
      <h4 className="text-large font-semibold text-green">
        Odwołanie sesji na mniej niż 24 h przed umówionym terminem jest
        traktowane jako spotkanie zrealizowane.
      </h4>
      <Link href={`https:${link}`} target="_blank" rel="noopener">
        <FilledButton color="bg-green" text="white">
          Regulamin
        </FilledButton>
      </Link>
    </div>
  );
};

export default CancelationComponent;
