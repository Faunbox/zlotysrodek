import FreeConsultation from "@/components/home_page/freeConsultation";
import BenefitsComponent from "@/components/offert/benefitsComponent";
import CancelationComponent from "@/components/offert/cancelationComponent";
import OptionsComponent from "@/components/offert/optionsComponent";
import StepsComponent from "@/components/offert/stepsComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { getStatuate } from "@/lib/contentful";

const Consultation = async () => {
  const statuateUrl = await getStatuate()

  return (
    <main className="flex flex-col items-start justify-center">
      <BackgroundedHeader>Oferta</BackgroundedHeader>
      <OptionsComponent />
      <FreeConsultation />
      <HalfBackgroundHeader>
        Konsultacja on-line krok po kroku:
      </HalfBackgroundHeader>
      <StepsComponent />
        <CancelationComponent link={statuateUrl}/>
      <BenefitsComponent />
    </main>
  );
};

export default Consultation;
