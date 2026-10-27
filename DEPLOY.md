# Publicare pe Vercel din linia de comandă

Necesită variabilele de mediu `VERCEL_TOKEN`, `RESEND_API_KEY`, `EMAIL_TO` în mediul în care rulați.

```bash
npm install
npx vercel@latest link --yes --token "$VERCEL_TOKEN" --project gana-fc-site

for env in production preview; do
  printf '%s' "$RESEND_API_KEY" | npx vercel env add RESEND_API_KEY $env --token "$VERCEL_TOKEN"
  printf '%s' "$EMAIL_TO"       | npx vercel env add EMAIL_TO $env --token "$VERCEL_TOKEN"
  printf '%s' 'GANA F&C <onboarding@resend.dev>' | npx vercel env add EMAIL_FROM $env --token "$VERCEL_TOKEN"
done

npx vercel deploy --prod --token "$VERCEL_TOKEN"
```

Test după deploy: trimiteți o solicitare din formular folosind adresa contului Resend
(până la verificarea domeniului, Resend livrează doar către acea adresă).
