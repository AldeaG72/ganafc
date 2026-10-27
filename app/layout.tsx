import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: "GANA F&C — Contabilitate și consultanță fiscală",
    template: "%s | GANA F&C",
  },
  description:
    "GANA F&C (Finance & Accounting) — servicii de contabilitate, consultanță fiscală, resurse umane și salarizare pentru firme din România.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
