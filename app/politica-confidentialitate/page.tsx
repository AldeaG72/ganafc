import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Politica de confidențialitate" };

// Text-cadru demo — trebuie revizuit și adaptat de firmă înainte de publicare.
export default function Politica() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">GDPR</p>
        <h1 className="section-title">Politica de confidențialitate</h1>
        <div className="mt-8 space-y-6 leading-relaxed text-navy-700/90 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy-900">
          <p>
            {site.legal.split(" · ")[0]} („GANA F&amp;A”, „noi”) prelucrează datele cu caracter personal în
            conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.
          </p>
          <h2>Ce date colectăm</h2>
          <p>
            Prin formularul „Solicită ofertă” colectăm: nume, prenume, număr de telefon, adresă de email,
            denumirea companiei, serviciul dorit și mesajul transmis.
          </p>
          <h2>Scopul și temeiul prelucrării</h2>
          <p>
            Datele sunt folosite exclusiv pentru a răspunde solicitării dumneavoastră și pentru a vă transmite o
            ofertă, pe baza consimțământului (art. 6 alin. 1 lit. a GDPR) și a demersurilor precontractuale
            (art. 6 alin. 1 lit. b GDPR).
          </p>
          <h2>Durata stocării</h2>
          <p>
            Păstrăm datele pe durata necesară ofertării și cel mult 12 luni de la ultima interacțiune, dacă nu
            se încheie un contract.
          </p>
          <h2>Destinatari</h2>
          <p>
            Datele nu sunt vândute sau transmise terților în scop de marketing. Pot fi procesate de furnizori
            tehnici (găzduire web, serviciu de trimitere email) care acționează ca persoane împuternicite.
          </p>
          <h2>Drepturile dumneavoastră</h2>
          <p>
            Aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate, opoziție și de
            retragere a consimțământului, precum și dreptul de a depune plângere la ANSPDCP. Pentru exercitarea
            drepturilor ne puteți scrie la{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-navy-900 underline decoration-gold-500">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
