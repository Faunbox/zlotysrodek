import BasicInfo from "@/components/home_page/basicInfo";
import HeroSection from "@/components/home_page/hero";
import Info, { InfoT } from "@/components/home_page/info";
import Offert from "@/components/home_page/offert";
import HalfBackgroundHeader from "@/components/typography/halfBgHeader";
import { getConsultationPrices, getHomePageData } from "@/lib/contentful";
import dynamic from "next/dynamic";

export type Prices = {
  konsultacja: string;
  linkDoJednejKonsultacji: string;
  zestaw3Konsultacji: string;
  linkDo4Konsultacji: string;
  pakiet4OpisOferty: string;
  zestaw10Konsultacji: string;
  pakiet8OpisOferty: string;
  linkDo8Konsultacji: string;
  tytul: string;
};

const CancelationComponent = dynamic(
  () => import("@/components/offert/cancelationComponent")
);
const StepsComponent = dynamic(
  () => import("@/components/offert/stepsComponent")
);
const ContactMagnet = dynamic(
  () => import("@/components/home_page/contactMagnet")
);
const FreeConsultation = dynamic(
  () => import("@/components/home_page/freeConsultation")
);
// const BlogMagnet = dynamic(() => import("@/components/home_page/blogMagnet"));

export default async function Home() {
  const consultationPrices = await getConsultationPrices();
  const homePageData = await getHomePageData();

  

  return (
    <main className="page">
      <HeroSection />
      <BasicInfo />
      <HalfBackgroundHeader>{homePageData.fields.dodatkoweInformacje as string}</HalfBackgroundHeader>
      <Info data={homePageData.fields as InfoT}/>
      {/* <BlogMagnet /> */}
      <Offert title={true} prices={consultationPrices as Prices} />
      <FreeConsultation />
      <HalfBackgroundHeader>
        Konsultacja on-line krok po kroku:
      </HalfBackgroundHeader>
      <StepsComponent />
      <CancelationComponent />
      <ContactMagnet />
    </main>
  );
}
