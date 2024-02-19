import Image from "next/image";

const TextComponent = () => {
  return (
    <div className="flex flex-row gap-20 lg:mx-20 text-green relative">
      <div className="flex flex-col text-large gap-4 text-left  mx-10 mb-32">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col gap-2 mt-20 lg:w-6/12">
            <p className="font-semibold">
              Nazywam się Dorota Sojecka i jestem absolwentką studiów
              podyplomowych na kierunku Dietetyka i planowanie żywienia oraz
              Psychodietetyka w Wyższej Szkole Nauk Społecznych w Lublinie.
            </p>
            <p>
              Ukończyłam liczne kursy i szkolenia z zakresu dietetyki,
              psychodietetyki, pracy z emocjami oraz psychologii i stale
              poszerzam swoją wiedzę na specjalistycznych warsztatach i
              szkoleniach.
            </p>
            <p>
              Łączę 20-letnie doświadczenie pracy w korporacji z empatią i
              umiejętnością słuchania. Od wielu lat fascynuje mnie rozwój oraz
              sięganie po różne działania i doświadczenia. W swoim zawodowym
              portfolio mam wiele zawodów i profesji, a co za tym idzie wiele
              talentów i zasobów, z których korzystam pełnymi garściami. W
              tradycyjnym ujęciu zawodowym jestem konsultantem żywieniowym,
              psychodietetykiem, menagerem, przedsiębiorcą.
            </p>
            <p>
              Ze względu na to, że sama przeszłam długą drogę pełną zmian, dziś
              wspieram innych w ich transformacjach. Wiem, z czego warto
              czerpać, gdzie szukać swojej wewnętrznej mocy i z jakich zasobów
              uczynić najlepsze narzędzia wsparcia. Moją pasją jest praca ze
              zmianą, pokonywaniem oporów oraz barier przed kreowaniem zdrowego
              życia w zgodzie ze sobą.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between gap-10 lg:gap-0">
          <div className="w-full md:w-6/12 lg:w-4/12 my-5 ">
            <Image
              src={"/images/AboutDorotka.jpg"}
              alt="Dorota Sojecka"
              width={336}
              height={500}
              className="lg:ml-20 object-contain lg:absolute lg:-top-10 lg:right-0"
            />
          </div>
          <div className="md:w-6/12 lg:w-full">
            <p>
              Podczas indywidualnych konsultacji wyjaśniam, jaki wpływ na
              samopoczucie i dobrostan ma racjonalne odżywianie i zdrowy styl
              życia oraz motywuję do zmian – pomagam wyznaczyć realne cele i
              małymi krokami do nich dążyć.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
