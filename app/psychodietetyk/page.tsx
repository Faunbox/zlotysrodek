import BasicInfo from "@/components/psychodietetic/basicInfo";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Psychodietetyk",
  alternates: {
    canonical: `${process.env.VERCEL_URL}/psychodietetyk`,
  },
};

const Reasons = dynamic(() => import("@/components/psychodietetic/reasons"));

const Page = () => {
  return (
    <div className="page ">
      <BackgroundedHeader>Psychodietetyk</BackgroundedHeader>
      <BasicInfo />
      {/* <BackgroundedHeader
        size="text-3xl"
        position="text-right"
        title={false}
        classname=" xl:pr-[25%]"
      >
        Powody konsultacji:
      </BackgroundedHeader> */}
      <Reasons />
    </div>
  );
};

export default Page;
