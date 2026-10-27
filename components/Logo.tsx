export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-gold-500 font-serif text-lg font-bold text-navy-950">
        G
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-lg font-semibold ${light ? "text-white" : "text-navy-900"}`}>
          GANA <span className="text-gold-500">F&amp;A</span>
        </span>
        <span className={`block text-[10px] uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-navy-700/70"}`}>
          Finance &amp; Accounting
        </span>
      </span>
    </span>
  );
}
