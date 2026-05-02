import type { Metadata } from "next";
import "./globals.css";
import './fonts.css'
import { montserrat, monument } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Solve Magic Maths — Abacus, Rubik's Cube, Vedic Maths & Tuition",
  description:
    "Brain-development classes for kids ages 5–16. Small batches, experienced trainers, real results. Book a free demo today.",
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
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
