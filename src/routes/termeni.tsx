import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/termeni")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții — EvoStep" },
      { name: "description", content: "Termenii de utilizare ai platformei EvoStep, administrată de Life & Live Events SRL." },
      { property: "og:title", content: "Termeni și condiții — EvoStep" },
      { property: "og:description", content: "Termenii de utilizare ai platformei EvoStep." },
    ],
  }),
  component: TermeniPage,
});

function TermeniPage() {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
        </Link>

        <h1 className="mt-8 font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Termeni de utilizare <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">EvoStep</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Ultima actualizare: 30.06.2026</p>

        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <h2 className="font-serif text-2xl font-bold tracking-tight">Bine ai venit în EvoStep!</h2>
          <p>EvoStep este o platformă digitală de dezvoltare personală creată și administrată de <strong>Life &amp; Live Events SRL</strong>.</p>
          <p>Prin accesarea comunității EvoStep, confirmi că ai citit și accepți acești Termeni de utilizare. Dacă nu ești de acord cu ei, te rugăm să nu utilizezi platforma.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">1. Ce este EvoStep</h2>
          <p>EvoStep este o experiență interactivă de autocunoaștere desfășurată prin intermediul unei comunități private pe Discord.</p>
          <p>Platforma oferă acces la:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>misiuni și provocări;</li>
            <li>exerciții de reflecție;</li>
            <li>materiale educaționale;</li>
            <li>teste și chestionare;</li>
            <li>resurse digitale;</li>
            <li>activități comunitare.</li>
          </ul>
          <p>Scopul EvoStep este susținerea dezvoltării personale și a autocunoașterii.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">2. Ce primești</h2>
          <p>Prin achiziționarea unei misiuni sau a unui nivel primești acces la conținutul digital disponibil pentru acel nivel în cadrul comunității EvoStep.</p>
          <p>Accesul este:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>personal;</li>
            <li>netransferabil;</li>
            <li>destinat exclusiv utilizării tale.</li>
          </ul>
          <p>Accesul poate include conținut existent și conținut adăugat ulterior, în funcție de evoluția programului.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">3. Activarea accesului</h2>
          <p>Accesul este acordat după confirmarea plății. Nu sunt livrate produse fizice. Conținutul este disponibil exclusiv în format digital.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">4. Contul tău</h2>
          <p>Ești responsabil pentru securitatea contului tău Discord și pentru activitatea desfășurată prin intermediul acestuia.</p>
          <p>Nu este permisă:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>partajarea contului;</li>
            <li>vânzarea accesului;</li>
            <li>permiterea accesului altor persoane folosind contul tău.</li>
          </ul>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">5. Comunitatea EvoStep</h2>
          <p>Ne dorim o comunitate sigură și bazată pe respect reciproc. Prin utilizarea platformei ești de acord să:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>comunici într-un mod civilizat;</li>
            <li>respecți ceilalți membri;</li>
            <li>nu hărțuiești, discriminezi sau intimidezi alte persoane;</li>
            <li>nu publici conținut ilegal, ofensator sau abuziv;</li>
            <li>nu promovezi spam sau publicitate nesolicitată.</li>
          </ul>
          <p>Administratorii își rezervă dreptul de a elimina conținut sau de a restricționa accesul utilizatorilor care încalcă aceste reguli.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">6. Proprietate intelectuală</h2>
          <p>Toate materialele disponibile în EvoStep sunt protejate de legislația privind drepturile de autor. Acestea includ, fără a se limita la: texte, misiuni, exerciții, imagini, fișiere, materiale video, concepte, structura jocului și identitatea vizuală.</p>
          <p>Nu este permisă copierea, distribuirea, reproducerea, revânzarea, publicarea sau modificarea conținutului fără acordul scris al Life &amp; Live Events SRL.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">7. Dezvoltare personală</h2>
          <p>EvoStep este un program educațional și de dezvoltare personală. Conținutul platformei:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>nu reprezintă servicii medicale;</li>
            <li>nu reprezintă psihoterapie;</li>
            <li>nu reprezintă consiliere psihologică;</li>
            <li>nu înlocuiește sprijinul oferit de profesioniști autorizați.</li>
          </ul>
          <p>Rezultatele obținute diferă de la o persoană la alta și depind de implicarea fiecărui utilizator.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">8. Plăți</h2>
          <p>Plățile sunt procesate prin Stripe sau prin alți procesatori autorizați. Prin efectuarea unei plăți confirmi că:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>informațiile furnizate sunt corecte;</li>
            <li>ai dreptul de a utiliza metoda de plată;</li>
            <li>accepți acești Termeni de utilizare.</li>
          </ul>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">9. Modificarea platformei</h2>
          <p>EvoStep evoluează permanent. Ne rezervăm dreptul de a actualiza misiunile, modifica structura nivelurilor, adăuga funcționalități noi, elimina conținut depășit și îmbunătăți experiența utilizatorilor.</p>
          <p>Aceste modificări nu afectează dreptul tău de acces la conținutul deja achiziționat, cu excepția situațiilor justificate de motive tehnice, legale sau de securitate.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">10. Suspendarea accesului</h2>
          <p>Accesul poate fi suspendat sau retras dacă:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>sunt încălcate aceste reguli;</li>
            <li>este distribuit conținutul EvoStep fără permisiune;</li>
            <li>este afectată funcționarea comunității;</li>
            <li>sunt încălcate drepturile altor utilizatori.</li>
          </ul>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">11. Contact</h2>
          <p>Pentru întrebări sau suport poți utiliza canalele oficiale disponibile în comunitatea EvoStep sau datele de contact publicate pe platformă.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">12. Acceptarea Termenilor</h2>
          <p>Prin apăsarea butonului „Accept”, „Continuă”, „Cumpără”, „Alătură-te” sau prin accesarea comunității EvoStep, confirmi că:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>ai citit acești Termeni de utilizare;</li>
            <li>îi înțelegi;</li>
            <li>accepți să îi respecți;</li>
            <li>ai cel puțin 18 ani sau utilizezi platforma cu acordul reprezentantului legal, dacă legislația aplicabilă impune acest lucru.</li>
          </ul>
          <p>Continuarea utilizării platformei reprezintă acordul tău expres privind acești Termeni.</p>
        </div>
      </div>
    </div>
  );
}