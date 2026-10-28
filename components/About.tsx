import { Reveal, Stagger, StaggerItem } from "./Motion";

const values = [
  { title: "Integritate", text: "Transparență totală în tot ce facem." },
  { title: "Precizie", text: "Fiecare cifră contează și este verificată." },
  { title: "Parteneriat", text: "Creștem împreună cu clienții noștri." },
];

export default function About() {
  return (
    <section id="despre" className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative" direction="right" distance={60}>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-8 text-white shadow-xl">
            <div className="flex h-full flex-col justify-between">
              <span className="font-serif text-6xl text-gold-400">“</span>
              <p className="font-serif text-xl leading-relaxed sm:text-2xl">
                Credem că o contabilitate bună nu înseamnă doar conformitate, ci claritate pentru decizii mai bune.
              </p>
              <p className="text-sm text-white/60">— Echipa GANA F&amp;A</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" distance={60} delay={0.15}>
          <p className="eyebrow">Despre noi</p>
          <h2 className="section-title">Rigoare, transparență și o abordare personală</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-navy-700/85">
            <p>
              GANA F&amp;A (Finance &amp; Accounting) este o firmă de contabilitate și consultanță fiscală care
              sprijină antreprenorii și companiile din România să își administreze corect și eficient finanțele.
            </p>
            <p>
              Suntem o firmă nou înființată, construită pe ideea că fiecare client merită atenție reală, explicații
              pe înțeles și servicii făcute cu grijă. Ne adresăm firmelor de toate dimensiunile — de la start-up-uri
              și PFA-uri până la companii în creștere.
            </p>
          </div>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title} className="rounded-xl border border-navy-900/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-md">
                <p className="font-semibold text-navy-900">{v.title}</p>
                <p className="mt-1 text-sm text-navy-700/75">{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
