import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";
import { Montserrat, Poppins } from "next/font/google";
import Footer from "@/components/footer/footer";
import { authOptions } from "@/lib/nextAuth";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Psychodietetyka, trener żywienia | Złoty środek",
  description: "Witaj w świecie psychodietetyki! Znajdziesz tutaj nie tylko cenne porady dotyczące zdrowego odżywiania i równowagi psychicznej, ale także możliwość skorzystania z e-konsultacji z doświadczonym psychodietetykiem. Odkryj, jak dieta może wpływać na Twoje samopoczucie i emocje oraz jakie strategie możesz zastosować, aby osiągnąć harmonię między ciałem a umysłem. Nasze artykuły, praktyczne wskazówki oraz opcja e-konsultacji pomogą Ci prowadzić zdrowszy i bardziej zrównoważony tryb życia. Zacznij dbać o swoje zdrowie psychiczne już dziś!",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800','900'],
  display: 'swap',
  preload: true,
  variable: "--poppins"
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const gtag = process.env.GTAG as string

  return (
    <html lang="pl" className={`${montserrat.variable} ${poppins.variable}`}>
      <GoogleAnalytics gaId={gtag} />
      <body>
        <Providers session={session}>
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
