import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Date structurate pentru Google: cine este firma și cum se mai numește.
const organization = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: site.name,
  alternateName: [site.fullName, "GANA Accounting"],
  legalName: site.company.name,
  url: site.url,
  logo: `${site.url}/logo-gana.png`,
  image: `${site.url}/opengraph-image.png`,
  telephone: site.phone.replace(/\s/g, ""),
  email: site.email,
  areaServed: "RO",
  employee: team.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role.replace(" | ", ", ") })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Team />
      <Contact />
    </>
  );
}
