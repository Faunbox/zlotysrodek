import NewsletterForm from "../newsletter/form";
import NutritionalSurvey from "./survey";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-20 text-white bg-green">
      <div className="w-9/12 ">
        <div className="flex flex-col items-start justify-start w-2/6">
          <NewsletterForm />
          <NutritionalSurvey />
        </div>
        <div className="w-2/6"></div>
        <div className="w-2/6"></div>
      </div>
    </footer>
  );
};

export default Footer;
