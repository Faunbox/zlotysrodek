import {
  getAllCertyficates,
  getAllCertyficatesHorizontal,
} from "@/lib/contentful";
import HalfBackgroundHeader from "../typography/halfBgHeader";
import SwiperSlider from "./slider";
import Lightbox from "./lightbox";
import LightboxHorizontal from "./lightboxHorizontal";

const Certyficates = async () => {
  const verticalCertyficates = await getAllCertyficates();
  const horizontalCertyficates = await getAllCertyficatesHorizontal();

  return (
    <div className="z-20 mx-10 flex w-screen flex-col gap-20 lg:mx-60">
      <HalfBackgroundHeader translate={50}>Certyfikaty:</HalfBackgroundHeader>
      <div className="container hidden lg:block">
        {/* @ts-ignore */}
        <SwiperSlider slides={verticalCertyficates} />
        {/* @ts-ignore */}
        <SwiperSlider slides={horizontalCertyficates} horizontal={true} />
      </div>
      <div className="container lg:hidden">
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
                <LightboxHorizontal
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
    </div>
  );
};

export default Certyficates;
