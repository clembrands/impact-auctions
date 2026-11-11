import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getContent } from "@/lib/content";
import { SiteContentProvider } from "@/components/site-content-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
});

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent("siteSettings");
  return {
    title: {
      default: seo.defaultTitle,
      template: "%s | Impact Auctions",
    },
    description: seo.description,
    openGraph: {
      images: ["/opengraph.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContent = await getContent("siteSettings");

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RTKZFG8ZNC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RTKZFG8ZNC');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <SiteContentProvider value={siteContent}>{children}</SiteContentProvider>
      </body>
    </html>
  );
}
