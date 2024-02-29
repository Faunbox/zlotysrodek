import FreeConsultation from "@/components/home_page/freeConsultation";
import BenefitsComponent from "@/components/offert/benefitsComponent";
import CancelationComponent from "@/components/offert/cancelationComponent";
import OptionsComponent from "@/components/offert/optionsComponent";
import StepsComponent from "@/components/offert/stepsComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { getConsultationPrices, getStatuate } from "@/lib/contentful";

const Consultation = async () => {
  const statuateUrl = await getStatuate();
  const consultationPrices = await getConsultationPrices();

  return (
    <main className="page">
      <BackgroundedHeader>Oferta</BackgroundedHeader>
      {/* @ts-ignore */}
      <OptionsComponent prices={consultationPrices} />
      <FreeConsultation />
      <HalfBackgroundHeader>
        Konsultacja on-line krok po kroku:
      </HalfBackgroundHeader>
      <StepsComponent />
      <CancelationComponent link={statuateUrl} />
      <BenefitsComponent />
    </main>
  );
};

export default Consultation;
