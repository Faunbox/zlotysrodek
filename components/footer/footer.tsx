import { getDownloadableFiles } from "@/lib/contentful";
import NewsletterForm from "../newsletter/form";
import FooterContact from "./footerContact";
import FooterLogo from "./footerLogo";
import NutritionalSurvey from "./survey";

const Footer = async () => {
  const urlsOfPdfFiles = await getDownloadableFiles();

  return (
    <footer className="w-full flex items-center justify-center py-10 text-white bg-green flex-col z-0 relative ">
      <div className="md:w-9/12 flex flex-col items-start justify-start lg:flex-row gap-10 container h-full">
        <div className="lg:w-6/12 flex flex-col items-center md:items-start justify-center md:justify-start gap-2">
          <NewsletterForm />
          <NutritionalSurvey />
        </div>
        <div className="w-4/12 flex justify-center items-center mx-auto">
          <FooterLogo />
        </div>
        <div className="w-full lg:w-6/12 flex flex-col items-center text-center justify-start">
          <FooterContact urls={urlsOfPdfFiles} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
