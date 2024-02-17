import FilledButton from "../typography/filledButton";

const CancelationComponent = () => {
  return (
    <div className="mx-auto w-full text-center flex flex-col items-center justify-center my-20 gap-8">
      <h4 className="text-large font-semibold text-green">
        Odwołanie sesji na mniej niż 24 h przed umówionym terminem jest
        traktowane jako spotkanie zrealizowane.
      </h4>
      <FilledButton color="bg-green" text="white">
        Regulamin
      </FilledButton>
    </div>
  );
};

export default CancelationComponent;
