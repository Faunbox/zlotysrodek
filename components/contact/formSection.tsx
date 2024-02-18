import Image from "next/image";
import FormComponent from "./FormComponent";

const FormSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start mx-10 lg:mx-20 gap-20 mb-20 relative">
      <div className="w-full md:w-9/12 lg:w-6/12 mx-auto">
        <FormComponent />
      </div>
      <div className="hidden lg:flex lg:w-6/12">
        <Image
          src={"/images/kontakt.jpg"}
          alt="Otwarty laptop"
          height={700}
          width={450}
          fetchPriority="high"
          className="lg:absolute lg:-top-10"
        />
      </div>
    </section>
  );
};

export default FormSection;
