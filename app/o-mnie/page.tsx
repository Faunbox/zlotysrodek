import LifestyleComponent from "@/components/about/lifeStyleComponent";
import TextComponent from "@/components/about/textComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";

const AboutPage = () => {
  return (
    <div className="page">
      <BackgroundedHeader>Poznajmy się!</BackgroundedHeader>
      <TextComponent />
      <LifestyleComponent />
    </div>
  );
};

export default AboutPage;
