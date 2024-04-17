import Link from "next/link";
import FilledButton from "../typography/filledButton";

const ContactMagnet = () => {
  return (
    <section className="bg-[url('/images/fotel.webp')] w-screen max-w-[1600px] flex flex-col items-center justify-center h-[55vh] max-h-[450px] mt-10 md:mt-20 bg-center bg-cover bg-no-repeat relative">
      <div className="flex flex-col text-darkGreen items-start justify-center mx-10 gap-5 md:absolute md:top-[25%] md:-left-[10%] w-9/12">
        <div className="flex flex-col">
          <div className="font-light text-xl md:text-3xl font-tinos italic">
            <p>Każda zmiana wydaje się trudna,</p>
            <p>zanim uczynisz ją łatwą w realizacji.</p>
          </div>
          <Link href={"/kontakt"} className="pt-10">
            <FilledButton color="bg-darkGreen" text="white" ariaLabel="Kontakt">
              KONTAKT
            </FilledButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMagnet;
