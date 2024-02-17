const BenefitsComponent = () => {
  return (
    <div className="mx-10 md:w-9/12 md:mx-60 flex items-center justify-center my-20">
      <ul className="list-image-avocad flex flex-col gap-8">
        <li className="marker:text-[2.25em] marker:list-item tracking-wide">
          <h4 className="font-semibold">Stały kontakt</h4>
          <p>
            Obecnie konsultacje prowadzę zdalnie. Możemy spotkać się za pomocą
            komunikatorów: Skype, WhatsApp, Google Meet.
          </p>
        </li>
        <li className="marker:text-[2.25em] marker:list-item tracking-wide">
          <h4 className="font-semibold">Oszczędność czasu</h4>
          <p>
            Obecnie konsultacje prowadzę zdalnie. Spotykamy się za pomocą
            komunikatorów: Google Meet lub Skype, WhatsApp. Nie tracisz czasu na
            dojazdy i rozmawiasz w wygodnym i bezpiecznym dla Ciebie miejscu.
          </p>
        </li>
        <li className="marker:text-[2.25em] marker:list-item tracking-wide">
          <h4 className="font-semibold">Umówienie spotkania</h4>
          <p>
            Aby zarezerwować termin możesz: - wykupić konsultację na stronie
            (link) lub - dokonać wpłaty na dane: DBS Dorota Sojecka nr konta
            (mBank): 94 1140 2004 0000 3002 3009 8288. W tytule wpisz: swoje
            imię i nazwisko, datę i godzinę konsultacji.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BenefitsComponent;
