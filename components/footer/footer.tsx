import NewsletterForm from "../newsletter/form";
import FooterContact from "./footerContact";
import FooterLogo from "./footerLogo";
import FooterNav from "./footerNavigation";
import NutritionalSurvey from "./survey";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-20 text-white bg-green flex-col">
      <div className="md:w-9/12 flex flex-col items-center lg:flex-row gap-10">
        <div className="lg:w-4/12 flex flex-col items-center md:items-start justify-center md:justify-start gap-2">
          <NewsletterForm />
          <NutritionalSurvey />
        </div>
        <div className="w-4/12 flex justify-center items-center mx-auto">
          <FooterLogo />
        </div>
        <div className="w-full lg:w-4/12 flex flex-col items-center text-center md:flex-row justify-center gap-10">
          <FooterNav />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
