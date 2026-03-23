import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import CornerBanner from "@/components/corner-banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Impact Auctions | Professional Fundraising Auctioneers",
    template: "%s | Impact Auctions",
  },
  description:
    "Professional fundraising auctioneers based in North Carolina, serving nonprofits nationwide. Live auctions, silent auctions, fund-a-need, and event planning.",
  openGraph: {
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <CornerBanner />
        {children}
      </body>
    </html>
  );
}
