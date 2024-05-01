import {
  getAllCertyficates,
  getAllCertyficatesHorizontal,
} from "@/lib/contentful";
import HalfBackgroundHeader from "../typography/halfBgHeader";
import Lightbox from "./lightbox";

const Certyficates = async () => {
  const verticalCertyficates = await getAllCertyficates();
  const horizontalCertyficates = await getAllCertyficatesHorizontal();

  return (
    <div className="z-20 mx-10 flex w-screen flex-col gap-20 lg:mx-60">
      <HalfBackgroundHeader translate={50}>Certyfikaty:</HalfBackgroundHeader>
      <div className="container">
        <div className="mb-20  gap-6">
          <div className="overflow-x-scroll flex flex-row gap-10 mx-10">
            {verticalCertyficates?.map((certyficate) => {
              return (
                <Lightbox
                  key={certyficate.title}
                  title={certyficate.title}
                  url={certyficate.url}
                  alt={certyficate.alt}
                  width={400}
                  height={600}
                />
              );
            })}
            {horizontalCertyficates?.map((certyficate) => {
              return (
                <Lightbox
                  key={certyficate.title}
                  title={certyficate.title}
                  url={certyficate.url}
                  alt={certyficate.alt}
                  width={800}
                  height={300}
                />
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certyficates;
