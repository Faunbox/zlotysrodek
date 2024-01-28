import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: "Psychodietetyka, trener żywienia | Złoty środek",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: "swap",
  variable: "--font-montserrat"
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="pl" className={`${montserrat.variable}, container mx-auto`}>
      <body>
        <Providers session={session}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
