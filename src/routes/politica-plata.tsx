import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/politica-plata")({
  head: () => ({
    meta: [
      { title: "Politica de plată și rambursare — EvoStep" },
      { name: "description", content: "Cum sunt procesate plățile, cum este acordat accesul la produsele digitale EvoStep și în ce situații pot fi acordate rambursări." },
      { property: "og:title", content: "Politica de plată și rambursare — EvoStep" },
      { property: "og:description", content: "Politica de plată și rambursare a platformei EvoStep." },
    ],
  }),
  component: PoliticaPlataPage,
});

function PoliticaPlataPage() {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
        </Link>

        <h1 className="mt-8 font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Politica de <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">plată și rambursare</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Ultima actualizare: 12.08.2026</p>

        <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
          <h2 className="font-serif text-2xl font-bold tracking-tight">Despre această politică</h2>
          <p>Această Politică explică modul în care sunt procesate plățile, cum este acordat accesul la produsele digitale EvoStep și în ce situații pot fi acordate rambursări.</p>
          <p>Prin efectuarea unei achiziții pe platforma EvoStep confirmi că ai citit și accepți această Politică.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">1. Produsele EvoStep</h2>
          <p>EvoStep comercializează exclusiv produse și servicii digitale. Acestea pot include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>acces la misiuni de dezvoltare personală;</li>
            <li>niveluri și trasee educaționale;</li>
            <li>exerciții interactive;</li>
            <li>teste și chestionare;</li>
            <li>materiale digitale;</li>
            <li>resurse și conținut educațional;</li>
            <li>acces la comunitatea privată EvoStep.</li>
          </ul>
          <p>Prin achiziție nu dobândești dreptul de proprietate asupra conținutului, ci o licență limitată, personală, netransferabilă și neexclusivă de utilizare a acestuia.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">2. Prețuri și plăți</h2>
          <p>Toate prețurile sunt afișate înainte de finalizarea comenzii.</p>
          <p>Plățile sunt procesate prin furnizori autorizați, precum Stripe.</p>
          <p>Life &amp; Live Events SRL nu stochează datele complete ale cardurilor bancare.</p>
          <p>Comanda este considerată finalizată după confirmarea cu succes a plății.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">3. Livrarea serviciului</h2>
          <p>Produsele EvoStep sunt livrate exclusiv în format digital.</p>
          <p>Livrarea este considerată efectuată în momentul în care accesul la produsul achiziționat este activat în contul utilizatorului sau în comunitatea EvoStep.</p>
          <p>În funcție de verificările efectuate de procesatorul de plăți, activarea accesului poate avea loc imediat sau într-un interval rezonabil după confirmarea tranzacției.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">4. Dreptul de retragere</h2>
          <p>Conform legislației europene privind protecția consumatorilor, consumatorii beneficiază în mod normal de un drept de retragere de 14 zile pentru contractele încheiate la distanță.</p>
          <p>Totuși, în cazul conținutului digital furnizat online, acest drept încetează după începerea furnizării serviciului, dacă utilizatorul și-a exprimat acordul expres pentru începerea executării și a confirmat că înțelege că își pierde dreptul de retragere.</p>
          <p>Prin efectuarea plății și solicitarea activării imediate a accesului la EvoStep:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>soliciți începerea imediată a furnizării serviciului digital;</li>
            <li>ești de acord ca accesul să fie activat fără perioada de așteptare;</li>
            <li>confirmi că înțelegi că dreptul legal de retragere încetează după activarea accesului.</li>
          </ul>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">5. Politica de rambursare</h2>
          <p>După activarea accesului la produsul digital, sumele achitate nu sunt rambursabile.</p>
          <p>Această regulă se aplică indiferent de:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>timpul petrecut pe platformă;</li>
            <li>nivelul de progres;</li>
            <li>utilizarea parțială a conținutului;</li>
            <li>nefinalizarea misiunilor;</li>
            <li>schimbarea preferințelor personale.</li>
          </ul>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">6. Excepții</h2>
          <p>Putem analiza individual solicitările de rambursare în situații excepționale, precum:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>plata dublă a aceleiași comenzi;</li>
            <li>eroare de procesare a plății;</li>
            <li>imposibilitatea tehnică permanentă de a furniza accesul;</li>
            <li>alte situații prevăzute de lege.</li>
          </ul>
          <p>Aprobarea unei rambursări rămâne la discreția Life &amp; Live Events SRL, cu excepția cazurilor în care legislația aplicabilă impune altfel.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">7. Probleme tehnice</h2>
          <p>Dacă întâmpini dificultăți privind accesul la produsul achiziționat, te rugăm să contactezi echipa EvoStep.</p>
          <p>Vom depune toate eforturile rezonabile pentru remedierea situației într-un termen adecvat.</p>
          <p>Problemele tehnice nu conduc automat la rambursarea sumelor achitate.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">8. Plăți contestate (Chargeback)</h2>
          <p>Dacă o plată este contestată prin intermediul băncii sau al emitentului cardului (chargeback), Life &amp; Live Events SRL își rezervă dreptul de a suspenda temporar sau definitiv accesul la produsele și serviciile EvoStep până la soluționarea situației.</p>
          <p>În cazul utilizării frauduloase a serviciilor, ne rezervăm dreptul de a lua toate măsurile legale necesare pentru protejarea intereselor noastre.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">9. Erori de preț sau de sistem</h2>
          <p>Deși depunem toate eforturile pentru afișarea unor informații corecte, pot exista erori tehnice sau administrative privind prețurile, reducerile sau disponibilitatea produselor.</p>
          <p>În astfel de situații ne rezervăm dreptul de a corecta eroarea și, dacă este necesar, de a anula comanda înainte de activarea accesului, cu rambursarea integrală a sumelor achitate.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">10. Modificarea prețurilor</h2>
          <p>Prețurile produselor EvoStep pot fi modificate în orice moment.</p>
          <p>Modificările nu afectează comenzile deja confirmate și achitate.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">11. Contact</h2>
          <p>Pentru întrebări privind plățile, accesul sau comenzile ne poți contacta la:</p>
          <p><strong>Life &amp; Live Events SRL</strong><br />E-mail: <a href="mailto:hello.evostep@gmail.com" className="text-primary hover:underline">hello.evostep@gmail.com</a></p>
          <p>Vom analiza fiecare solicitare cu promptitudine și bună-credință.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">12. Acceptarea acestei politici</h2>
          <p>Prin apăsarea butonului „Plătește", „Continuă", „Finalizează comanda" sau prin efectuarea unei plăți, confirmi că:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>ai citit această Politică de Plată și Rambursare;</li>
            <li>ai înțeles modul de furnizare a produselor digitale;</li>
            <li>soliciți activarea imediată a accesului;</li>
            <li>înțelegi că, după activarea accesului, dreptul legal de retragere încetează în condițiile prevăzute de legislația aplicabilă privind conținutul digital.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}