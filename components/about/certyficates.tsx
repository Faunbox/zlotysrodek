import { getAllCertyficates } from "@/lib/contentful";
import HalfBackgroundHeader from "../typography/halfBgHeader";
import Image from "next/image";
import Lightbox from "./lightbox";

const Certyficates = async () => {
  const certyficates = await getAllCertyficates();

  return (
    <div className="mx-10 lg:mx-60 xl:pt-32 mt-20 flex flex-col w-full gap-20 z-20">
      <HalfBackgroundHeader translate={30}>Certyfikaty</HalfBackgroundHeader>
      <div className="flex items-center justify-center gap-6 flex-wrap mb-20">
        {certyficates?.map((certyficate) => {
          return (
            <Lightbox key={certyficate.title} title={certyficate.title} url={certyficate.url} alt={certyficate.alt}/>
          );
        })}
      </div>
    </div>
  );
};

export default Certyficates;
