import Certyficates from "@/components/about/certyficates";
import LifestyleComponent from "@/components/about/lifeStyleComponent";
import TextComponent from "@/components/about/textComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mnie ",
  alternates: {
    canonical: `${process.env.VERCEL_URL}/o-mnie`,
  },
};

const AboutPage = () => {
  return (
    <div className="page">
      <BackgroundedHeader>Poznajmy się!</BackgroundedHeader>
      <TextComponent />
      <BackgroundedHeader
        size="text-4xl"
        position="text-left lg:text-right"
        title={false}
        classname=" xl:pr-60 2xl:pr-36"
      >
        Zdrowy styl życia to dla mnie:
      </BackgroundedHeader>
      <LifestyleComponent />
      <Certyficates />
    </div>
  );
};

export default AboutPage;
