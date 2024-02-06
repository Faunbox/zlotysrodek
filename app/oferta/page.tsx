"use client";
import FreeConsultation from "@/components/home_page/freeConsultation";
import BenefitsComponent from "@/components/offert/benefitsComponent";
import CancelationComponent from "@/components/offert/cancelationComponent";
import OptionsComponent from "@/components/offert/optionsComponent";
import StepsComponent from "@/components/offert/stepsComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { useSession } from "next-auth/react";

const Consultation = () => {
  const { data: session } = useSession();
  const email: string = session?.user?.email!;

  return (
    <main className="flex flex-col items-start justify-center">
      <BackgroundedHeader>Oferta</BackgroundedHeader>
      <OptionsComponent email={email} />
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
