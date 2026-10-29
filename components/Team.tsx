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

        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-6 sm:mt-14 sm:gap-8">
          {team.map((m) => {
            const [title, ...rest] = m.role.split("|").map((s) => s.trim());
            return (
              <StaggerItem
                key={m.name}
                className="group flex flex-col gap-6 rounded-2xl bg-cream p-5 ring-1 ring-navy-900/5 transition duration-500 hover:shadow-xl sm:flex-row sm:items-start sm:p-7"
              >
                <div className="relative mx-auto w-full max-w-[260px] shrink-0 overflow-hidden rounded-xl shadow-md sm:mx-0 sm:w-48 lg:w-56">
                  <Image
                    src={m.photo}
                    alt={`${m.name} – ${m.role}`}
                    width={480}
                    height={600}
                    sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 260px"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-500 transition duration-500 group-hover:scale-x-100" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl font-semibold text-navy-900">{m.name}</h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {title}
                    {rest.length > 0 && <span className="font-normal normal-case tracking-normal text-navy-700/75"> · {rest.join(" · ")}</span>}
                  </p>
                  <span className="mt-4 block h-0.5 w-10 bg-gold-500" />
                  {m.bio?.map((p) => (
                    <p key={p} className="mt-4 text-[15px] leading-relaxed text-navy-700/85">
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
