import { getAllCertyficates } from "@/lib/contentful";
import HalfBackgroundHeader from "../typography/halfBgHeader";
import Lightbox from "./lightbox";

const Certyficates = async () => {
  const certyficates = await getAllCertyficates();

  return (
    <div className="mx-10 lg:mx-60 flex flex-col w-screen gap-20 z-20">
      <HalfBackgroundHeader translate={30}>Certyfikaty:</HalfBackgroundHeader>
      <div className="container">
        <div className="flex items-center justify-center gap-6 flex-wrap mb-20">
          {certyficates?.map((certyficate) => {
            return (
              <Lightbox
                key={certyficate.title}
                title={certyficate.title}
                url={certyficate.url}
                alt={certyficate.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certyficates;
