import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import img1 from "@/assets/guide-discord-1.jpg";
import img2 from "@/assets/guide-discord-2.jpg";
import img3 from "@/assets/guide-discord-3.jpg";
import img4 from "@/assets/guide-discord-4.jpg";
import img5 from "@/assets/guide-discord-5.jpg";

export const Route = createFileRoute("/ghid/cont-discord")({
  head: () => ({
    meta: [
      { title: "Cum îți creezi cont Discord — Ghid pas cu pas | EvoStep" },
      { name: "description", content: "Ghid vizual, pas cu pas, pentru crearea unui cont Discord. Poze la fiecare etapă, în câteva minute." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: GhidContDiscord,
});

const guideSteps = [
  {
    n: 1,
    title: "Deschide pagina Discord",
    desc: "Accesează discord.com/register din orice browser (Chrome, Firefox, Safari, Edge, Opera etc.). Funcționează la fel pe telefon și pe calculator.",
    img: img1,
  },
  {
    n: 2,
    title: "Completează datele",
    desc: "Introdu adresa de e-mail, un nume de utilizator și o parolă. Alege un nume cu care vrei să te prezinți în comunitate.",
    img: img2,
  },
  {
    n: 3,
    title: "Confirmă data nașterii",
    desc: "Discord îți va cere să confirmi că ai peste 13 ani. Selectează data corectă și apasă „Continuă”.",
    img: img3,
  },
  {
    n: 4,
    title: "Verifică e-mailul",
    desc: "Deschide căsuța de e-mail și apasă butonul „Verify Email” din mesajul primit de la Discord. Fără acest pas, contul rămâne inactiv.",
    img: img4,
  },
  {
    n: 5,
    title: "Gata! Revino la pași",
    desc: "După verificare, contul tău e activ. Nu trebuie să cauți serverul manual: revino pe pagina principală și apasă butonul „Apasă și intră direct” de la pasul 2 — te va duce direct pe serverul EvoStep cu rolul de Vizitator.",
    img: img5,
  },
];

function GhidContDiscord() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          to="/"
          hash="cum"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Înapoi la pagina principală
        </Link>

        <header className="mt-8 mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Ghid pas cu pas</p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl font-bold tracking-tight">
            Cum îți creezi <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">cont Discord</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Un ghid vizual, simplu și rapid. Durează aproximativ 2 minute.
          </p>
        </header>

        <ol className="space-y-6">
          {guideSteps.map((s) => (
            <li key={s.n} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden">
              <div className="bg-muted border-b border-border">
                <img
                  src={s.img}
                  alt={`Pas ${s.n}: ${s.title}`}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-full [background-image:var(--gradient-primary)] text-primary-foreground font-bold flex items-center justify-center text-xs">
                    {s.n}
                  </span>
                  <h2 className="font-semibold text-base text-foreground">{s.title}</h2>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
            <p className="text-sm md:text-base text-foreground font-medium">
              Ai contul gata? Perfect. Continuă cu pasul 2.
            </p>
          </div>
          <Link
            to="/"
            hash="cum"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold [background-image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]"
          >
            Continuă
          </Link>
        </div>
      </div>
    </div>
  );
}