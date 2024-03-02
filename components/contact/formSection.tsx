import Image from "next/image";
import FormComponent from "./FormComponent";

const FormSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start mg:items-center w-full mx-10 lg:mx-20 gap-20 mb-20 relative">
      <div className="w-full lg:w-6/12 px-5">
        <FormComponent />
      </div>
      <div className="hidden lg:flex lg:w-6/12 xl:w-4/12">
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
