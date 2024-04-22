import {
  getAllCertyficates,
  getAllCertyficatesHorizontal,
} from "@/lib/contentful";
import HalfBackgroundHeader from "../typography/halfBgHeader";
import CertyficateCarusel from "./certyficateSlider";

const Certyficates = async () => {
  const verticalCertyficates = await getAllCertyficates();
  const horizontalCertyficates = await getAllCertyficatesHorizontal();

  return (
    <div className="z-20 mx-10 flex w-screen flex-col gap-20 lg:mx-60">
      <HalfBackgroundHeader translate={30}>Certyfikaty:</HalfBackgroundHeader>
      <div className="container">
        <div className="mb-20  gap-6">
          <CertyficateCarusel
            verticalCertyficates={verticalCertyficates as any}
            horizontalCertyficates={horizontalCertyficates as any}
          />
        </div>
      </div>
    </div>
  );
};

export default Certyficates;
