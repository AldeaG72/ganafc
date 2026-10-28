// Date de contact demo — înlocuiți cu datele reale ale firmei.
const company = {
  name: "GANA F&A SRL",
  cui: "RO00000000",
  regCom: "J40/0000/2020",
  seat: "Str. Exemplu nr. 10, București",
};

export const site = {
  name: "GANA F&A",
  fullName: "GANA Finance and Accounting",
  tagline: "Contabilitate și consultanță fiscală",
  phone: "+40 700 000 000",
  phoneHref: "tel:+40700000000",
  email: "office@ganaaccounting.ro",
  address: company.seat,
  hours: "Luni – Vineri: 09:00 – 18:00",
  url: "https://ganaaccounting.ro",
  company,
  legal: `${company.name} · CUI ${company.cui} · ${company.regCom}`,
};

// Linkuri obligatorii în subsol. Când imaginile oficiale sunt adăugate în public/legal/,
// completați câmpul `image` și link-ul se afișează ca pictogramă.
export const legalBadges: { href: string; label: string; image?: string; width: number; height: number }[] = [
  {
    href: "https://anpc.ro/",
    label: "Soluționarea alternativă a litigiilor",
    width: 250,
    height: 50,
  },
  {
    href: "https://consumer-redress.ec.europa.eu/site-relocation_en",
    label: "Soluționarea online a litigiilor",
    width: 250,
    height: 50,
  },
];

export const ceccar = { href: "https://ceccar.ro/ro/", label: "CECCAR", image: undefined as string | undefined };
