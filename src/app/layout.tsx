/** @format */

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Newsletterytics",
  description: "Your Newsletter statistics on the go",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}
          />
        </Providers>
      </body>
    </html>
  );
}
