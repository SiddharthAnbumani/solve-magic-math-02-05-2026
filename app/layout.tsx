import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import './fonts.css'
import { montserrat, monument } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InternalLinkHub from "@/components/seo/InternalLinkHub";
import JsonLd from "@/components/seo/JsonLd";
import {
  combine,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/jsonld";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TITLE_TEMPLATE,
} from "@/lib/seo";

export const metadata: Metadata = {
  // CRITICAL — turns every relative canonical / OG image into an absolute
  // URL anchored to the canonical www domain, regardless of which host
  // (preview deploy, vercel.app, etc.) actually served the request.
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: TITLE_TEMPLATE },
  description: SITE_DESCRIPTION,
  applicationName: "Magic Maths",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Magic Maths",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_IN",
    images: [
      { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${monument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-montserrat-400">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18155850775"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18155850775');
          `}
        </Script>
        {/* Site-wide structured data — emits Organization, Website,
            and LocalBusiness on every page so Google has a single,
            consistent identity to index against. */}
        <JsonLd
          data={combine([
            organizationSchema(),
            websiteSchema(),
            localBusinessSchema(),
          ])}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <InternalLinkHub />
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
