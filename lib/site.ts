// CUI-ul, nr. Reg. Com. și adresa sediului se completează când sunt gata actele firmei.
// Cât timp sunt goale, nu apar pe site, iar ca adresă se afișează doar orașul.
const company = {
  name: "GANA Finance and Accounting SRL",
  cui: "",
  regCom: "",
  seat: "",
  city: "București",
};

export const site = {
  name: "GANA F&A",
  fullName: "GANA Finance and Accounting",
  tagline: "Contabilitate și consultanță fiscală",
  phone: "+40 785 347 207",
  phoneHref: "tel:+40785347207",
  // wa.me deschide aplicația WhatsApp pe telefon și WhatsApp Web / Desktop pe calculator
  whatsappHref: `https://wa.me/40785347207?text=${encodeURIComponent(
    "Bună ziua! Aș dori informații despre serviciile GANA F&A.",
  )}`,
  email: "office@ganaaccounting.ro",
  address: company.seat || company.city,
  hours: "Luni – Vineri: 09:00 – 18:00",
  url: "https://ganaaccounting.ro",
  company,
  legal: [company.name, company.cui && `CUI ${company.cui}`, company.regCom].filter(Boolean).join(" · "),
};

// Profilurile firmei pe rețelele sociale (subsol și date structurate).
export const social = [
  { name: "Instagram", href: "https://www.instagram.com/ganaaccounting/" },
  { name: "TikTok", href: "https://www.tiktok.com/@ganaaccounting" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/gana-accounting/" },
] as const;

// Linkuri obligatorii în subsol. Când imaginile oficiale sunt adăugate în public/legal/,
// completați câmpul `image` și link-ul se afișează ca pictogramă.
export const legalBadges: { href: string; label: string; image?: string; width: number; height: number }[] = [
  {
    href: "https://anpc.ro/",
    label: "Soluționarea alternativă a litigiilor",
    image: "/legal/anpc-sal.png",
    width: 515,
    height: 131,
  },
  {
    href: "https://consumer-redress.ec.europa.eu/site-relocation_en",
    label: "Soluționarea online a litigiilor",
    image: "/legal/anpc-sol.png",
    width: 513,
    height: 130,
  },
];

export const ceccar = { href: "https://ceccar.ro/ro/", label: "CECCAR", image: "/legal/ceccar.png" as string | undefined };
