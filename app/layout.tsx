import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import FollowMe from "@/components/home_page/follow";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";
import { Montserrat, Poppins } from "next/font/google";
import Footer from "@/components/footer/footer";
import { authOptions } from "@/lib/nextAuth";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getPageData } from "@/lib/contentful";

export async function generateMetadata(): Promise<Metadata> {
  
  const data = await getPageData();
  
  const { tytuStrony, deskrypcja, keywords } = data.fields;

  return {
    title: {
      default: tytuStrony as string,
      template: `%s | Psychodietetyka - Złoty Środek`,
    },
    keywords: keywords as string[],
    description: deskrypcja as string,
    alternates: {
      canonical: process.env.VERCEL_URL,
    },
  };
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  variable: "--poppins",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const gtag = process.env.GTAG as string;

  return (
    <html lang="pl" className={`${montserrat.variable} ${poppins.variable}`}>
      <SpeedInsights />
      <Analytics />
      <GoogleAnalytics gaId={gtag} />
      <body className="relative">
        <FollowMe />
        <Providers session={session}>
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
