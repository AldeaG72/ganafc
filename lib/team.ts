export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  // Descrierea apare doar dacă a fost furnizată de firmă.
  bio?: string[];
};

export const team: TeamMember[] = [
  {
    name: "Nicoleta Nae",
    role: "Managing Partner | Expert Contabil",
    photo: "/echipa/nicoleta-nae-2.jpg",
    bio: [
      "Nicoleta este expert contabil, membru CECCAR, cu o experiență de peste șapte ani în domeniul economic. A absolvit masterul Contabilitate, control și expertiză la Academia de Studii Economice din București. Și‑a completat pregătirea prin programul de stagiu al Corpului Experților Contabili și Contabililor Autorizați din România.",
      "A lucrat ca economist și consilier economic pentru companii private, iar în prezent activează și în sectorul public. Această combinație îi oferă o perspectivă completă asupra cerințelor legale și fiscale.",
    ],
  },
  {
    name: "Andreea-Vasi Ilie",
    role: "Managing Partner | Expert Contabil",
    photo: "/echipa/andreea-vasi-ilie-2.jpg",
    bio: [
      "Andreea este expert contabil, membru CECCAR, cu o experiență de peste șapte ani în domeniul economic. A absolvit masterul Contabilitate, control și expertiză la Academia de Studii Economice din București. Și‑a completat pregătirea prin programul de stagiu al Corpului Experților Contabili și Contabililor Autorizați din România.",
      "Și‑a format experiența în firme de servicii contabile, unde a evoluat de la Junior Accountant la Senior Accountant. A lucrat și ca Financial Controller, Consultant implementare SAP FI/CO, astfel îmbină cunoștințele contabile solide cu o bună înțelegere a sistemelor ERP și a proceselor digitale.",
    ],
  },
  {
    name: "Bianca Elena Armașu",
    role: "Avocat",
    photo: "/echipa/bianca-armasu-2.jpg",
    bio: [
      "Bianca este avocat în Baroul București din 2019 și coordonează partea juridică a echipei. Și‑a început cariera la una dintre cele mai mari case de avocatură din România. A condus apoi departamentele juridice ale unui grup de companii din industria muzicală și de entertainment, ca Head of Legal și Group General Counsel.",
      "Este specializată în drept corporativ și a absolvit un master în drept și noi tehnologii la Universitatea din București. Bianca se asigură că fiecare decizie financiară a clienților are o bază juridică solidă, cu o abordare orientată spre soluții practice.",
    ],
  },
  {
    name: "Gabriel-Cristian Aldea",
    role: "Consultant Extern | HR & Payroll Manager",
    photo: "/echipa/gabriel-cristian-aldea-2.jpg",
    bio: [
      "Gabriel are peste șase ani de experiență în resurse umane și salarizare, inclusiv în servicii de outsourcing. Este absolvent de Contabilitate și informatică de gestiune la ASE București și a lucrat pentru companii multinaționale din tehnologie, materiale de construcții, consultanță și audit fiscal. A gestionat salarizarea pentru companii cu peste 1000 de angajați și a pregătit state de plată pentru mai multe țări.",
      "S‑a ocupat și de relația cu ITM în timpul controalelor. Gabriel se ocupă de contractele de muncă, dosarele de personal și consultanța pe Codul Muncii.",
    ],
  },
];
