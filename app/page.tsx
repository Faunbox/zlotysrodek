import BasicInfo from "@/components/home_page/basicInfo";
import BlogMagnet from "@/components/home_page/blogMagnet";
import ContactMagnet from "@/components/home_page/contactMagnet";
import FollowMe from "@/components/home_page/follow";
import FreeConsultation from "@/components/home_page/freeConsultation";
import HeroSection from "@/components/home_page/hero";
import Info from "@/components/home_page/info";
import Offert from "@/components/home_page/offert";
import CancelationComponent from "@/components/offert/cancelationComponent";
import StepsComponent from "@/components/offert/stepsComponent";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { getConsultationPrices } from "@/lib/contentful";

export type Prices = {
    konsultacja: string;
    zestaw3Konsultacji: string;
    zestaw10Konsultacji: string;
    tytul: string;
};

export default async function Home() {
  const consultationPrices = await getConsultationPrices();

  return (
    <main className="page">
      <HeroSection />
      <FollowMe />
      <BasicInfo />
      <BlogMagnet />
      <Offert title={true} prices={consultationPrices as Prices} />
      <FreeConsultation />
      <ContactMagnet />
      <HalfBackgroundHeader>
        Konsultacja on-line krok po kroku:
      </HalfBackgroundHeader>
      <StepsComponent />
      <CancelationComponent />
      <Info />
    </main>
  );
}
