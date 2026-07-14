import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Politica de cookies — EvoStep" },
      { name: "description", content: "Cum folosește EvoStep cookie-urile și tehnologiile similare." },
      { property: "og:title", content: "Politica de cookies — EvoStep" },
      { property: "og:description", content: "Informații despre cookie-urile utilizate pe platforma EvoStep." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
        </Link>

        <h1 className="mt-8 font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Politica de <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">Cookies</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Ultima actualizare: 30.06.2026</p>

        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <h2 className="font-serif text-2xl font-bold tracking-tight">1. Ce sunt cookie-urile</h2>
          <p>Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul tău (computer, tabletă, telefon) atunci când vizitezi un site web. Ele permit site-ului să rețină anumite informații despre vizita ta, pentru ca experiența să fie mai fluidă la accesările următoare.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">2. Cum folosim cookie-urile</h2>
          <p>Platforma EvoStep, administrată de <strong>Life &amp; Live Events SRL</strong>, poate utiliza cookie-uri și tehnologii similare pentru:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>funcționarea corectă a site-ului;</li>
            <li>reținerea preferințelor tale (de exemplu limba sau alte setări);</li>
            <li>măsurarea anonimă a traficului și îmbunătățirea conținutului;</li>
            <li>asigurarea securității sesiunii.</li>
          </ul>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">3. Tipuri de cookie-uri utilizate</h2>
          <p><strong>Cookie-uri strict necesare</strong> — permit funcționarea site-ului și accesul la funcționalitățile de bază. Fără ele, site-ul nu poate funcționa corect. Acestea nu necesită consimțământ.</p>
          <p><strong>Cookie-uri de performanță și analiză</strong> — ne ajută să înțelegem cum este utilizat site-ul, colectând informații anonime (pagini vizitate, timp petrecut, erori întâmpinate). Le folosim doar cu acordul tău.</p>
          <p><strong>Cookie-uri de funcționalitate</strong> — rețin preferințele tale pentru a personaliza experiența (de exemplu limba selectată).</p>
          <p><strong>Cookie-uri de la terți</strong> — pot fi setate de serviciile pe care le folosim (de exemplu Discord, Stripe, furnizori de găzduire). Aceste servicii au propriile politici de cookie-uri, pe care le poți consulta pe site-urile respective.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">4. Durata cookie-urilor</h2>
          <p><strong>Cookie-uri de sesiune</strong> — sunt șterse automat atunci când închizi browserul.</p>
          <p><strong>Cookie-uri persistente</strong> — rămân stocate pe dispozitivul tău pentru o perioadă determinată sau până când le ștergi manual.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">5. Cum poți controla cookie-urile</h2>
          <p>Ai controlul deplin asupra cookie-urilor. Poți:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>să accepți sau să refuzi cookie-urile prin bannerul afișat la prima vizită (dacă este disponibil);</li>
            <li>să configurezi browserul astfel încât să blocheze sau să șteargă cookie-urile existente;</li>
            <li>să dezactivezi cookie-urile de la terți din setările browserului.</li>
          </ul>
          <p>Reține că dezactivarea anumitor cookie-uri poate afecta funcționarea corectă a site-ului sau a unora dintre funcționalitățile acestuia.</p>
          <p>Instrucțiuni pentru cele mai populare browsere: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge — le găsești căutând „cum să ștergi cookie-urile” în meniul de ajutor al browserului tău.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">6. Modificarea politicii</h2>
          <p>Putem actualiza periodic această Politică de Cookies pentru a reflecta modificări tehnice, legislative sau operaționale. Versiunea actualizată va fi publicată pe această pagină.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">7. Contact</h2>
          <p>Pentru întrebări privind utilizarea cookie-urilor pe platforma EvoStep ne poți contacta la: <a className="text-primary hover:underline" href="mailto:hello.evostep@gmail.com">hello.evostep@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  );
}