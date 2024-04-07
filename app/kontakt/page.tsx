import FormSection from "@/components/contact/formSection";
import SocialPanel from "@/components/contact/socialPanel";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  alternates: {
    canonical: `${process.env.VERCEL_URL}/kontakt`,
  },
};


const Contact = () => {
  return (
    <main className="page">
      <BackgroundedHeader>Kontakt</BackgroundedHeader>
      <FormSection />
      <SocialPanel />
    </main>
  );
};

export default Contact;
