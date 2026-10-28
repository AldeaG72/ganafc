import { logoGold, logoInk, logoSub, logoViewBox } from "./logo-paths";

export default function Logo({ light = false, className = "h-9 w-auto sm:h-10" }: { light?: boolean; className?: string }) {
  return (
    <svg viewBox={logoViewBox} className={className} role="img" aria-label="GANA F&A – Finance & Accounting">
      <path d={logoInk} fill={light ? "#FFFFFF" : "#0B1F3A"} />
      <path d={logoGold} fill={light ? "#D4B26A" : "#C9A24D"} />
      <path d={logoSub} fill={light ? "#FFFFFF" : "#0B1F3A"} fillOpacity={light ? 0.85 : 1} />
    </svg>
  );
}
