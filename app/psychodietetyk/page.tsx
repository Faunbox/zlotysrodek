import BasicInfo from "@/components/psychodietetic/basicInfo";
import Reasons from "@/components/psychodietetic/reasons";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";

const Page = () => {
  return (
    <div className="page">
      <BackgroundedHeader>Psychodietetyk</BackgroundedHeader>
      <BasicInfo />
      <BackgroundedHeader size="text-3xl" position="text-right" title={false}>Powody konsultacji:</BackgroundedHeader>
      <Reasons />
    </div>
  );
};

export default Page;
