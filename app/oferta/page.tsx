import FreeConsultation from "@/components/home_page/freeConsultation";
import Offert from "@/components/home_page/offert";
import StepsComponent from "@/components/offert/stepsComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { getConsultationPrices } from "@/lib/contentful";
import { Prices } from "@/app/page";
import dynamic from "next/dynamic";

const BenefitsComponent = dynamic(() => import('@/components/offert/benefitsComponent'))
const CancelationComponent = dynamic(() => import('@/components/offert/cancelationComponent'))

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
