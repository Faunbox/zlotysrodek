import FreeConsultation from "@/components/home_page/freeConsultation";
import Offert from "@/components/home_page/offert";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { getConsultationPrices } from "@/lib/contentful";
import { Prices } from "@/app/page";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const BenefitsComponent = dynamic(
  () => import("@/components/offert/benefitsComponent")
);
const CancelationComponent = dynamic(
  () => import("@/components/offert/cancelationComponent")
);

export const metadata: Metadata = {
  title: "Oferta ",
  alternates: {
    canonical: `${process.env.VERCEL_URL}/oferta`,
  },
};

const StepsComponent = dynamic(
  () => import("@/components/offert/stepsComponent"),
  { ssr: false }
);

const Consultation = async () => {
  const consultationPrices = await getConsultationPrices();

  return (
    <main className="page">
      {/* <BackgroundedHeader>Oferta</BackgroundedHeader> */}
      <Offert title={true} prices={consultationPrices as Prices} bg={true} />
      <FreeConsultation />
      <HalfBackgroundHeader>
        Konsultacja on-line krok po kroku:
      </HalfBackgroundHeader>
      <StepsComponent />
      <CancelationComponent />
      <BenefitsComponent />
    </main>
  );
};

export default Consultation;
