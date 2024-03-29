import Image from "next/image";

const BasicInfo = () => {
  return (
    <section className="flex flex-col lg:mx-20 text-darkGreen text-large relative">
      <div className="flex flex-col md:flex-row lg:mb-6">
        <div className="flex flex-col md:w-7/12 lg:w-6/12 mx-10 lg:mx-8 py-20 gap-5 text-darkGreen lg:pr-10">
          <p>
            Psychodietetyk różni się od dietetyków przede wszystkim podejściem
            do pracy. W założeniu dietetyka uczy o tym jak jeść w odpowiedzi na
            przeróżne stany zdrowia i choroby, a część psychodietetyczna pozwala
            znaleźć sposoby na to jak tą wiedzę wprowadzić w życie.
          </p>
          <p>
            Osoby, które zaczynają stosować diety redukcyjne, bardzo często
            zaczynają nieustannie myśleć o jedzeniu, a kiedy przerywają dietę
            zwykle jedzą więcej niż kiedykolwiek. Dodatkowo często napotykają na
            swojej drodze niezliczone trudności, takie jak niepowodzenia w walce
            z głodem i zachciankami, uleganie kuszącym potrawom, nieustanne
            poddawanie się myślom o jedzeniu co w konsekwencji prowadzi do
            efektu jo-jo, depresja związana z podejmowaniem kolejnych nieudanych
            prób.
          </p>
          <p>
            Okazuje się, że dla większości osób nadwaga czy otyłość to tylko
            wierzchołek góry lodowej. Pod nim kryją się najczęściej: niska
            samoocena, obniżony nastrój czy kłopoty w radzeniu sobie z emocjami.
            Dlatego tak ważne jest, aby uświadomić sobie, że odchudzanie, to nie
            restrykcyjna dieta, lecz głęboka zmiana stylu życia oraz – a może
            przede wszystkim – zmiana myślenia i zachowania.
          </p>
        </div>
        <div className=" mx-auto lg:w-4/12">
          <Image
            src="/images/armchair.webp"
            alt="Złoty fotel"
            width={400}
            height={700}
            className="lg:absolute lg:-top-10"
            loading="lazy"
          />
        </div>
      </div>
      <h4 className="text-4xl m-10 font-semibold font-abhaya">
        Pamiętaj! Nie ma gotowych rozwiązań – każdy ma inne potrzeby, inny
        system wartości, inne cele, inne problemy do rozwiązania, różne
        ograniczenia.
      </h4>
      <div className="flex flex-col mx-10 gap-5 mb-20">
        <p>
          Ważna jest dla mnie Twoja wiedza na temat własnych możliwości,
          zasobów, czy ewentualnych ograniczeń oraz moja znajomość psychologii
          jedzenia. Przy takiej współpracy mamy gwarancję, że wszelkie wskazówki
          i dalsze działania będą indywidualnie dopasowane do Twoich potrzeb i
          wcześniejszych doświadczeń. Moim zadaniem jest nauczyć Cię
          samodzielności w dokonywaniu wyborów żywieniowych, w radzeniu sobie z
          barierami, które do tej pory utrudniały Ci realizację Twoich założeń.
        </p>
        <p>
          Nie dostaniesz sztywnych zasad dietetycznych, rozpisanych jadłospisów,
          które działają tylko do czasu gdy pojawią się pierwsze trudności.
          Skutecznie naprowadzę Cię na właściwą drogę, tak aby udało Ci się
          osiągnąć wymarzony cel. Pokażę Ci metody, dzięki którym zyskasz
          poczucie kontroli nad swoim sposobem żywienia. Stworzymy wspólnie Twój
          zdrowy sposób odżywiania się – nie na chwilę lecz na całe życie!
        </p>
      </div>
    </section>
  );
};

export default BasicInfo;
