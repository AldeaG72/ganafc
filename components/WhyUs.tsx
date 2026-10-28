import Icon from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const reasons = [
  { icon: "shield", title: "Siguranță și conformitate", text: "Lucrăm riguros, cu verificări încrucișate, ca firma ta să fie mereu în regulă cu ANAF și ITM." },
  { icon: "clock", title: "Calendar fiscal sub control", text: "Urmărim proactiv calendarul fiscal: primești din timp documentele și obligațiile de plată." },
  { icon: "chat", title: "Un consultant dedicat", text: "Ai un singur om de contact care îți cunoaște afacerea și îți răspunde rapid." },
  { icon: "digital", title: "Flux 100% digital", text: "Documente trimise online, rapoarte clare și acces la informații oricând ai nevoie." },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">De ce GANA F&amp;A</p>
          <h2 className="section-title">Mai mult decât un birou de contabilitate</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.15}>
          {reasons.map((r) => (
            <StaggerItem key={r.title} className="group text-center sm:text-left">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-500/15 text-gold-600 transition duration-500 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 sm:mx-0">
                <Icon name={r.icon} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{r.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
