import Link from "next/link";
import FilledButton from "../typography/filledButton";

const ContactMagnet = () => {
  return (
    <section className="relative mt-10 flex h-[55vh] max-h-[450px] w-screen flex-col items-center justify-center bg-[url('/images/fotel.webp')] bg-cover bg-center bg-no-repeat md:mt-20">
      <div className="mx-10 flex w-9/12 flex-col items-start justify-center gap-5 text-darkGreen md:absolute md:-left-[0%] md:top-[25%] xl:left-[10%] 2xl:left-[15%]">
        <div className="flex max-w-[1600px] flex-col">
          <div className="font-tinos text-xl font-light italic md:text-3xl">
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
