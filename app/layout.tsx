import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import FollowMe from "@/components/home_page/follow";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";
import { Montserrat, Poppins, Tinos } from "next/font/google";
import Footer from "@/components/footer/footer";
import { authOptions } from "@/lib/nextAuth";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getPageData } from "@/lib/contentful";
import { AnimatePresence } from "framer-motion";

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

const tinos = Tinos({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: true,
  variable: "--tinos",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const gtag = process.env.GTAG as string;

  return (
    <html
      lang="pl"
      className={`${montserrat.variable} ${poppins.variable} ${tinos.variable}`}
    >
      <SpeedInsights />
      <Analytics />
      <GoogleAnalytics gaId={gtag} />
      <body className="relative">
        <FollowMe />
        <Providers session={session}>
          <Navbar />
          {/* <AnimatePresence> */}
          <main className="container">{children}</main>
          {/* </AnimatePresence> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
