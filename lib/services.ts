// Opțiunile din formularul de ofertă.
export const quoteOptions = [
  "Contabilitate și fiscalitate",
  "Resurse umane",
  "Salarizare",
  "Pachet integrat complet",
  "Informații generale",
] as const;

export type QuoteOption = (typeof quoteOptions)[number];

export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
  quoteOption: QuoteOption;
  icon: "ledger" | "scale" | "people" | "wallet";
};

export const services: Service[] = [
  {
    slug: "contabilitate",
    title: "Contabilitate",
    description:
      "Ținem evidența contabilă completă a firmei tale, corect și la timp, ca tu să te concentrezi pe afacere.",
    points: [
      "Contabilitate financiară și de gestiune",
      "Declarații lunare, trimestriale și anuale",
      "Bilanț și situații financiare",
      "Raportări SAF-T și e-Factura",
    ],
    quoteOption: "Contabilitate și fiscalitate",
    icon: "ledger",
  },
  {
    slug: "consultanta-fiscala",
    title: "Consultanță Fiscală",
    description:
      "Te ajutăm să iei decizii fiscale informate, să optimizezi legal taxele și să eviți riscurile la control.",
    points: [
      "Optimizare fiscală legală",
      "Asistență la controale ANAF",
      "Analiza tranzacțiilor și a contractelor",
      "Actualizări legislative pe înțelesul tău",
    ],
    quoteOption: "Contabilitate și fiscalitate",
    icon: "scale",
  },
  {
    slug: "resurse-umane",
    title: "Resurse Umane (HR)",
    description:
      "Administrăm complet relația de muncă cu angajații, conform Codului Muncii și legislației în vigoare.",
    points: [
      "Contracte de muncă și acte adiționale",
      "Gestionare REGES",
      "Dosare de personal și regulamente interne",
      "Consultanță în legislația muncii",
    ],
    quoteOption: "Resurse umane",
    icon: "people",
  },
  {
    slug: "salarizare",
    title: "Salarizare (Payroll)",
    description:
      "Calculăm salariile, contribuțiile și declarațiile aferente, precis și confidențial, în fiecare lună.",
    points: [
      "Calcul salarii, concedii și bonusuri",
      "Fluturași și state de plată",
      "Declarația D112",
      "Adeverințe pentru angajați",
    ],
    quoteOption: "Salarizare",
    icon: "wallet",
  },
];
