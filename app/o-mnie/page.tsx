import Certyficates from "@/components/about/certyficates";
import LifestyleComponent from "@/components/about/lifeStyleComponent";
import TextComponent from "@/components/about/textComponent";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";

const AboutPage = () => {
  return (
    <div className="page">
      <BackgroundedHeader>Poznajmy się!</BackgroundedHeader>
      <TextComponent />
      <BackgroundedHeader
        size="text-4xl"
        position="text-left lg:text-right"
        title={false}
        classname=" xl:pr-64"
      >
        Zdrowy styl życia to dla mnie:
      </BackgroundedHeader>
      <LifestyleComponent />
      <Certyficates />
    </div>
  );
};

export default AboutPage;
