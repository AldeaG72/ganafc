export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  // Descrierea apare doar dacă a fost furnizată de firmă.
  bio?: string[];
};

export const team: TeamMember[] = [
  { name: "Nicoleta Nae", role: "Managing Partner | Expert Contabil", photo: "/echipa/nicoleta-nae-2.jpg" },
  { name: "Andreea-Vasi Ilie", role: "Managing Partner | Expert Contabil", photo: "/echipa/andreea-vasi-ilie-2.jpg" },
  { name: "Bianca Armasu", role: "Avocat | Consilier Juridic General", photo: "/echipa/bianca-armasu-2.jpg" },
  { name: "Gabriel-Cristian Aldea", role: "Consultant Extern | HR & Payroll Manager", photo: "/echipa/gabriel-cristian-aldea-2.jpg" },
];
