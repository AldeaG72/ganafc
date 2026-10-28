import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Termenii și condițiile de utilizare a site-ului GANA F&A.",
};

// Text-cadru — trebuie revizuit de firmă înainte de a fi considerat final.
export default function Termeni() {
  const c = site.company;
  return (
    <LegalPage eyebrow="Informații legale" title="Termeni și condiții" updated="28 octombrie 2026">
      <p>
        Vă rugăm să citiți cu atenție acești termeni înainte de a utiliza site-ul{" "}
        <Link href="/">ganaaccounting.ro</Link>. Prin accesarea și utilizarea site-ului, sunteți de acord cu
        termenii de mai jos.
      </p>

      <h2>1. Cine suntem</h2>
      <ul>
        <li>{c.name}, CUI {c.cui}, nr. Registrul Comerțului {c.regCom}</li>
        <li>Sediu: {c.seat}</li>
        <li>
          Email: <a href={`mailto:${site.email}`}>{site.email}</a> · Telefon:{" "}
          <a href={site.phoneHref}>{site.phone}</a>
        </li>
      </ul>

      <h2>2. Scopul site-ului</h2>
      <p>
        Site-ul prezintă serviciile GANA F&amp;A: contabilitate, consultanță fiscală, resurse umane și salarizare.
        Informațiile publicate au caracter general și informativ. Ele nu reprezintă consultanță contabilă, fiscală
        sau juridică pentru o situație concretă și nu pot înlocui analiza unui specialist.
      </p>

      <h2>3. Solicitarea de ofertă</h2>
      <ul>
        <li>
          Formularul „Solicită ofertă” vă permite să ne transmiteți o cerere. Trimiterea formularului nu
          reprezintă încheierea unui contract și nu vă obligă la nimic.
        </li>
        <li>
          Oferta pe care v-o transmitem este personalizată și orientativă. Prestarea efectivă a serviciilor se
          face doar pe baza unui contract scris, semnat de ambele părți, care stabilește serviciile, onorariile și
          obligațiile fiecărei părți.
        </li>
        <li>
          Vă rugăm să furnizați date corecte și complete. Pentru solicitări cu date false sau abuzive ne rezervăm
          dreptul de a nu răspunde.
        </li>
      </ul>

      <h2>4. Proprietate intelectuală</h2>
      <p>
        Conținutul site-ului (texte, grafică, logo, elemente de design) aparține GANA F&amp;A sau este folosit cu
        acordul titularilor. Nu îl puteți copia, reproduce sau folosi în scop comercial fără acordul nostru scris.
        Siglele și denumirile altor organizații (de exemplu ANPC, CECCAR) aparțin titularilor lor.
      </p>

      <h2>5. Limitarea răspunderii</h2>
      <ul>
        <li>
          Ne străduim ca informațiile de pe site să fie corecte și actualizate, dar legislația se modifică
          frecvent. Nu răspundem pentru decizii luate exclusiv pe baza informațiilor generale de pe site.
        </li>
        <li>
          Nu garantăm funcționarea neîntreruptă a site-ului și nu răspundem pentru indisponibilități temporare
          cauzate de lucrări de mentenanță sau de factori din afara controlului nostru.
        </li>
      </ul>

      <h2>6. Linkuri către alte site-uri</h2>
      <p>
        Site-ul conține linkuri către site-uri externe (de exemplu ANPC, Comisia Europeană, CECCAR). Nu controlăm
        și nu răspundem pentru conținutul acestor site-uri.
      </p>

      <h2>7. Protecția datelor personale</h2>
      <p>
        Datele transmise prin site sunt prelucrate conform{" "}
        <Link href="/politica-confidentialitate">Politicii de confidențialitate</Link>.
      </p>

      <h2>8. Soluționarea reclamațiilor și a litigiilor</h2>
      <p>
        Pentru orice nemulțumire, vă rugăm să ne contactați mai întâi la{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Vom încerca să rezolvăm situația pe cale amiabilă.
      </p>
      <p>
        Consumatorii au și posibilitatea de a apela la proceduri alternative de soluționare a litigiilor,
        conform legislației privind protecția consumatorilor:
      </p>
      <ul>
        <li>
          Autoritatea Națională pentru Protecția Consumatorilor (ANPC) –{" "}
          <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
            anpc.ro
          </a>
          ;
        </li>
        <li>
          Soluționarea online a litigiilor, platforma Comisiei Europene –{" "}
          <a href="https://consumer-redress.ec.europa.eu/site-relocation_en" target="_blank" rel="noopener noreferrer">
            consumer-redress.ec.europa.eu
          </a>
          .
        </li>
      </ul>

      <h2>9. Legea aplicabilă</h2>
      <p>
        Acești termeni sunt guvernați de legea română. Litigiile care nu se pot rezolva pe cale amiabilă sunt
        soluționate de instanțele competente din România.
      </p>

      <h2>10. Modificarea termenilor</h2>
      <p>
        Putem modifica acești termeni oricând. Versiunea în vigoare este cea publicată pe această pagină, cu data
        ultimei actualizări.
      </p>
    </LegalPage>
  );
}
