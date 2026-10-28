import { z } from "zod";
import { quoteOptions } from "./services";

// Mesaj în română pentru câmpurile lipsă din cerere.
z.setErrorMap((issue, ctx) =>
  issue.code === "invalid_type" && issue.received === "undefined"
    ? { message: "Câmp obligatoriu." }
    : { message: ctx.defaultError },
);

export const quoteSchema = z.object({
  nume: z.string().trim().min(2, "Introduceți numele.").max(60),
  prenume: z.string().trim().min(2, "Introduceți prenumele.").max(60),
  telefon: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s().-]{9,20}$/, "Introduceți un număr de telefon valid."),
  email: z.string().trim().email("Introduceți o adresă de email validă.").max(120),
  companie: z.string().trim().max(120).optional().default(""),
  // CUI opțional: 2–10 cifre, cu sau fără prefixul RO
  cui: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^$|^(RO)?\s?\d{2,10}$/, "Introduceți un CUI valid (ex.: RO12345678 sau 12345678).")
    .transform((v) => v.replace(/\s+/g, ""))
    .optional()
    .default(""),
  serviciu: z.enum(quoteOptions, {
    errorMap: () => ({ message: "Alegeți serviciul dorit." }),
  }),
  mesaj: z
    .string()
    .trim()
    .min(10, "Mesajul trebuie să aibă cel puțin 10 caractere.")
    .max(3000, "Mesajul este prea lung."),
  gdpr: z.literal(true, {
    errorMap: () => ({ message: "Este necesar acordul pentru prelucrarea datelor." }),
  }),
  // Honeypot: trebuie să rămână gol
  website: z.string().optional().default(""),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
