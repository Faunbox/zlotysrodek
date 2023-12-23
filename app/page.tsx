import NewsletterForm from "@/components/newsletter/form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center py-10 gap-5">
      <div>Main</div>
      <div>
        <NewsletterForm />
      </div>
    </main>
  );
}
