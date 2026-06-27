import { createFileRoute } from "@tanstack/react-router";
import {
  Compass,
  Users,
  ShieldCheck,
  ShoppingCart,
  Lock,
  PartyPopper,
  UserPlus,
  CheckCircle2,
  ChevronRight,
  Headphones,
  Mountain,
  Eye,
  Zap,
  Drama,
  Send,
} from "lucide-react";
import heroPortal from "@/assets/hero-portal.jpg";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import mission3 from "@/assets/mission-3.jpg";
import mission4 from "@/assets/mission-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EvoStep — Evoluție pas cu pas" },
      { name: "description", content: "O aventură de dezvoltare personală pe Discord. Misiuni progresive, comunitate activă, acces prin roluri." },
      { property: "og:title", content: "EvoStep — Evoluție pas cu pas" },
      { property: "og:description", content: "O aventură de dezvoltare personală pe Discord. Misiuni progresive, comunitate activă, acces prin roluri." },
    ],
  }),
  component: Index,
});

const DiscordIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3l-.213.232a18.06 18.06 0 0 0-5.69 0L10.443 3a19.79 19.79 0 0 0-3.76 1.369C2.7 10.118 1.595 15.687 2.143 21.18a20.04 20.04 0 0 0 5.99 2.94l.49-.68a13.4 13.4 0 0 1-2.115-.99c.177-.126.35-.257.518-.39a14.34 14.34 0 0 0 12.748 0c.168.133.34.264.518.39-.673.394-1.38.728-2.116.99l.49.68a20.04 20.04 0 0 0 5.991-2.94c.625-6.39-1.067-11.91-3.84-16.811ZM8.69 17.044c-1.18 0-2.156-1.082-2.156-2.41 0-1.327.956-2.41 2.156-2.41 1.21 0 2.177 1.093 2.156 2.41 0 1.328-.956 2.41-2.156 2.41Zm6.62 0c-1.18 0-2.155-1.082-2.155-2.41 0-1.327.955-2.41 2.155-2.41 1.21 0 2.177 1.093 2.156 2.41 0 1.328-.946 2.41-2.156 2.41Z" />
  </svg>
);

const navLinks = [
  { label: "Despre EvoStep", href: "#despre" },
  { label: "Cum funcționează", href: "#cum" },
  { label: "Misiunile", href: "#misiuni" },
  { label: "Întrebări frecvente", href: "#faq" },
];

const steps = [
  { n: 1, title: "Nu ai cont Discord?", desc: "Urmărește video-ul de mai jos și creează-ți contul Discord în 2 minute.", icon: UserPlus, cta: { label: "Vezi tutorial", variant: "ghost" as const } },
  { n: 2, title: "Intră pe server", desc: "Alătură-te serverului EvoStep. Acolo vei primi rolul de Vizitator.", icon: DiscordIcon, cta: { label: "Intră pe Discord", variant: "primary" as const } },
  { n: 3, title: "Acceptă regulamentul", desc: "La intrare vei vedea un pop-up cu regulamentul comunității. Te rugăm să îl accepți.", icon: ShieldCheck },
  { n: 4, title: "Alege o misiune", desc: "Selectează misiunea care rezonează cu tine și efectuează plata în siguranță.", icon: ShoppingCart, cta: { label: "Vezi misiunile", variant: "ghost" as const } },
  { n: 5, title: "Plata confirmată", desc: "După confirmarea plății, vei primi automat rolul și accesul la canalele misiunii tale.", icon: Lock },
  { n: 6, title: "Acces activat", desc: "Revino în Discord și bucură-te de misiune! Ești gata să începi transformarea.", icon: PartyPopper, ctaNote: "Simplu și rapid!" },
];

const missions = [
  { name: "Hoțul de Roluri", desc: "Descoperă și schimbă rolurile care te țin pe loc.", level: "Misiunea 1", price: 29, img: mission1, icon: Drama },
  { name: "Operatorul Secret", desc: "Învață să acționezi strategic și să obții rezultate.", level: "Misiunea 2", price: 39, img: mission2, icon: Eye },
  { name: "Superputerea", desc: "Activează-ți puterea interioară și creează-ți realitatea.", level: "Misiunea 3", price: 49, img: mission3, icon: Zap },
  { name: "Nucleul Secret", desc: "Acces la nucleul profund al transformării tale.", level: "Misiunea 4", price: 59, img: mission4, icon: Mountain },
];

const trust = [
  { icon: ShieldCheck, t: "Acces securizat", s: "prin roluri" },
  { icon: Users, t: "Comunitate activă", s: "și suport real" },
  { icon: Lock, t: "Permisiuni clare,", s: "doar unde ai acces" },
  { icon: Headphones, t: "Mentorat și", s: "cabinete de voce" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-soft shadow-[var(--shadow-glow)] flex items-center justify-center">
        <Compass className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
      </div>
      <div className="leading-tight">
        <div className="font-serif text-2xl font-bold text-foreground tracking-tight">EvoStep</div>
        <div className="text-[9px] tracking-[0.18em] text-primary font-semibold">EVOLUȚIE PAS CU PAS</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="bg-[var(--gradient-hero)]">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between gap-6">
          <Logo />
          <ul className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition">
            <DiscordIcon className="h-4 w-4" /> Intră pe Discord
          </a>
        </nav>

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 pt-6 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Bine ai venit în
              <span className="block text-primary">EvoStep!</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              O aventură de dezvoltare personală,<br />în care fiecare misiune te transformă.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Users, label: "Misiuni progresive" },
                { icon: Compass, label: "Comunitate activă" },
                { icon: Lock, label: "Acces doar prin roluri" },
              ].map((f) => (
                <li key={f.label} className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-primary-soft flex items-center justify-center">
                    <f.icon className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-foreground/85">{f.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 max-w-md rounded-2xl bg-primary-soft/70 backdrop-blur p-5 flex items-center gap-4 shadow-[var(--shadow-card)]">
              <div>
                <div className="font-semibold text-foreground">Totul se întâmplă în Discord.</div>
                <div className="text-sm text-muted-foreground mt-0.5">Intră, alege o misiune și începe-ți transformarea.</div>
              </div>
              <div className="ml-auto h-11 w-11 shrink-0 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center">
                <DiscordIcon className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-glow)] aspect-[4/5] lg:aspect-[5/6]">
              <img src={heroPortal} alt="Călătoare în fața portalului EvoStep" width={1280} height={960} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 lg:left-auto lg:-right-4 bg-card rounded-2xl shadow-[var(--shadow-card)] px-5 py-3.5 flex items-center gap-3 max-w-[260px]">
              <span className="h-10 w-10 rounded-full bg-warning/20 flex items-center justify-center">
                <Compass className="h-5 w-5 text-warning" />
              </span>
              <div className="text-sm leading-tight">
                <div className="font-semibold">Tu ești busola.</div>
                <div className="text-muted-foreground">Noi îți oferim harta.</div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* HOW IT WORKS */}
      <section id="cum" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-px w-12 bg-primary/40" />
          <h2 className="text-center font-serif tracking-[0.2em] text-sm font-bold text-foreground">CUM FUNCȚIONEAZĂ</h2>
          <span className="h-px w-12 bg-primary/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="h-full rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)] flex flex-col">
                <div className="mx-auto h-10 w-10 rounded-full bg-[var(--gradient-primary)] text-primary-foreground font-bold flex items-center justify-center text-sm">{s.n}</div>
                <div className="mt-5 mx-auto h-16 w-16 rounded-2xl bg-primary-soft flex items-center justify-center">
                  <s.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-center font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-center text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                {s.cta && (
                  <button className={`mt-4 mx-auto rounded-lg px-4 py-2 text-xs font-medium transition ${s.cta.variant === "primary" ? "bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]" : "border border-primary/30 text-primary hover:bg-primary-soft"}`}>
                    {s.cta.label}
                  </button>
                )}
                {s.ctaNote && (
                  <div className="mt-4 mx-auto inline-flex items-center gap-1.5 text-xs font-medium text-success">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {s.ctaNote}
                  </div>
                )}
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 h-5 w-5 text-primary/40" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MISSIONS */}
      <section id="misiuni" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="h-px w-12 bg-primary/40" />
          <h2 className="text-center font-serif tracking-[0.2em] text-sm font-bold text-foreground">MISIUNILE NIVELULUI 1</h2>
          <span className="h-px w-12 bg-primary/40" />
        </div>
        <p className="text-center text-sm text-muted-foreground mb-10">4 misiuni · câte 1 pe săptămână</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((m) => (
            <article key={m.name} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} width={768} height={576} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2">
                  <m.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-xl font-bold text-primary">{m.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{m.desc}</p>
                <div className="mt-5 flex items-end justify-between">
                  <span className="rounded-md bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary">{m.level}</span>
                  <div className="font-serif text-3xl font-bold text-warning">
                    {m.price}<span className="text-xs text-muted-foreground font-sans ml-1 tracking-wider">RON</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TRUST BAR */}
        <div className="mt-10 rounded-2xl bg-primary-soft/50 px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.t} className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-card flex items-center justify-center shadow-[var(--shadow-card)]">
                <t.icon className="h-5 w-5 text-primary" />
              </span>
              <div className="text-sm leading-tight">
                <div className="font-medium text-foreground">{t.t}</div>
                <div className="text-muted-foreground">{t.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-primary-soft/60 px-8 py-8 flex flex-col lg:flex-row items-center gap-6">
          <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)] shrink-0">
            <DiscordIcon className="h-7 w-7 text-primary-foreground" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-serif text-2xl font-bold">Ești gata să începi?</h3>
            <p className="text-muted-foreground text-sm mt-1">Intră pe Discord și începe-ți misiunea!</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-7 py-3.5 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition">
            Intră pe Discord <Send className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Devino cea mai bună versiune a ta.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Linkuri utile</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#despre" className="hover:text-primary">Despre EvoStep</a></li>
              <li><a href="#faq" className="hover:text-primary">Întrebări frecvente</a></li>
              <li><a href="#cta" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Ai nevoie de ajutor?</h4>
            <p className="text-sm text-muted-foreground">Scrie-ne pe Discord sau pe email:</p>
            <a href="mailto:contact@evostep.ro" className="mt-1 inline-block text-sm font-medium text-primary hover:underline">contact@evostep.ro</a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} EvoStep. Toate drepturile rezervate.</div>
      </footer>
    </div>
  );
}
