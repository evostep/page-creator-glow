import { createFileRoute, Link } from "@tanstack/react-router";
import type { MouseEvent } from "react";
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
  Mail,
  HelpCircle,
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
import gabrielaBumbac from "@/assets/gabriela-bumbac.png.asset.json";
import gabrielaRadu from "@/assets/gabriela-radu.png.asset.json";
import costel from "@/assets/costel.png.asset.json";
import hartaEvostep from "@/assets/harta-evostep.png.asset.json";
import stripeLogo from "@/assets/stripe-logo.png";
import anpcSal from "@/assets/anpc-sal.png.asset.json";
import anpcSol from "@/assets/anpc-sol.png.asset.json";
import asociatiaCopilot from "@/assets/asociatia-copilot.png.asset.json";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  { label: "Despre EvoStep", href: "/despre" },
  { label: "Cum funcționează", href: "#cum" },
  { label: "Harta", href: "#harta" },
  { label: "Misiunile", href: "#misiuni" },
  { label: "Întrebări frecvente", href: "#faq" },
];

const steps = [
  { n: 1, title: "Nu ai cont Discord?", desc: "Creează-ți contul Discord în câțiva pași simpli, cu poze la fiecare etapă.", icon: UserPlus, cta: { label: "Vezi pașii", variant: "primary" as const, href: "/ghid/cont-discord" } },
  { n: 2, title: "Intră pe server", desc: "Apasă pe butonul de mai jos pentru a intra direct în comunitatea EvoStep. Acolo vei primi rolul de Vizitator.", icon: DiscordIcon, cta: { label: "Apasă și intră direct", variant: "primary" as const, href: "https://discord.com/invite/fsXDY8qv5n" } },
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

const discordInviteUrl = "https://discord.gg/fsXDY8qv5n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Ce este EvoStep?",
    a: (
      <>
        <p>EvoStep este un parcurs interactiv în 12 niveluri, desfășurat într-o comunitate Discord. Fiecare nivel conține misiuni tematice, exerciții practice și Misiuni Fulger, iar descoperirile tale se adună în artefacte personale care se leagă treptat într-un sistem propriu de orientare.</p>
        <p>Pe parcurs, poți discuta cu ceilalți participanți și poți cere clarificări mentorilor EvoStep, în timpul programului acestora.</p>
      </>
    ),
  },
  {
    q: "Am nevoie de cont Discord?",
    a: (
      <>
        <p>Da. Pentru a participa la EvoStep ai nevoie de un cont Discord. Îl poți crea gratuit în câteva minute, iar dacă ai deja unul, îl folosești pe acela.</p>
        <p>
          Ai nevoie de ajutor?{" "}
          <Link to="/ghid/cont-discord" className="text-primary font-medium hover:underline">
            Apasă aici
          </Link>{" "}
          și vei găsi toți pașii necesari pentru crearea contului.
        </p>
      </>
    ),
  },
  {
    q: "Cât costă o misiune?",
    a: (
      <>
        <p>
          <a href="#misiuni" className="text-primary font-medium hover:underline">Misiunile Nivelului 1</a> costă între 29 și 59 RON, în funcție de temă și de conținut. Fiecare misiune se achiziționează separat, iar prețul exact este afișat pentru fiecare în parte.
        </p>
        <p>Recomandarea noastră este să le parcurgi și să le achiziționezi în ordine, deoarece misiunile sunt legate între ele și construiesc treptat artefactul nivelului.</p>
        <p>Plata se face securizat prin platforma Stripe. După confirmarea plății, fluxul automatizat îți acordă accesul în câteva minute.</p>
      </>
    ),
  },
  {
    q: "Cum primesc accesul la misiune?",
    a: (
      <p>După confirmarea plății, botul îți atribuie automat rolul corespunzător în Discord și primești acces la canalele private ale misiunii în câteva minute.</p>
    ),
  },
  {
    q: "Unde găsesc informațiile legale și regulile de plată?",
    a: (
      <p>
        Poți consulta oricând{" "}
        <Link to="/termeni" className="text-primary font-medium hover:underline">Termenii și condițiile</Link>,{" "}
        <Link to="/politica-plata" className="text-primary font-medium hover:underline">Politica de plată</Link> și{" "}
        <Link to="/politica-confidentialitate" className="text-primary font-medium hover:underline">Politica de confidențialitate</Link>.
      </p>
    ),
  },
  {
    q: "Cum primesc sprijin în comunitatea EvoStep?",
    a: (
      <>
        <p>Mentorii EvoStep sunt activi în comunitate, de regulă, între orele 20:00 și 22:00.</p>
        <p>Pentru problemele tehnice sau dificultățile întâmpinate pe platformă, poți trimite un ticket direct pe <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">serverul Discord</a>. Răspunsul nu este instant, dar vei primi sprijin în cel mult 24 de ore.</p>
        <p>Întrebările și situațiile ridicate în comunitate pot fi selectate de mentori și discutate într-un răspuns adresat întregii comunități, atunci când tema este utilă și pentru alți participanți.</p>
      </>
    ),
  },
  {
    q: "Ce se întâmplă după ce termin o misiune sau un nivel?",
    a: (
      <>
        <p>După ce finalizezi o misiune, primești acces la două Misiuni Fulger — MF1 și MF2, prin care poți aplica în viața reală ceea ce ai descoperit.</p>
        <p>Misiunea următoare poate fi achiziționată imediat după finalizarea celei anterioare sau mai târziu, atunci când simți că este momentul potrivit să continui.</p>
        <p>La finalul fiecărui nivel, cele trei artefacte obținute în primele misiuni se reunesc într-un artefact principal al nivelului. Acesta păstrează reperele construite și se leagă, mai târziu, de artefactele nivelurilor următoare.</p>
        <p>La finalul fiecărei etape, toate cele patru artefacte de nivel formează un artefact mai mare, iar la capătul celor 12 niveluri se conturează harta ta personală de orientare.</p>
      </>
    ),
  },
];

const trust = [
  { icon: VenetianMask, t: "Acces securizat", s: "prin roluri" },
  { icon: UsersRound, t: "Comunitate activă", s: "și suport real" },
  { icon: Drama, t: "Permisiuni clare,", s: "doar unde ai acces" },
  { icon: Headphones, t: "Mentorat și", s: "cabinete de voce" },
];

const rezultate = [
  { icon: Eye, t: "Vezi mai clar ce vrei", s: "și ieși din pilot automat." },
  { icon: Compass, t: "Alegi mai bine pentru tine", s: "cu repere care rămân." },
  { icon: Users, t: "Înțelegi ce se întâmplă în relații", s: "și pui limite fără să te pierzi." },
  { icon: Mountain, t: "Îți găsești direcția", s: "pentru ce urmează." },
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

function openDiscordInvite(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  const newWindow = window.open(discordInviteUrl, "_blank");

  if (newWindow) {
    newWindow.opener = null;
  }
}

function DiscordMockup() {
  const categories = [
    {
      name: "START",
      channels: [
        { icon: "📢", name: "info-evostep-✅citire", active: true, highlight: "info" as const },
        { icon: "☑️", name: "reguli-✅citire" },
      ],
    },
    {
      name: "COMUNITATE",
      channels: [
        { icon: "🌐", name: "comunitate-evostep", highlight: "comunitate" as const },
        { icon: "🎫", name: "tichete-deschise" },
        { icon: "🔒", name: "echipa-secretă" },
        { icon: "🤖", name: "boti-comunicare" },
      ],
    },
    {
      name: "CABINETE",
      channels: [
        { icon: "🔴", name: "Cabinet-GB" },
        { icon: "🔴", name: "Cabinet-GR" },
      ],
    },
    {
      name: "FAZA 1 · EU CU MINE · LV1",
      channels: [
        { icon: "#", name: "ghid-lv1-✅citire" },
        { icon: "💬", name: "discuții-lv1" },
      ],
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] bg-[#1e1f22] grid grid-cols-[140px_minmax(0,1fr)] sm:grid-cols-[56px_minmax(0,200px)_minmax(0,1fr)] lg:grid-cols-[64px_minmax(0,240px)_minmax(0,1fr)] text-white">
        {/* Server rail — hidden on mobile */}
        <div className="hidden sm:flex bg-[#1a1b1e] py-3 flex-col items-center gap-2 border-r border-black/40">
          <div className="h-11 w-11 rounded-2xl [background-image:var(--gradient-primary)] flex items-center justify-center font-bold text-white shadow-lg ring-2 ring-white/10">E</div>
          <div className="h-0.5 w-8 bg-white/10 rounded-full my-1" />
          {["🎮", "🎨", "🧩", "🌍"].map((e, i) => (
            <div key={i} className="h-11 w-11 rounded-full bg-[#313338] flex items-center justify-center text-sm opacity-70">{e}</div>
          ))}
        </div>

        {/* Channels list */}
        <div className="bg-[#2b2d31] py-3 border-r border-black/40 min-w-0">
          <div className="px-3 sm:px-4 pb-3 border-b border-black/40 flex items-center justify-between gap-2">
            <span className="font-semibold text-sm truncate">EvoStep</span>
            <ChevronRight className="h-3.5 w-3.5 rotate-90 text-white/50 shrink-0" />
          </div>
          <div className="mt-2 space-y-3">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="px-2 sm:px-3 text-[10px] tracking-widest font-bold text-white/40 uppercase truncate">{cat.name}</div>
                <ul className="mt-0.5">
                  {cat.channels.map((raw, i) => {
                    const ch = raw as { icon: string; name: string; active?: boolean; highlight?: "info" | "comunitate" };
                    const targetId = ch.highlight ? `ch-${ch.highlight}` : undefined;
                    return (
                      <li
                        key={i}
                        id={targetId}
                        className={`mx-1 px-1.5 sm:px-2 py-1 rounded flex items-center gap-1.5 text-[12px] sm:text-[13px] leading-tight ${
                          ch.active ? "bg-white/10 text-white" : "text-white/60"
                        } ${ch.highlight === "info" ? "ring-2 ring-[#5865f2] shadow-[0_0_18px_rgba(88,101,242,0.55)]" : ""} ${
                          ch.highlight === "comunitate" ? "ring-2 ring-[#f472b6] shadow-[0_0_18px_rgba(244,114,182,0.55)]" : ""
                        }`}
                      >
                        <span className="text-xs opacity-80 shrink-0">{ch.icon}</span>
                        <span className="truncate">{ch.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main area with annotations */}
        <div className="bg-white p-3 sm:p-4 md:p-6 min-w-0 relative text-[#2e3338] col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 pb-3 border-b border-[#d6d9dc] min-w-0">
            <span className="text-[#6b7280]">📢</span>
            <span className="font-semibold text-sm truncate">info-evostep-✅citire</span>
          </div>

          {/* Annotation callouts */}
          <div className="mt-5 space-y-4">
            <div className="relative rounded-xl border border-[#5865f2]/35 bg-[#f4f6ff] p-3 sm:p-4 pl-11 sm:pl-12 shadow-[0_14px_35px_rgba(88,101,242,0.16)]">
              <div className="absolute left-2 sm:left-3 top-3 sm:top-4 h-7 w-7 rounded-full bg-[#5865f2] flex items-center justify-center text-white text-xs font-bold shadow-[0_0_20px_rgba(88,101,242,0.45)]">1</div>
              <div className="text-[11px] font-bold tracking-widest uppercase text-[#5865f2]">
                #info-evostep
              </div>
              <p className="mt-1 text-sm text-[#2e3338] leading-snug">
                Aici <b>citești despre EvoStep</b>, găsești misiunea <b>„Hoțul de Roluri”</b> și te poți <b>abona la notificări</b>. E primul loc unde ajungi.
              </p>
            </div>

            <div className="relative rounded-xl border border-[#f472b6]/35 bg-[#fff1f7] p-3 sm:p-4 pl-11 sm:pl-12 shadow-[0_14px_35px_rgba(244,114,182,0.16)]">
              <div className="absolute left-2 sm:left-3 top-3 sm:top-4 h-7 w-7 rounded-full bg-[#f472b6] flex items-center justify-center text-white text-xs font-bold shadow-[0_0_20px_rgba(244,114,182,0.45)]">2</div>
              <div className="text-[11px] font-bold tracking-widest uppercase text-[#db2777]">
                #comunitate-evostep
              </div>
              <p className="mt-1 text-sm text-[#2e3338] leading-snug">
                Aici <b>ne întâlnim cu toții</b> — inima comunității, unde curge discuția și energia zilnică.
              </p>
            </div>
          </div>
        </div>
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
                {l.href.startsWith("/") ? (
                  <Link to={l.href as "/despre"} className="hover:text-primary transition-colors">{l.label}</Link>
                ) : (
                  <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
                )}
              </li>
            ))}
          </ul>
          <a href={discordInviteUrl} onClick={openDiscordInvite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition">
            <DiscordIcon className="h-4 w-4 text-white" /> Intră pe Discord
          </a>
        </nav>

        {/* HERO */}
        <section className="relative mx-auto max-w-7xl px-6 pt-10 pb-10 md:pt-14 md:pb-12 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
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
              <a href={discordInviteUrl} onClick={openDiscordInvite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition ring-1 ring-primary/30">
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
      <section id="cum" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-3 mb-6">
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
                      <a href={s.cta.href} onClick={s.cta.href === discordInviteUrl ? openDiscordInvite : undefined} target="_blank" rel="noopener noreferrer" className={`mt-3 mx-auto rounded-lg px-4 py-2 text-xs font-semibold transition ${s.cta.variant === "primary" ? "[background-image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]" : "border border-primary/40 text-primary bg-white hover:bg-primary-soft shadow-sm"}`}>
                        {s.cta.label}
                      </a>
                    ) : (
                      <Link to={s.cta.href as "/ghid/cont-discord"} className={`mt-3 mx-auto rounded-lg px-4 py-2 text-xs font-semibold transition ${s.cta.variant === "primary" ? "[background-image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]" : "border border-primary/40 text-primary bg-white hover:bg-primary-soft shadow-sm"}`}>
                        {s.cta.label}
                      </Link>
                    )
                  ) : (
                    <span className="mt-3 mx-auto inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary-soft/60 px-3 py-1 text-[11px] font-medium text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {s.cta.label}
                    </span>
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

      {/* HARTA PARCURSULUI */}
      <section id="harta" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Harta parcursului</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-3xl leading-tight tracking-tight">
            12 niveluri, 3 etape, <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">repere construite pas cu pas</span>
          </p>
          <p className="text-center text-base text-muted-foreground max-w-2xl">
            De la <span className="font-semibold text-foreground">Eu cu mine</span>, la <span className="font-semibold text-foreground">Eu cu ceilalți</span> și <span className="font-semibold text-foreground">Eu în lume</span> — fiecare misiune adaugă un artefact, iar artefactele se leagă într-o hartă personală de orientare.
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-primary/15 shadow-[var(--shadow-card)] p-3 sm:p-5 md:p-6">
          <a
            href={hartaEvostep.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            aria-label="Deschide harta EvoStep în mărime completă"
          >
            <img
              src={hartaEvostep.url}
              alt="Harta parcursului EvoStep — 12 niveluri, 3 etape"
              width={2000}
              height={1414}
              loading="lazy"
              className="w-full h-auto rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            💡 Atinge harta pentru a o deschide la mărime completă și a citi detaliile fiecărui nivel.
          </p>
        </div>
      </section>

      {/* MISSIONS */}
      <section id="misiuni" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-3 mb-5">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Misiunile Nivelului 1</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-2xl leading-tight tracking-tight">
            Patru misiuni, o singură <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">transformare</span>
          </p>
        </div>
        <p className="text-center text-base text-muted-foreground mb-5 max-w-2xl mx-auto whitespace-pre-line">
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
        <div className="mt-6 rounded-2xl bg-primary-soft/50 border border-primary/10 px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* REZULTATE AȘTEPTATE */}
      <section id="rezultate" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Rezultate așteptate</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-2xl leading-tight tracking-tight">
            Ce poți duce cu tine <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">după primele misiuni</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {rezultate.map((r) => (
            <div key={r.t} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <span className="h-11 w-11 shrink-0 rounded-xl [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                <r.icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <div className="font-semibold text-foreground">{r.t}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{r.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREVIEW DISCORD */}
      <section id="preview-discord" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Cum arată comunitatea</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-2xl leading-tight tracking-tight">
            Un spațiu clar, <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">structurat pe niveluri</span>
          </p>
          <p className="text-sm text-muted-foreground text-center max-w-xl">Canale dedicate pentru fiecare nivel, mentori activi, botul Călăuza care îți deschide accesul după plată.</p>
        </div>
        <DiscordMockup />
      </section>

      {/* FONDATOR */}
      <section id="fondator" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="text-[10px] tracking-[0.24em] font-semibold [background-image:var(--gradient-primary)] bg-clip-text text-transparent">CINE ESTE ÎN SPATELE EVOSTEP</div>
            <h3 className="mt-1 font-serif text-2xl md:text-3xl font-bold text-foreground">Echipa EvoStep</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: gabrielaBumbac.url,
                name: "Gabriela Bumbac",
                role: "Fondatoare EvoStep",
                specialist: "Specialist în formare și consiliere, cu experiență în lucrul direct cu oamenii și în antreprenoriat.",
                bio: "Aduce în EvoStep capacitatea de a transforma o idee într-un parcurs coerent și aplicabil, construit din experiență și testat mai întâi pe propriul drum.",
              },
              {
                img: gabrielaRadu.url,
                name: "Gabriela Radu",
                role: "Cofondatoare EvoStep",
                specialist: "Specialist în managementul proiectelor și coach.",
                bio: "Alături de EvoStep încă de la primii pași ai implementării, aduce rigoarea organizării, întrebările care merg dincolo de primul răspuns și susținerea prin care o descoperire poate deveni alegere și acțiune.",
              },
              {
                img: costel.url,
                name: "Costel Petrea",
                role: "Developer EvoStep",
                specialist: "Specializat în mecatronică, dezvoltarea soluțiilor tehnice și automatizarea proceselor.",
                bio: "Contribuie la dezvoltarea și optimizarea platformei EvoStep, automatizarea proceselor și integrarea funcționalităților digitale, transformând ideile în soluții eficiente, accesibile și ușor de utilizat.",
              },
            ].map((p) => (
              <div key={p.name} className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)] flex flex-col items-center text-center">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.role}`}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-40 w-40 rounded-full object-cover shadow-[var(--shadow-glow)] shrink-0"
                />
                <h4 className="mt-4 font-serif text-2xl font-bold text-foreground">{p.name}</h4>
                <p className="text-sm text-primary font-medium">{p.role}</p>
                <p className="mt-3 text-sm font-semibold text-foreground leading-relaxed">{p.specialist}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/despre" className="inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition">
              Citește povestea EvoStep <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CUM FUNCȚIONEAZĂ ACCESUL */}
      <section id="garantie" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Transparent, de la început</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Fără abonamente, fără clauze ascunse. Plătești o singură dată per misiune, doar dacă vrei să continui.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
              <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-semibold text-foreground">Acces gratuit pe Discord</h4>
              <p className="mt-1 text-sm text-muted-foreground">Intri ca Vizitator, vezi comunitatea și modul de lucru înainte să decizi.</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
              <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-semibold text-foreground">Plată o singură dată</h4>
              <p className="mt-1 text-sm text-muted-foreground">Nu se reînnoiește automat. Cumperi fiecare misiune separat, când ești pregătit să continui.</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
              <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-semibold text-foreground">Ritmul tău</h4>
              <p className="mt-1 text-sm text-muted-foreground">Fără termene, fără presiune. Parcurgi misiunile în timpul care ți se potrivește.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 pb-8 md:pb-10">
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
          <a href={discordInviteUrl} onClick={openDiscordInvite} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-7 py-3.5 text-base font-bold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition">
            Intră pe Discord <Send className="h-4 w-4 text-white" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <h2 className="text-center font-serif tracking-[0.24em] text-xs font-bold uppercase [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Întrebări frecvente</h2>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-center max-w-2xl leading-tight tracking-tight">
            Ai nelămuriri? <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">Aici găsești răspunsuri</span>
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)] data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="py-4 text-left hover:no-underline">
                  <div className="flex items-center gap-3 pr-3">
                    <span className="h-8 w-8 shrink-0 rounded-lg [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                      <HelpCircle className="h-4 w-4 text-white" />
                    </span>
                    <span className="font-semibold text-foreground text-sm md:text-base leading-tight">{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-11 pr-2 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              EvoStep — o aventură de dezvoltare personală. Devino cea mai bună versiune a ta.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={discordInviteUrl} onClick={openDiscordInvite} target="_blank" rel="noopener noreferrer" aria-label="Discord EvoStep" className="h-9 w-9 shrink-0 rounded-full [background-image:var(--gradient-primary)] flex items-center justify-center text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition">
                <DiscordIcon className="h-4 w-4 text-white" />
              </a>
              <a href="mailto:hello.evostep@gmail.com" aria-label="Email EvoStep" className="h-9 w-9 shrink-0 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informații legale</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/termeni" className="hover:text-primary transition">Termeni și condiții</Link></li>
              <li><Link to="/politica-plata" className="hover:text-primary transition">Politica de plată</Link></li>
              <li><Link to="/politica-confidentialitate" className="hover:text-primary transition">Politica de confidențialitate</Link></li>
              <li><Link to="/politica-cookies" className="hover:text-primary transition">Politica de cookies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-3">Suntem 100% online.</p>
            <a href="mailto:hello.evostep@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition mb-3">
              <Mail className="h-4 w-4 shrink-0" /> hello.evostep@gmail.com
            </a>
            <a href={discordInviteUrl} onClick={openDiscordInvite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg [background-image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition whitespace-nowrap">
              <DiscordIcon className="h-4 w-4 shrink-0 text-white" /> Discord
            </a>
          </div>

          {/* Parteneri */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Parteneri</h4>
            <div
              title="Asociația Copilot — partener EvoStep"
              className="inline-block rounded-lg bg-white p-2 border border-border"
            >
              <img src={asociatiaCopilot.url} alt="Asociația Copilot — partener EvoStep" className="h-12 w-auto max-w-[160px] object-contain block" />
            </div>
          </div>

          {/* Protecția consumatorilor & Plăți */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Protecția consumatorilor</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ANPC — Soluționarea Alternativă a Litigiilor"
                className="inline-block rounded-md bg-white p-1 hover:opacity-90 transition w-fit"
              >
                <img src={anpcSal.url} alt="ANPC — Soluționarea Alternativă a Litigiilor" className="h-9 w-auto block" />
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ANPC — Soluționarea Online a Litigiilor"
                className="inline-block rounded-md bg-white p-1 hover:opacity-90 transition w-fit"
              >
                <img src={anpcSol.url} alt="ANPC — Soluționarea Online a Litigiilor" className="h-9 w-auto block" />
              </a>
            </div>

            <h4 className="font-semibold text-foreground mt-5 mb-3">Plăți securizate</h4>
            <div className="inline-flex items-center rounded-lg border border-border bg-card p-2">
              <img src={stripeLogo} alt="Stripe" width={120} height={60} className="h-10 w-auto shrink-0 object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center md:text-left">
            <span>© {new Date().getFullYear()} EvoStep. Toate drepturile rezervate.</span>
            <span>Activitate desfășurată integral online. Proiectat cu grijă pentru comunitatea EvoStep.</span>
          </div>
        </div>
      </footer>

      {/* STICKY CTA MOBILE */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur px-4 py-3 shadow-[0_-6px_20px_-8px_rgba(0,0,0,0.15)]">
        <a
          href={discordInviteUrl}
          onClick={openDiscordInvite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-5 py-3.5 text-sm font-bold text-white shadow-[var(--shadow-glow)]"
        >
          <DiscordIcon className="h-4 w-4 text-white" /> Intră pe Discord — Gratuit
        </a>
      </div>
      <div className="lg:hidden h-20" aria-hidden />
    </div>
  );
}
