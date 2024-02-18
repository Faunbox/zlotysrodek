import Image from "next/image";

const Reasons = () => {
  return (
    <section className="flex flex-col mx-10 pb-10 lg:mx-20 lg:flex-row relative">
      <div className="hidden lg:flex w-6/12">
        <Image
          src={"/images/cooking.jpeg"}
          alt="Gotowanie"
          width={450}
          height={600}
          className="lg:absolute lg:-top-10"
        />{" "}
      </div>
      <div className="lg:w-6/12 py-5 lg:pl-14">
        <ul className="list-image-avocado">
          <li className="marker:text-[2.25em] marker:list-item tracking-wide">
            <h4 className="font-semibold">Dieta nie pomaga?</h4>
            <p>
              Próbujesz kolejnych diet i nie osiągasz lub nie utrzymujesz
              zadawalających efektów?
            </p>
          </li>
          <li className="marker:text-[2.25em] marker:list-item tracking-wide">
            <h4 className="font-semibold">Złe nawyki?</h4>
            <p>
              Męczą Cię nieprawidłowe nawyki żywieniowe, takie jak podjadanie,
              zajadanie stresu czy nudy.
            </p>
          </li>
          <li className="marker:text-[2.25em] marker:list-item tracking-wide">
            <h4 className="font-semibold">Zaburzenia odżywiania?</h4>
            <p>
              Cierpisz na kompulsywne objadanie (BED), anoreksję lub bulimię.
            </p>
          </li>
          <li className="marker:text-[2.25em] marker:list-item tracking-wide">
            <h4 className="font-semibold">Choroba?</h4>
            <p>
              Zdiagnozowano u Ciebie chorobę tarczycy, insulinooporność lub masz
              nieprawidłowe wyniki badań laboratoryjnych.
            </p>
          </li>
          <li className="marker:text-[2.25em] marker:list-item tracking-wide">
            <h4 className="font-semibold">Tryb życia?</h4>
            <p>
              Ze względu na tryb życia lub pracy nie potrafisz wprowadzić i
              utrzymać prawidłowego sposobu odżywiania.
            </p>
          </li>
          <li className="marker:text-[2.25em] marker:list-item tracking-wide">
            <h4 className="font-semibold">Nadmiar informacji?</h4>
            <p>
              Czujesz zagubienie w dostępnych informacjach, gdy jedni odradzają
              a inni wymieniają korzystne właściwości.
            </p>
          </li>
        </ul>{" "}
      </div>
    </section>
  );
};

export default Reasons;
