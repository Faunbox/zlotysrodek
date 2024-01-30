import Header from "../typography/headers";

const Offert = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white">
      <Header>Oferta</Header>
      <div className="flex flex-row gap-5">
        <div className="bg-offertGreen">
          <p>
            Kupując pakiet 4 konsultacji oszczędzasz 80 zł, płacąc za spotkanie
            140 zł.
          </p>
          <p>PAKIET KONSULTACJI ON-LINE 4 SPOTKANIA 560 ZŁ</p>
          <button>KUP PAKIET KONSULTACJI</button>
        </div>
        <div className="bg-offertGreen">
          <ul>
            <li>Spotkamy się na 50 min </li>
            <li>Przeanalizujemy Twój przypadek</li>{" "}
            <li>Opracujemy plan małych kroków</li>
            <li>Będziemy monitorować Twoje postępy</li>{" "}
            <li>Dostaniesz moje wsparcie</li>
          </ul>
          <p>POJEDYNCZA KONSULTACJA 160 ZŁ</p>
          <button>KUP KONSULTACJĘ</button>
        </div>
        <div className="bg-offertGreen">
          <p>
            Kupując pakiet 8 konsultacji oszczędzasz aż 320 zł, płacąc za
            spotkanie tylko 120 zł.
          </p>
          <p>PAKIET KONSULTACJI ON-LINE 8 SPOTKAŃ 960 ZŁ</p>
          <button>KUP PAKIET KONSULTACJI</button>
        </div>
      </div>
    </section>
  );
};

export default Offert;
