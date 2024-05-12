import TextComponent from "@/components/about/textComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "O mnie ",
  alternates: {
    canonical: `${process.env.VERCEL_URL}/o-mnie`,
  },
};

const LifestyleComponent = dynamic(
  () => import("@/components/about/lifeStyleComponent")
);
const Certyficates = dynamic(() => import("@/components/about/certyficates"));

const AboutPage = () => {
  return (
    <div className="page">
      <BackgroundedHeader>Poznajmy się!</BackgroundedHeader>
      <TextComponent />
      {/* <BackgroundedHeader
        size="text-4xl"
        position="text-left lg:text-right"
        title={false}
        classname=" xl:pr-60 2xl:pr-36"
      >
        
      </BackgroundedHeader> */}
      <LifestyleComponent />
      <Certyficates />
    </div>
  );
};

export default AboutPage;
