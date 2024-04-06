import Image from "next/image";

const TextComponent = () => {
  return (
    <div className="flex flex-row gap-20 lg:mx-20 text-darkGreen relative ">
      <div className="flex flex-col text-large 2xl:text-large gap-4 text-left mx-10 mb-24">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2 mt-20 lg:mt-10 lg:w-6/12 2xl:w-7/12">
            <p className="font-semibold font-abhaya py-8">
              Nazywam się Dorota Sojecka i jestem absolwentką studiów
              podyplomowych na kierunku Dietetyka i planowanie żywienia oraz
              Psychodietetyka w Wyższej Szkole Nauk Społecznych w Lublinie.
            </p>
            <p className="font-montserrat">
              Ukończyłam liczne kursy i szkolenia z zakresu dietetyki,
              psychodietetyki, pracy z emocjami oraz psychologii i stale
              poszerzam swoją wiedzę na specjalistycznych warsztatach i
              szkoleniach.
            </p>
            <p className="font-poppins">
              Łączę 20-letnie doświadczenie pracy w korporacji z empatią i
              umiejętnością słuchania. Od wielu lat fascynuje mnie rozwój oraz
              sięganie po różne działania i doświadczenia. W swoim zawodowym
              portfolio mam wiele zawodów i profesji, a co za tym idzie wiele
              talentów i zasobów, z których korzystam pełnymi garściami. W
              tradycyjnym ujęciu zawodowym jestem konsultantem żywieniowym,
              psychodietetykiem, menagerem, przedsiębiorcą.
            </p>
            <p className="font-poppins">
              Ze względu na to, że sama przeszłam długą drogę pełną zmian, dziś
              wspieram innych w ich transformacjach. Wiem, z czego warto
              czerpać, gdzie szukać swojej wewnętrznej mocy i z jakich zasobów
              uczynić najlepsze narzędzia wsparcia. Moją pasją jest praca ze
              zmianą, pokonywaniem oporów oraz barier przed kreowaniem zdrowego
              życia w zgodzie ze sobą. Podczas indywidualnych konsultacji
              wyjaśniam, jaki wpływ na samopoczucie i dobrostan ma racjonalne
              odżywianie i zdrowy styl życia oraz motywuję do zmian – pomagam
              wyznaczyć realne cele i małymi krokami do nich dążyć.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row-reverse gap-4 justify-center items-center">
            <div className="w-full md:w-6/12 lg:w-0 mb-8 mt-14 ">
              <Image
                src={"/images/AboutDorotka.jpg"}
                alt="Dorota Sojecka"
                width={400}
                height={600}
                quality={100}
                className="lg:ml-20 object-contain lg:absolute lg:-top-7 lg:right-[0%] xl:right-[4%] mx-auto"
              />
            </div>
            {/* <div className="md:w-6/12 lg:w-full lg:mt-0 2xl:mt-32 2xl:text-left 2xl:w-full pt-14"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
