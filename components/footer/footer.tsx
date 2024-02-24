import { queryClient } from "@/lib/react-query";
import NewsletterForm from "../newsletter/form";
import FooterContact from "./footerContact";
import FooterLogo from "./footerLogo";
import FooterNav from "./footerNavigation";
import NutritionalSurvey from "./survey";
import { getDownloadableFiles } from "@/lib/contentful";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

const Footer = async () => {
  
  await queryClient.prefetchQuery({
    queryKey: ["urls"],
    queryFn: async () => await getDownloadableFiles(),
  });

  return (
    <footer className="w-full flex items-center justify-center py-20 text-white bg-green flex-col z-50">
      <div className="md:w-9/12 flex flex-col items-center lg:flex-row gap-10 container">
      <HydrationBoundary state={dehydrate(queryClient)}>
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
        </HydrationBoundary>
      </div>
    </footer>
  );
};

export default Footer;
