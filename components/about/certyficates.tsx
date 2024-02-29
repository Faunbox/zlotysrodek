import { getAllCertyficates } from "@/lib/contentful";
import HalfBackgroundHeader from "../typography/halfBgHeader";
import Image from "next/image";

const Certyficates = async () => {
  const certyficates = await getAllCertyficates();

  return (
    <div className="mx-10 lg:mx-60 xl:pt-32 mt-20 flex flex-col w-full gap-20 z-20">
      <HalfBackgroundHeader>Certyfikaty</HalfBackgroundHeader>
      <div className="flex items-center justify-center gap-6 flex-wrap mb-20">
        {certyficates?.map((certyficate) => {
          return (
            <Image
              key={certyficate.title}
              src={`https:${certyficate.url}?w=300&h=428&fm=webp`}
              alt={certyficate.alt}
              width={300}
              loading="lazy"
              height={300}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certyficates;
