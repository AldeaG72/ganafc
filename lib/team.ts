export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  // Descrierea apare doar dacă a fost furnizată de firmă.
  bio?: string[];
};

export const team: TeamMember[] = [
  { name: "Gabriel-Cristian Aldea", role: "Consultant Extern | HR & Payroll Manager", photo: "/echipa/gabriel-cristian-aldea.jpg" },
  { name: "Nicoleta Nae", role: "Managing Partner | Expert Contabil", photo: "/echipa/nicoleta-nae.jpg" },
  { name: "Bianca Armasu", role: "Avocat | Consilier Juridic General", photo: "/echipa/bianca-armasu.jpg" },
  { name: "Andreea-Vasi Ilie", role: "Managing Partner | Expert Contabil", photo: "/echipa/andreea-vasi-ilie.jpg" },
];
