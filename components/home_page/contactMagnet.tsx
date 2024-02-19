import Link from "next/link";
import FilledButton from "../typography/filledButton";

const ContactMagnet = () => {
  return (
    <section className="bg-[url('/images/fotel.webp')] w-full flex flex-col items-center justify-center h-[55vh] my-10 md:my-20 bg-center bg-cover bg-no-repeat relative">
      <div className="flex flex-col text-darkGreen items-center justify-center mx-10 gap-5 md:absolute md:top-[25%] md:-left-[10%] w-9/12">
        <div className="font-light text-2xl">
          <p>Każda zmiana wydaje się trudna,</p>
          <p>zanim uczynisz ją łatwą w realizacji.</p>
        </div>
        <Link href={"/kontakt"}>
          <FilledButton color={"bg-green"} text="white">
            KONTAKT
          </FilledButton>
        </Link>
      </div>
    </section>
  );
};

export default ContactMagnet;
