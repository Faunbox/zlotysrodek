import Image from "next/image";

const BenefitsComponent = () => {
  const benefits = [
    {
      title: "Stały kontakt",
      text: "Obecnie konsultacje prowadzę zdalnie. Możemy spotkać się za pomocą komunikatorów: Google Meet, Skype lub WhatsApp.",
    },
    {
      title: "Oszczędność czasu",
      text: "Obecnie konsultacje prowadzę zdalnie. Spotykamy się za pomocą komunikatorów: Google Meet lub Skype, WhatsApp. Nie tracisz czasu na dojazdy i rozmawiasz w wygodnym i bezpiecznym dla Ciebie miejscu.",
    },
    {
      title: "Umówienie spotkania",
      text: `Aby zarezerwować termin możesz: - wykupić konsultację na stronie (link) lub - dokonać wpłaty na dane: DBS Dorota Sojecka nr konta (mBank): 94 1140 2004 0000 3002 3009 8288. W tytule wpisz: swoje imię i nazwisko, datę i godzinę konsultacji.`,
    },
  ];

  return (
    <div className="mx-10 lg:mx-auto lg:w-9/12 flex items-center justify-center my-20 text-offertGreen">
      <ul className=" flex flex-col gap-8">
        {benefits.map((benefit) => {
            return (
              <li className="relative" key={benefit.title}>
                <Image
                  src={"/images/avocado.svg"}
                  alt="awokado"
                  width={25}
                  height={25}
                  className="absolute top-0 -left-8 md:-left-14"
                />
                <h4 className="font-semibold">{benefit.title}</h4>
                <p>{benefit.text}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BenefitsComponent;
