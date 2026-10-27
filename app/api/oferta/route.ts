import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteSchema } from "@/lib/schema";
import { clientEmail, companyEmail } from "@/emails/templates";

// Limitare simplă per IP (în memoria instanței serverless — suficient ca protecție de bază).
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Cerere invalidă." }, { status: 400 });
  }

  // Honeypot completat => robot. Răspundem „succes” fără să trimitem nimic.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { message: "Prea multe solicitări. Vă rugăm încercați mai târziu sau sunați-ne." },
      { status: 429 },
    );
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0])] ??= issue.message;
    return NextResponse.json({ message: "Verificați câmpurile marcate.", errors }, { status: 400 });
  }
  const data = parsed.data;

  const { RESEND_API_KEY, EMAIL_FROM, EMAIL_TO } = process.env;
  if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
    console.error("Lipsesc variabilele de mediu RESEND_API_KEY / EMAIL_FROM / EMAIL_TO.");
    return NextResponse.json(
      { message: "Serviciul de email nu este configurat. Vă rugăm să ne contactați telefonic." },
      { status: 500 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  const toCompany = companyEmail(data);
  const companyRes = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO.split(",").map((s) => s.trim()),
    replyTo: data.email,
    ...toCompany,
  });
  if (companyRes.error) {
    console.error("Eroare trimitere email firmă:", companyRes.error);
    return NextResponse.json(
      { message: "Solicitarea nu a putut fi trimisă. Vă rugăm încercați din nou sau sunați-ne." },
      { status: 502 },
    );
  }

  // Solicitarea a ajuns la firmă; o eroare la confirmare doar se loghează.
  const toClient = clientEmail(data);
  const clientRes = await resend.emails.send({
    from: EMAIL_FROM,
    to: data.email,
    replyTo: EMAIL_TO.split(",")[0].trim(),
    ...toClient,
  });
  if (clientRes.error) console.error("Eroare trimitere confirmare client:", clientRes.error);

  return NextResponse.json({ ok: true });
}
