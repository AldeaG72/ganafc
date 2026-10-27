import type { QuoteInput } from "@/lib/schema";
import { site } from "@/lib/site";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const NAVY = "#0B1F3A";
const GOLD = "#C9A24D";

function layout(title: string, body: string) {
  return `<!doctype html>
<html lang="ro"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background:#F8F6F1;font-family:Arial,Helvetica,sans-serif;color:${NAVY};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8F6F1;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
<tr><td style="background:${NAVY};padding:24px 32px;">
  <span style="font-family:Georgia,serif;font-size:22px;font-weight:bold;color:#ffffff;">GANA <span style="color:${GOLD};">F&amp;C</span></span><br>
  <span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#ffffffa0;">Finance &amp; Accounting</span>
</td></tr>
<tr><td style="padding:32px;font-size:15px;line-height:1.6;">${body}</td></tr>
<tr><td style="background:#F8F6F1;padding:20px 32px;font-size:12px;color:#5b6577;">
  ${esc(site.fullName)} · ${esc(site.phone)} · ${esc(site.email)}<br>${esc(site.address)}
</td></tr>
</table></td></tr></table></body></html>`;
}

function detailsTable(d: QuoteInput) {
  const rows: [string, string][] = [
    ["Nume", d.nume],
    ["Prenume", d.prenume],
    ["Telefon", d.telefon],
    ["Email", d.email],
    ["Companie", d.companie || "—"],
    ["Serviciu dorit", d.serviciu],
  ];
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:16px 0;">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;width:140px;color:#5b6577;font-size:13px;">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">${esc(v)}</td></tr>`,
  )
  .join("")}
</table>
<p style="margin:16px 0 6px;color:#5b6577;font-size:13px;">Mesaj</p>
<div style="background:#F8F6F1;border-left:3px solid ${GOLD};padding:12px 16px;white-space:pre-wrap;">${esc(d.mesaj)}</div>`;
}

export function companyEmail(d: QuoteInput) {
  const subject = `Solicitare ofertă nouă: ${d.serviciu} — ${d.prenume} ${d.nume}`;
  const html = layout(
    subject,
    `<h1 style="font-family:Georgia,serif;font-size:22px;margin:0 0 8px;">Solicitare de ofertă nouă</h1>
<p style="margin:0;">A fost primită o solicitare prin formularul de pe site. Puteți răspunde direct la acest email pentru a-i scrie clientului.</p>
${detailsTable(d)}
<p style="font-size:12px;color:#5b6577;margin-top:24px;">Clientul și-a dat acordul pentru prelucrarea datelor personale în scopul ofertării.</p>`,
  );
  const text = `Solicitare ofertă nouă
Nume: ${d.nume}
Prenume: ${d.prenume}
Telefon: ${d.telefon}
Email: ${d.email}
Companie: ${d.companie || "-"}
Serviciu: ${d.serviciu}

Mesaj:
${d.mesaj}`;
  return { subject, html, text };
}

export function clientEmail(d: QuoteInput) {
  const subject = "Am primit solicitarea dumneavoastră — GANA F&C";
  const html = layout(
    subject,
    `<h1 style="font-family:Georgia,serif;font-size:22px;margin:0 0 16px;">Bună ziua, ${esc(d.prenume)}!</h1>
<p>Vă mulțumim că ați contactat <strong>GANA F&amp;C</strong>. Am primit solicitarea dumneavoastră de ofertă, iar un consultant vă va contacta în cel mult <strong>o zi lucrătoare</strong>.</p>
<p style="margin-top:24px;font-weight:bold;">Rezumatul solicitării:</p>
${detailsTable(d)}
<p style="margin-top:24px;">Dacă doriți să adăugați informații, ne puteți suna la <a href="${site.phoneHref}" style="color:${NAVY};">${esc(site.phone)}</a> sau ne puteți scrie la <a href="mailto:${site.email}" style="color:${NAVY};">${esc(site.email)}</a>.</p>
<p style="margin-top:24px;">Cu stimă,<br><strong>Echipa GANA F&amp;C</strong></p>`,
  );
  const text = `Bună ziua, ${d.prenume}!

Vă mulțumim că ați contactat GANA F&C. Am primit solicitarea dumneavoastră de ofertă (${d.serviciu}), iar un consultant vă va contacta în cel mult o zi lucrătoare.

Telefon: ${site.phone}
Email: ${site.email}

Cu stimă,
Echipa GANA F&C`;
  return { subject, html, text };
}
