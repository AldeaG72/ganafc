import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import { team } from "@/lib/team";

export default function Team() {
  return (
    <section id="echipa" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Echipa</p>
          <h2 className="section-title">Echipa GANA F&amp;A</h2>
          <p className="mt-4 leading-relaxed text-navy-700/85">
            Oamenii care se ocupă de contabilitatea, fiscalitatea, resursele umane și salarizarea firmei tale.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-14 sm:gap-8 lg:grid-cols-4">
          {team.map((m) => {
            const [title, ...rest] = m.role.split("|").map((s) => s.trim());
            return (
              <StaggerItem key={m.name} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-cream shadow-md ring-1 ring-navy-900/5 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image
                    src={m.photo}
                    alt={`${m.name} – ${m.role}`}
                    width={320}
                    height={400}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-500 transition duration-500 group-hover:scale-x-100" />
                </div>
                <div className="mt-4 text-center sm:mt-5">
                  <h3 className="font-serif text-base font-semibold leading-snug text-navy-900 sm:text-xl">{m.name}</h3>
                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-gold-600 sm:text-xs">{title}</p>
                  {rest.length > 0 && <p className="mt-0.5 text-xs text-navy-700/75 sm:text-sm">{rest.join(" · ")}</p>}
                  {m.bio?.map((p) => (
                    <p key={p} className="mt-3 text-sm leading-relaxed text-navy-700/85">
                      {p}
                    </p>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
