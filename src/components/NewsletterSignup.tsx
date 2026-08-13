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
    <section id="anunturi" className="mx-auto max-w-7xl px-6 py-6 md:py-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 rounded-2xl border border-primary/15 bg-white shadow-[var(--shadow-card)] p-5 md:p-6">
        <div className="flex items-center gap-3 md:min-w-[260px]">
          <span className="h-10 w-10 shrink-0 rounded-xl [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
            <BellRing className="h-5 w-5 text-primary-foreground" />
          </span>
          <h2 className="font-serif text-lg md:text-xl font-bold leading-tight tracking-tight">
            Vrei noutăți?{" "}
            <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">
              Înscrie-te la newsletterul nostru
            </span>
          </h2>
        </div>

        <div className="flex-1">
          {status === "done" ? (
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-primary shrink-0" />
              <p className="text-sm font-medium text-foreground">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Adresa ta de email
              </label>
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
                className="h-11 rounded-xl bg-background"
                required
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-11 shrink-0 rounded-xl px-5 [background-image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Se trimite
                  </>
                ) : (
                  "Mă înscriu"
                )}
              </Button>
              {status === "error" && (
                <p className="text-sm text-destructive sm:absolute sm:-bottom-5">{message}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}