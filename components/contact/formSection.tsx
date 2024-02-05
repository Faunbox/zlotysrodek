import Image from "next/image";
import FormComponent from "./FormComponent";

const FormSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start mx-60 gap-20 mb-20">
      <div className="w-6/12">
        <FormComponent />
      </div>
      <div className="w-6/12">
        <Image
          src={"/images/kontakt.jpg"}
          alt="Otwarty laptop"
          height={700}
          width={450}
        />
      </div>
    </section>
  );
};

export default FormSection;
