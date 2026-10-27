# Configurația DNS – ganaaccounting.ro

`ganaaccounting.ro.zone` conține toate înregistrările DNS pentru email ale domeniului.
Sunt înregistrări publice, fără secrete:

- **Google Workspace** (office@): MX `smtp.google.com`, SPF, DKIM `google._domainkey`
- **Resend** (emailurile din formularul site-ului): `resend._domainkey`, `send` (MX + TXT), `rsend` (CNAME)
- **DMARC**: `_dmarc`

Înregistrările pentru site (ganaaccounting.ro și www) le administrează Vercel automat și nu sunt în fișier.

## Restaurare
Vercel → Domains → ganaaccounting.ro → **Upload Zone File** → alegeți `ganaaccounting.ro.zone`.

**Atenție:** încărcarea unui fișier poate înlocui toate înregistrările existente.
Încărcați doar acest fișier complet. O înregistrare nouă se adaugă de mână în
formularul DNS Records din Vercel și apoi se trece și în acest fișier.
