import BlogMagnet from "@/components/home_page/blogMagnet";
import FollowMe from "@/components/home_page/follow";
import HeroSection from "@/components/home_page/hero";
import NewsletterForm from "@/components/newsletter/form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <HeroSection />
      <FollowMe />
      <BlogMagnet />
    </main>
  );
}
