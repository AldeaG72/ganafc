# GANA F&C — site de prezentare

Next.js 15 + Tailwind CSS. Formularul „Solicită ofertă” trimite prin [Resend](https://resend.com):
1. un email cu solicitarea către firmă (`EMAIL_TO`, cu Reply-To = emailul clientului);
2. un email de confirmare către client.

## Rulare locală
```bash
npm install
cp .env.example .env.local   # completați valorile
npm run dev                  # http://localhost:3000
```

## Unde se modifică conținutul
| Ce | Fișier |
|---|---|
| Telefon, email, adresă, program, CUI | `lib/site.ts` |
| Servicii (carduri) și opțiunile din formular | `lib/services.ts` |
| Texte secțiuni | `components/Hero.tsx`, `WhyUs.tsx`, `About.tsx`, `Contact.tsx` |
| Șabloanele emailurilor | `emails/templates.ts` |
| Politica de confidențialitate | `app/politica-confidentialitate/page.tsx` |

Textele sunt **demo** — înlocuiți-le cu informațiile reale (cifre, certificări, CUI) înainte de lansare.

## Publicare pe Vercel
1. Urcați proiectul într-un repo GitHub.
2. Pe [vercel.com](https://vercel.com) → *Add New → Project* → importați repo-ul (setările implicite Next.js).
3. *Settings → Environment Variables*: adăugați `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`.
4. *Deploy*.

## Configurare Resend
1. Creați cont pe resend.com și o cheie API (*API Keys*).
2. **Înainte de domeniu**: `EMAIL_FROM="GANA F&C <onboarding@resend.dev>"`. Atenție: în acest mod Resend
   livrează emailuri **doar către adresa cu care v-ați înregistrat**, deci confirmarea către clienți nu va
   funcționa încă — bun doar pentru test.
3. **După cumpărarea domeniului** (ex. `ganafc.ro`): Resend → *Domains → Add domain*, adăugați la registrar
   înregistrările DNS afișate (SPF, DKIM), așteptați statusul *Verified*, apoi schimbați în Vercel
   `EMAIL_FROM="GANA F&C <oferte@ganafc.ro>"` și faceți redeploy.
4. În Vercel → *Settings → Domains* conectați domeniul la site.

## Anti-spam
- câmp ascuns (honeypot) — roboții care îl completează primesc „succes” fără să se trimită nimic;
- maxim 5 solicitări / oră / IP (`app/api/oferta/route.ts`).
