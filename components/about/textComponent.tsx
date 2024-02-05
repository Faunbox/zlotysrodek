import Image from "next/image";

const TextComponent = () => {
  return (
    <div className="flex flex-row gap-20 mx-60 text-green relative">
      <div className="flex flex-col text-large gap-4 text-left mb-32">
        <div className="flex flex-row ">
          <div className="flex flex-col gap-2 mt-20 w-8/12">
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
          <div className="w-4/12">
            <Image
              src={"/images/AboutDorotka.jpg"}
              alt="Dorota Sojecka"
              width={336}
              height={500}
              className="ml-20 object-contain absolute -top-20"
            />
          </div>
        </div>

        <p>
          Podczas indywidualnych konsultacji wyjaśniam, jaki wpływ na
          samopoczucie i dobrostan ma racjonalne odżywianie i zdrowy styl życia
          oraz motywuję do zmian – pomagam wyznaczyć realne cele i małymi
          krokami do nich dążyć.
        </p>
      </div>
    </div>
  );
};

export default TextComponent;
