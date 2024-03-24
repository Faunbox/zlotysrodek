import FreeConsultation from "@/components/home_page/freeConsultation";
import Offert from "@/components/home_page/offert";
import BenefitsComponent from "@/components/offert/benefitsComponent";
import CancelationComponent from "@/components/offert/cancelationComponent";
import OptionsComponent from "@/components/offert/optionsComponent";
import StepsComponent from "@/components/offert/stepsComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { getConsultationPrices } from "@/lib/contentful";
import { Prices } from "@/app/page";

const Consultation = async () => {
  const consultationPrices = await getConsultationPrices();

  return (
    <main className="page">
      <BackgroundedHeader>Oferta</BackgroundedHeader>
      <FreeConsultation />
      <Offert title={false} prices={consultationPrices as Prices}/>
      <HalfBackgroundHeader>
        Konsultacja on-line krok po kroku:
      </HalfBackgroundHeader>
      <StepsComponent />
      <CancelationComponent/>
      <BenefitsComponent />
    </main>
  );
};

export default Consultation;
