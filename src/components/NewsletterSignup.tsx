import { useState } from "react";
import { BellRing, Check, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { subscribeToNewsletter } from "@/lib/newsletter.functions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const subscribe = useServerFn(subscribeToNewsletter);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      setStatus("error");
      setMessage("Te rugăm să introduci o adresă de email validă.");
      return;
    }
    setStatus("loading");
    try {
      await subscribe({ data: { email: value, source: "landing" } });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Ceva nu a funcționat. Te rugăm să încerci din nou în câteva momente.");
      return;
    }
    setStatus("done");
    setMessage("Îți mulțumim! Te vom anunța la fiecare lansare nouă.");
    setEmail("");
  }

  return (
    <section id="anunturi" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
      <div className="rounded-3xl border border-primary/15 bg-white shadow-[var(--shadow-card)] p-6 md:p-9">
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 rounded-xl [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                <BellRing className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="font-serif tracking-[0.24em] text-[10px] font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">
                Anunțuri EvoStep
              </div>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              Vrei să afli primul când lansăm{" "}
              <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">
                misiuni și niveluri noi
              </span>
              ?
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Lasă-ne adresa ta de email și primești un mesaj scurt la fiecare lansare nouă. Fără reclame, fără mesaje zilnice — te poți dezabona oricând.
            </p>
          </div>

          <div>
            {status === "done" ? (
              <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary-soft p-5">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-foreground">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Adresa ta de email
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    placeholder="nume@exemplu.ro"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="h-12 rounded-xl bg-background"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-12 rounded-xl px-6 [background-image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Se trimite
                      </>
                    ) : (
                      "Vreau să fiu anunțat"
                    )}
                  </Button>
                </div>
                <p className={status === "error" ? "text-sm text-destructive" : "text-xs text-muted-foreground"}>
                  {status === "error"
                    ? message
                    : "Folosim adresa ta doar pentru anunțuri despre lansări. Vezi politica de confidențialitate."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}