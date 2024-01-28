import HeroSection from "@/components/home_page/hero";
import NewsletterForm from "@/components/newsletter/form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <HeroSection />
      <div>
        <NewsletterForm />
      </div>
    </main>
  );
}
