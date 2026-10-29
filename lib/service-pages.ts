// Conținutul paginilor dedicate fiecărui serviciu (/servicii/<slug>).
// Textele sunt propuneri; firma le poate ajusta oricând aici.

export type ServicePage = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  forWho: string[];
  included: { title: string; items: string[] }[];
  faq: { q: string; a: string }[];
};

const priceAnswer =
  "Prețul depinde de volumul de documente, de numărul de angajați și de specificul activității. Trimite-ne o solicitare și primești o ofertă personalizată, fără costuri ascunse.";

export const servicePages: ServicePage[] = [
  {
    slug: "contabilitate",
    seoTitle: "Servicii de contabilitate pentru firme în București",
    metaDescription:
      "Contabilitate completă pentru SRL-uri, microîntreprinderi și PFA-uri: evidență lunară, declarații ANAF, SAF-T, e-Factura și bilanț. Experți contabili membri CECCAR.",
    h1: "Servicii de contabilitate pentru firme",
    intro: [
      "Ținem evidența contabilă completă a firmei tale, de la înregistrarea documentelor până la bilanțul anual, și depunem declarațiile la termen.",
      "Lucrăm cu SRL-uri, microîntreprinderi, PFA-uri și companii în creștere, din București și din toată țara. Documentele circulă digital, iar tu primești lunar o situație clară despre firma ta.",
    ],
    forWho: [
      "SRL-uri și microîntreprinderi",
      "Firme nou înființate care au nevoie de contabil de la început",
      "Firme care vor să schimbe contabilul",
      "PFA-uri, întreprinderi individuale și profesii liberale",
    ],
    included: [
      {
        title: "Evidență contabilă",
        items: [
          "Înregistrarea documentelor: facturi, bonuri, extrase bancare",
          "Balanța de verificare lunară",
          "Evidența mijloacelor fixe și a stocurilor",
          "Registrul jurnal, registrul inventar și cartea mare",
        ],
      },
      {
        title: "Declarații și raportări",
        items: [
          "Declarațiile lunare, trimestriale și anuale către ANAF",
          "Raportarea SAF-T (D406)",
          "Verificarea facturilor din sistemul e-Factura",
          "Depunerea online, prin Spațiul Privat Virtual",
        ],
      },
      {
        title: "Situații financiare",
        items: [
          "Închiderea exercițiului financiar",
          "Bilanțul și situațiile financiare anuale",
          "Raportările semestriale, unde este cazul",
        ],
      },
      {
        title: "Comunicare clară",
        items: [
          "Situații lunare despre profit, TVA și taxele de plată",
          "Un consultant dedicat pentru firma ta",
          "Răspuns la solicitări în cel mult o zi lucrătoare",
        ],
      },
    ],
    faq: [
      {
        q: "Ce documente trebuie să vă trimit în fiecare lună?",
        a: "Facturile emise și primite, extrasele bancare, bonurile fiscale, contractele noi și orice alt document legat de activitatea firmei. Le poți trimite digital: pe email, scanate sau fotografiate.",
      },
      {
        q: "Pot schimba contabilul în timpul anului?",
        a: "Da, oricând. Preluăm evidența de la contabilul anterior (balanțe, registre, declarații depuse), verificăm situația și continuăm de acolo.",
      },
      {
        q: "Lucrați doar cu firme din București?",
        a: "Nu. Suntem în București, dar lucrăm digital, așa că putem ține contabilitatea firmelor din toată țara.",
      },
      { q: "Cât costă serviciile de contabilitate?", a: priceAnswer },
    ],
  },
  {
    slug: "consultanta-fiscala",
    seoTitle: "Consultanță fiscală pentru firme în București",
    metaDescription:
      "Consultanță fiscală pentru firme: alegerea regimului fiscal, optimizare fiscală legală, analiza tranzacțiilor și asistență la controale ANAF. Explicații pe înțeles.",
    h1: "Consultanță fiscală pentru firme",
    intro: [
      "Te ajutăm să înțelegi ce taxe datorează firma ta, să alegi variantele legale cele mai avantajoase și să fii pregătit la un control ANAF.",
      "Explicăm totul pe înțeles, fără jargon, ca să iei decizii informate înainte, nu să afli consecințele după.",
    ],
    forWho: [
      "Antreprenori care pornesc o afacere și aleg forma de organizare",
      "Firme care trec de la impozit pe venit la impozit pe profit sau devin plătitoare de TVA",
      "Firme care au primit o notificare sau un control ANAF",
      "Firme cu tranzacții mai complexe: achiziții din UE, servicii din străinătate, contracte mari",
    ],
    included: [
      {
        title: "Planificare fiscală",
        items: [
          "Alegerea regimului fiscal potrivit",
          "Optimizare fiscală, în limitele legii",
          "Analiza impactului fiscal al unei decizii înainte de a o lua",
        ],
      },
      {
        title: "Analiză și verificare",
        items: [
          "Analiza fiscală a contractelor și a tranzacțiilor",
          "Verificarea declarațiilor depuse",
          "Corectarea declarațiilor, unde este nevoie",
        ],
      },
      {
        title: "Relația cu ANAF",
        items: [
          "Asistență la controale și inspecții fiscale",
          "Răspunsuri la notificări și solicitări ANAF",
          "Pregătirea documentelor cerute de autorități",
        ],
      },
      {
        title: "Informare",
        items: [
          "Modificările legislative explicate pe înțeles",
          "Calendarul obligațiilor fiscale ale firmei tale",
        ],
      },
    ],
    faq: [
      {
        q: "Ce înseamnă optimizare fiscală legală?",
        a: "Înseamnă să alegi, în limitele legii, variantele care reduc costurile fiscale: regimul de impozitare, modul de structurare a veniturilor, deductibilitatea cheltuielilor. Nu înseamnă evitarea taxelor datorate.",
      },
      {
        q: "Mă puteți ajuta dacă am deja un control ANAF?",
        a: "Da. Analizăm documentele cerute, pregătim răspunsurile și te asistăm pe durata controlului.",
      },
      {
        q: "Pot cere consultanță fiscală fără să vă am contabili?",
        a: "Da. Putem lucra punctual, pentru o singură problemă sau decizie, chiar dacă evidența contabilă o ține altcineva.",
      },
      { q: "Cât costă consultanța fiscală?", a: priceAnswer },
    ],
  },
  {
    slug: "resurse-umane",
    seoTitle: "Servicii de resurse umane (HR) și REGES pentru firme",
    metaDescription:
      "Externalizare HR pentru firme: contracte de muncă, acte adiționale, înregistrări în REGES, dosare de personal, regulament intern și consultanță pe Codul Muncii.",
    h1: "Servicii de resurse umane (HR) pentru firme",
    intro: [
      "Administrăm complet relația de muncă cu angajații tăi, de la angajare până la încetarea contractului, cu actele și înregistrările cerute de Codul Muncii.",
      "Tu te ocupi de echipă, noi ne asigurăm că documentele sunt în regulă și înregistrate la timp.",
    ],
    forWho: [
      "Firme care angajează primul salariat",
      "Firme fără departament de resurse umane propriu",
      "Firme care vor să verifice dacă actele de personal sunt în regulă",
      "Firme în creștere, cu angajări frecvente",
    ],
    included: [
      {
        title: "Contracte și acte",
        items: [
          "Contracte individuale de muncă și acte adiționale",
          "Decizii de angajare, modificare, suspendare și încetare",
          "Fișe de post",
        ],
      },
      {
        title: "REGES",
        items: [
          "Înregistrarea datelor salariaților în REGES, la termen",
          "Actualizarea și corectarea înregistrărilor",
        ],
      },
      {
        title: "Dosare și documente interne",
        items: [
          "Dosarele de personal ale angajaților",
          "Regulamentul intern",
          "Evidența concediilor de odihnă",
          "Adeverințe pentru angajați",
        ],
      },
      {
        title: "Consultanță",
        items: [
          "Consultanță pe Codul Muncii",
          "Pregătirea documentelor pentru controalele ITM",
          "Sprijin în situațiile delicate, cum ar fi încetarea unui contract",
        ],
      },
    ],
    faq: [
      {
        q: "Ce este REGES?",
        a: "REGES este registrul general de evidență a salariaților, în care angajatorul înregistrează datele contractelor de muncă. A înlocuit vechea aplicație Revisal.",
      },
      {
        q: "Pot externaliza doar o parte din activitatea de HR?",
        a: "Da. Putem prelua doar înregistrările în REGES, doar actele de personal sau toată activitatea, în funcție de ce ai nevoie.",
      },
      {
        q: "Ce verifică ITM la un control?",
        a: "De obicei, contractele de muncă, înregistrările în REGES, evidența timpului de lucru și dosarele de personal. Pregătim documentele și te asistăm pe durata controlului.",
      },
      { q: "Cât costă serviciile de HR?", a: priceAnswer },
    ],
  },
  {
    slug: "salarizare",
    seoTitle: "Servicii de salarizare (payroll) și D112 pentru firme",
    metaDescription:
      "Externalizare salarizare: calcul salarii, contribuții și impozite, state de plată, fluturași, concedii medicale și declarația D112, lunar și confidențial.",
    h1: "Servicii de salarizare (payroll) pentru firme",
    intro: [
      "Calculăm lunar salariile, contribuțiile și impozitele angajaților tăi, pregătim statele de plată și depunem declarația D112.",
      "Lucrăm precis, la termen și confidențial: datele salariale sunt văzute doar de persoanele pe care le desemnezi.",
    ],
    forWho: [
      "Firme cu unul sau mai mulți angajați",
      "Firme care vor să externalizeze salarizarea",
      "Firme cu sporuri, bonusuri sau ore suplimentare",
      "Firme care vor ca salariile să rămână confidențiale",
    ],
    included: [
      {
        title: "Calcul lunar",
        items: [
          "Salarii, sporuri, ore suplimentare și bonusuri",
          "Concedii de odihnă și concedii medicale",
          "Contribuții sociale și impozit pe venit",
          "Scutirile și facilitățile fiscale aplicabile",
        ],
      },
      {
        title: "Documente",
        items: [
          "State de plată",
          "Fluturași de salariu pentru fiecare angajat",
          "Situația sumelor de plătit către angajați și către stat",
          "Adeverințe de venit și de salariat",
        ],
      },
      {
        title: "Declarații",
        items: [
          "Declarația D112, în fiecare lună",
          "Declarații rectificative, unde este nevoie",
          "Situații pentru contabilitate",
        ],
      },
    ],
    faq: [
      {
        q: "Până când se depune declarația D112?",
        a: "De regulă, până pe 25 ale lunii următoare celei pentru care se plătesc salariile. Ne ocupăm noi de calcul și de depunere.",
      },
      {
        q: "Ce informații vă trimit în fiecare lună?",
        a: "Pontajul, concediile, angajările și plecările din lună, precum și eventualele bonusuri sau modificări de salariu.",
      },
      {
        q: "Puteți prelua salarizarea în timpul anului?",
        a: "Da. Preluăm istoricul necesar de la cine s-a ocupat până acum și continuăm din luna următoare.",
      },
      { q: "Cât costă serviciile de salarizare?", a: priceAnswer },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}

export const workSteps = [
  { title: "Ne spui despre firmă", text: "Completezi formularul sau ne suni. Aflăm ce activitate ai și de ce ai nevoie." },
  { title: "Primești oferta", text: "Îți trimitem o ofertă clară, adaptată firmei tale, fără costuri ascunse." },
  { title: "Preluăm documentele", text: "Semnăm contractul și preluăm evidența, inclusiv de la contabilul anterior." },
  { title: "Lucrăm lunar împreună", text: "Primești la timp declarațiile, rapoartele și răspunsurile de care ai nevoie." },
];
