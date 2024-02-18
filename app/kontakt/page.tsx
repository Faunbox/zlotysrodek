import FormSection from "@/components/contact/formSection";
import SocialPanel from "@/components/contact/socialPanel";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";

const Contact = () => {
  return (
    <main className="flex flex-col">
      <BackgroundedHeader>Kontakt</BackgroundedHeader>
      <FormSection />
      <SocialPanel />
    </main>
  );
};

export default Contact;
