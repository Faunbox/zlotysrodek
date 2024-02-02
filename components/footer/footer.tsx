import NewsletterForm from "../newsletter/form";
import FooterContact from "./footerContact";
import FooterLogo from "./footerLogo";
import FooterNav from "./footerNavigation";
import NutritionalSurvey from "./survey";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-20 text-white bg-green flex-col">
      <div className="w-9/12 flex flex-col lg:flex-row">
        <div className="w-4/12 flex flex-col items-start justify-start ">
          <NewsletterForm />
          <NutritionalSurvey />
        </div>
        <div className="w-4/12 flex justify-center items-center mx-auto">
          <FooterLogo />
        </div>
        <div className="w-4/12 flex flex-col lg:flex-row justify-center">
          <FooterNav />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
