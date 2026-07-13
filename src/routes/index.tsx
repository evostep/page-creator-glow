import { createFileRoute, Link } from "@tanstack/react-router";
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
  VenetianMask,
  UsersRound,
  Sparkles,
} from "lucide-react";
import evostepLogo from "@/assets/evostep-logo.asset.json";
import heroPortal from "@/assets/hero-portal.jpg";
import mission1 from "@/assets/mission-1.jpg";
import mission2 from "@/assets/mission-2.jpg";
import mission3 from "@/assets/mission-3.jpg";
import mission4 from "@/assets/mission-4.jpg";
import hartaEvostep from "@/assets/harta-evostep.png.asset.json";

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
  { n: 1, title: "Nu ai cont Discord?", desc: "Creează-ți contul Discord în câțiva pași simpli, cu poze la fiecare etapă.", icon: UserPlus, cta: { label: "Vezi pașii", variant: "primary" as const, href: "/ghid/cont-discord" } },
  { n: 2, title: "Intră pe server", desc: "Alătură-te serverului EvoStep. Acolo vei primi rolul de Vizitator.", icon: DiscordIcon, cta: { label: "Continuă", variant: "primary" as const, href: "https://discord.gg/" } },
  { n: 3, title: "Acceptă regulamentul", desc: "La intrare vei vedea un pop-up cu regulamentul comunității. Te rugăm să îl accepți.", icon: CheckCircle2, cta: { label: "Am citit", variant: "primary" as const, href: undefined } },
  { n: 4, title: "Alege o misiune", desc: "Selectează misiunea care rezonează cu tine și efectuează plata în siguranță.", icon: ShoppingCart, cta: { label: "Vezi misiunile", variant: "primary" as const, href: undefined } },
  { n: 5, title: "Plata confirmată", desc: "După confirmarea plății, vei primi automat rolul și accesul la canalele misiunii tale.", icon: VenetianMask, cta: { label: "Stripe", variant: "primary" as const, href: undefined } },
  { n: 6, title: "Acces activat", desc: "Revino în Discord și bucură-te de misiune! Ești gata să începi transformarea.", icon: Sparkles, cta: { label: "Simplu și rapid", variant: "primary" as const, href: undefined } },
];

const missions = [
  { name: "Hoțul de Roluri", desc: "Descoperă cine ești dincolo de rolurile tale.", level: "Misiunea 1", price: 29, img: mission1, icon: Drama },
  { name: "Operatorul Secret", desc: "Descoperă ce te îndepărtează de tine.", level: "Misiunea 2", price: 39, img: mission2, icon: Eye },
  { name: "Superputerea", desc: "Recuperează fragmentele Superputerii tale.", level: "Misiunea 3", price: 49, img: mission3, icon: Zap },
  { name: "Busola Interioară", desc: "Construiește-ți Busola Personală.", level: "Misiunea 4", price: 59, img: mission4, icon: Mountain },
];

const trust = [
  { icon: VenetianMask, t: "Acces securizat", s: "prin roluri" },
  { icon: UsersRound, t: "Comunitate activă", s: "și suport real" },
  { icon: Drama, t: "Permisiuni clare,", s: "doar unde ai acces" },
  { icon: Headphones, t: "Mentorat și", s: "cabinete de voce" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img src={evostepLogo.url} alt="EvoStep logo" width={44} height={44} className="h-11 w-11 rounded-full shadow-[var(--shadow-glow)]" />
      <div className="leading-tight">
        <div className="font-serif text-2xl font-bold text-foreground tracking-tight">EvoStep</div>
        <div className="text-[9px] tracking-[0.18em] [background-image:var(--gradient-primary)] bg-clip-text text-transparent font-semibold">EVOLVE • GROW • STEP BY STEP</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="bg-[var(--gradient-hero)]">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
          <Logo />
          <ul className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition">
            <DiscordIcon className="h-4 w-4 text-white" /> Intră pe Discord
          </a>
        </nav>

        {/* HERO */}
        <section className="relative mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-16 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full [background-image:var(--gradient-primary)] opacity-20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full [background-image:var(--gradient-primary)] opacity-10 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft/60 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Misiuni • Niveluri • Comunitate
            </span>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Bine ai venit în <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">EvoStep!</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              O aventură de dezvoltare personală, în care fiecare misiune te transformă.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                { icon: Users, label: "Misiuni progresive" },
                { icon: Compass, label: "Comunitate activă" },
                { icon: Lock, label: "Acces doar prin roluri" },
              ].map((f) => (
                <li key={f.label} className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                    <f.icon className="h-4.5 w-4.5 text-white" />
                  </span>
                  <span className="text-foreground/85 text-base">{f.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition ring-1 ring-primary/30">
                <DiscordIcon className="h-5 w-5 text-white" /> Intră pe Discord
              </a>
              <a href="#misiuni" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/70 backdrop-blur px-6 py-4 text-base font-semibold text-foreground hover:border-primary/40 hover:text-primary transition">
                Vezi misiunile <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute inset-0 -z-10 [background-image:var(--gradient-primary)] opacity-25 blur-3xl rounded-full" />
            <img src={heroPortal} alt="Călătoare în fața portalului EvoStep" width={1280} height={960} className="relative w-full h-auto object-contain drop-shadow-2xl" />
          </div>
        </section>
      </header>

      {/* HOW IT WORKS */}
      <section id="cum" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold text-primary uppercase">Cum funcționează</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-2xl leading-tight tracking-tight">
            Șase pași simpli până la <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">prima ta misiune</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="h-full rounded-2xl bg-card border border-border p-4 shadow-[var(--shadow-card)] flex flex-col">
                <div className="mx-auto h-10 w-10 rounded-full [background-image:var(--gradient-primary)] text-primary-foreground font-bold flex items-center justify-center text-sm">{s.n}</div>
                <div className="mt-4 mx-auto h-16 w-16 rounded-2xl [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <s.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-3 text-center font-semibold text-foreground text-sm">{s.title}</h3>
                <p className="mt-2 text-center text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                {s.cta && (
                  s.cta.href ? (
                    s.cta.href.startsWith("http") ? (
                      <a href={s.cta.href} target="_blank" rel="noopener noreferrer" className={`mt-3 mx-auto rounded-lg px-4 py-2 text-xs font-semibold transition ${s.cta.variant === "primary" ? "[background-image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]" : "border border-primary/40 text-primary bg-white hover:bg-primary-soft shadow-sm"}`}>
                        {s.cta.label}
                      </a>
                    ) : (
                      <Link to={s.cta.href as "/ghid/cont-discord"} className={`mt-3 mx-auto rounded-lg px-4 py-2 text-xs font-semibold transition ${s.cta.variant === "primary" ? "[background-image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]" : "border border-primary/40 text-primary bg-white hover:bg-primary-soft shadow-sm"}`}>
                        {s.cta.label}
                      </Link>
                    )
                  ) : (
                    <button className={`mt-3 mx-auto rounded-lg px-4 py-2 text-xs font-semibold transition ${s.cta.variant === "primary" ? "[background-image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]" : "border border-primary/40 text-primary bg-white hover:bg-primary-soft shadow-sm"}`}>
                      {s.cta.label}
                    </button>
                  )
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
      <section id="misiuni" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Misiunile Nivelului 1</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-2xl leading-tight tracking-tight">
            Patru misiuni, o singură <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">transformare</span>
          </p>
        </div>
        <p className="text-center text-base text-muted-foreground mb-10 max-w-2xl mx-auto whitespace-pre-line">
          {"🎭 4 misiuni - una pe săptămână\n\n⚡ 2 Operațiuni Fulger între misiuni\n\n🎁 În primele 3 misiuni vei recupera 3 artefacte personale.\n\n🧭 În ultima misiune le vei integra pentru a construi Busola Personală.\n\n"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {missions.map((m) => (
            <article key={m.name} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden flex flex-col">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={m.img} alt={m.name} width={768} height={432} loading="lazy" className="h-full w-full object-cover contrast-110 saturate-125 brightness-95" />
              </div>
              <div className="p-3 flex flex-col">
                <div className="flex items-center gap-2">
                  <m.icon className="h-4 w-4 text-primary" />
                  <h3 className="font-serif text-base font-bold [background-image:var(--gradient-primary)] bg-clip-text text-transparent">{m.name}</h3>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{m.desc}</p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="rounded-md [background-image:var(--gradient-primary)] px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm">{m.level}</span>
                  <div className="font-serif text-xl font-bold [background-image:var(--gradient-primary)] bg-clip-text text-transparent">
                    {m.price}<span className="text-xs text-muted-foreground font-sans ml-1 tracking-wider">RON</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TRUST BAR */}
        <div className="mt-12 rounded-2xl bg-primary-soft/50 border border-primary/10 px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trust.map((t) => (
            <div key={t.t} className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                <t.icon className="h-5 w-5 text-white" />
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
      {/* HARTA JOCULUI */}
      <section id="harta" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Harta jocului</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-2xl leading-tight tracking-tight">
            12 niveluri, 3 etape, <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">o singură aventură</span>
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] bg-card">
          <img
            src={hartaEvostep.url}
            alt="Harta jocului EvoStep — 12 niveluri, 3 etape, o singură aventură"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border px-8 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row items-center gap-6 shadow-[var(--shadow-card)]">
          <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full [background-image:var(--gradient-primary)] opacity-10 blur-3xl" />
          <div className="relative h-14 w-14 rounded-2xl [background-image:var(--gradient-primary)] flex items-center justify-center shrink-0 shadow-[var(--shadow-glow)]">
            <DiscordIcon className="h-7 w-7 text-white" />
          </div>
          <div className="relative flex-1 text-center lg:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-bold [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Ești gata să începi?</h3>
            <p className="text-muted-foreground text-sm mt-1">Intră pe Discord și începe-ți misiunea!</p>
            <p className="text-muted-foreground text-sm mt-2">La finalul LV1 vei recupera 3 artefacte pe care le vei integra în Busola Personală.</p>
          </div>
          <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-7 py-3.5 text-base font-bold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition">
            Intră pe Discord <Send className="h-4 w-4 text-white" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <a href="mailto:hello.evostep@gmail.com" className="mt-1 inline-block text-sm font-medium text-primary hover:underline">hello.evostep@gmail.com</a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} EvoStep. Toate drepturile rezervate.</div>
      </footer>
    </div>
  );
}
