import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionProvider } from "@/components/Motion";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ganaaccounting.ro"),
  title: {
    default: "GANA F&A – GANA Finance and Accounting | Contabilitate și consultanță fiscală",
    template: "%s | GANA F&A",
  },
  description:
    "GANA F&A (GANA Finance and Accounting) – servicii de contabilitate, consultanță fiscală, resurse umane și salarizare pentru firme din România. ganaaccounting.ro",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://ganaaccounting.ro",
    siteName: "GANA F&A",
    title: "GANA F&A — Contabilitate și consultanță fiscală",
    description:
      "Contabilitate, consultanță fiscală, resurse umane și salarizare pentru firme care vor să crească fără griji administrative.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GANA F&A — Contabilitate și consultanță fiscală",
    description:
      "Contabilitate, consultanță fiscală, resurse umane și salarizare pentru firme care vor să crească fără griji administrative.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <MotionProvider>
          <Header />
          <main className="overflow-x-clip">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
