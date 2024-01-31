import FilledButton from "../typography/filledButton";

const ContactMagnet = () => {
  return (
    <section className="bg-[url('/images/fotel.webp')] w-full h-[55vh] my-20 bg-center bg-cover bg-no-repeat relative">
      <div className="flex flex-col text-darkGreen items-center justify-center gap-5 absolute top-[25%] -left-[10%] w-9/12">
        <div className="font-light text-2xl">
          <p>Każda zmiana wydaje się trudna,</p>
          <p>zanim uczynisz ją łatwą w realizacji.</p>
        </div>
        <FilledButton color={"green"} text="white">
          KONTAKT
        </FilledButton>
      </div>
    </section>
  );
};

export default ContactMagnet;
