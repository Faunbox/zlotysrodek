import BlogMagnet from "@/components/home_page/blogMagnet";
import ContactMagnet from "@/components/home_page/contactMagnet";
import FollowMe from "@/components/home_page/follow";
import FreeConsultation from "@/components/home_page/freeConsultation";
import HeroSection from "@/components/home_page/hero";
import Info from "@/components/home_page/info";
import Offert from "@/components/home_page/offert";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <HeroSection />
      <FollowMe />
      <BlogMagnet />
      <Info />
      <ContactMagnet />
      <Offert />
      <FreeConsultation />
    </main>
  );
}
