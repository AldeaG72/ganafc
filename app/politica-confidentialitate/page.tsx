import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Cum prelucrează GANA F&A datele cu caracter personal, conform GDPR.",
};

// Text-cadru — trebuie revizuit de firmă înainte de a fi considerat final.
export default function Politica() {
  const c = site.company;
  return (
    <LegalPage eyebrow="GDPR" title="Politica de confidențialitate" updated="28 octombrie 2026">
      <p>
        Această politică explică modul în care <strong>{c.name}</strong> („GANA F&amp;A”, „noi”) colectează și
        prelucrează datele cu caracter personal ale persoanelor care vizitează site-ul{" "}
        <Link href="/">ganaaccounting.ro</Link> sau ne contactează. Prelucrarea se face în conformitate cu
        Regulamentul (UE) 2016/679 (GDPR) și cu legislația română aplicabilă.
      </p>

      <h2>1. Operatorul de date</h2>
      <ul>
        <li>{c.name}, CUI {c.cui}, nr. Registrul Comerțului {c.regCom}</li>
        <li>Sediu: {c.seat}</li>
        <li>
          Email: <a href={`mailto:${site.email}`}>{site.email}</a> · Telefon:{" "}
          <a href={site.phoneHref}>{site.phone}</a>
        </li>
      </ul>

      <h2>2. Ce date prelucrăm</h2>
      <ul>
        <li>
          <strong>Datele din formularul „Solicită ofertă”:</strong> nume, prenume, număr de telefon, adresă de
          email, numele și CUI-ul firmei, serviciul dorit și mesajul transmis.
        </li>
        <li>
          <strong>Corespondența:</strong> datele din emailurile sau apelurile prin care ne contactați direct.
        </li>
        <li>
          <strong>Date tehnice:</strong> la accesarea site-ului, serverele furnizorului de găzduire înregistrează
          automat date precum adresa IP, tipul browserului și momentul accesării, pentru funcționarea și
          securitatea site-ului.
        </li>
      </ul>
      <p>
        <strong>Statistici de vizitare:</strong> folosim Vercel Web Analytics pentru a afla câte persoane vizitează
        site-ul, ce pagini sunt accesate și din ce țară sau de pe ce tip de dispozitiv. Serviciul nu folosește
        cookie-uri, nu creează profiluri și nu permite identificarea vizitatorilor; datele sunt agregate și anonime.
      </p>
      <p>
        Site-ul nu folosește cookie-uri de marketing și nu urmărește comportamentul vizitatorilor în scop
        publicitar.
      </p>

      <h2>3. Scopurile și temeiul prelucrării</h2>
      <ul>
        <li>
          <strong>Răspunsul la solicitarea de ofertă și comunicarea ulterioară</strong>, pe baza demersurilor
          făcute la cererea dumneavoastră înainte de încheierea unui contract (art. 6 alin. (1) lit. b GDPR) și a
          consimțământului exprimat în formular (art. 6 alin. (1) lit. a GDPR).
        </li>
        <li>
          <strong>Funcționarea și securitatea site-ului</strong>, inclusiv prevenirea abuzurilor și a mesajelor
          automate, pe baza interesului nostru legitim (art. 6 alin. (1) lit. f GDPR).
        </li>
        <li>
          <strong>Îndeplinirea obligațiilor legale</strong>, dacă devenim parteneri contractuali (de exemplu,
          obligații contabile și fiscale), conform art. 6 alin. (1) lit. c GDPR.
        </li>
      </ul>

      <h2>4. Cui transmitem datele</h2>
      <p>
        Nu vindem și nu închiriem datele dumneavoastră. Le pot accesa doar furnizorii tehnici care ne ajută să
        operăm site-ul și comunicarea, în calitate de persoane împuternicite, pe baza unor contracte care le
        obligă să protejeze datele:
      </p>
      <ul>
        <li>Vercel Inc. – găzduirea site-ului și statisticile anonime de vizitare;</li>
        <li>Resend – transmiterea emailurilor generate de formularul de ofertă;</li>
        <li>Google (Google Workspace) – serviciul de email al firmei.</li>
      </ul>
      <p>
        Unii dintre acești furnizori pot prelucra date în afara Spațiului Economic European (de exemplu, în
        SUA). În aceste cazuri, transferul se face pe baza garanțiilor prevăzute de GDPR, precum clauzele
        contractuale standard aprobate de Comisia Europeană sau cadrul UE–SUA privind confidențialitatea datelor.
      </p>
      <p>Putem divulga date autorităților publice doar atunci când legea ne obligă.</p>

      <h2>5. Cât timp păstrăm datele</h2>
      <ul>
        <li>
          Solicitările de ofertă care nu se finalizează cu un contract: cel mult <strong>12 luni</strong> de la
          ultima comunicare.
        </li>
        <li>
          Datele clienților: pe durata contractului și ulterior, pe perioadele impuse de legislația contabilă și
          fiscală.
        </li>
        <li>Datele tehnice de acces: pe perioade scurte, stabilite de furnizorul de găzduire.</li>
      </ul>

      <h2>6. Drepturile dumneavoastră</h2>
      <p>Conform GDPR, aveți următoarele drepturi:</p>
      <ul>
        <li>dreptul de acces la datele prelucrate;</li>
        <li>dreptul la rectificarea datelor inexacte;</li>
        <li>dreptul la ștergerea datelor („dreptul de a fi uitat”);</li>
        <li>dreptul la restricționarea prelucrării;</li>
        <li>dreptul la portabilitatea datelor;</li>
        <li>dreptul de opoziție;</li>
        <li>dreptul de a vă retrage oricând consimțământul, fără a afecta legalitatea prelucrării anterioare.</li>
      </ul>
      <p>
        Pentru exercitarea acestor drepturi ne puteți scrie la <a href={`mailto:${site.email}`}>{site.email}</a>.
        Vă răspundem în cel mult o lună de la primirea cererii.
      </p>
      <p>
        Aveți și dreptul de a depune o plângere la{" "}
        <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>
        , B-dul G-ral. Gheorghe Magheru nr. 28-30, sector 1, București,{" "}
        <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer">
          www.dataprotection.ro
        </a>
        .
      </p>

      <h2>7. Securitatea datelor</h2>
      <p>
        Folosim măsuri tehnice și organizatorice adecvate pentru a proteja datele: conexiune criptată (HTTPS),
        acces restricționat la date și furnizori care respectă standarde de securitate recunoscute.
      </p>

      <h2>8. Modificări ale politicii</h2>
      <p>
        Putem actualiza această politică atunci când se schimbă modul în care prelucrăm datele sau legislația.
        Versiunea în vigoare este întotdeauna cea publicată pe această pagină, cu data ultimei actualizări.
      </p>

      <p>
        Vezi și <Link href="/termeni-si-conditii">Termenii și condițiile</Link> de utilizare a site-ului.
      </p>
    </LegalPage>
  );
}
