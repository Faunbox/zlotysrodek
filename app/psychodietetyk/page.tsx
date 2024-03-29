import BasicInfo from "@/components/psychodietetic/basicInfo";
import Reasons from "@/components/psychodietetic/reasons";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";

const Page = () => {
  return (
    <div className="page text-darkGreen">
      <BackgroundedHeader>Psychodietetyk</BackgroundedHeader>
      <BasicInfo />
      <BackgroundedHeader
        size="text-3xl"
        position="text-right"
        title={false}
        classname=" xl:pr-[25%]"
      >
        Powody konsultacji:
      </BackgroundedHeader>
      <Reasons />
    </div>
  );
};

export default Page;
