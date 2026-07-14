import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/politica-confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate — EvoStep" },
      { name: "description", content: "Cum colectăm, folosim și protejăm datele tale personale pe platforma EvoStep." },
      { property: "og:title", content: "Politica de confidențialitate — EvoStep" },
      { property: "og:description", content: "Politica de confidențialitate EvoStep, conform GDPR." },
    ],
  }),
  component: PoliticaPage,
});

function PoliticaPage() {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
        </Link>

        <h1 className="mt-8 font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Politica de <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">Confidențialitate</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Ultima actualizare: 30.06.2026</p>

        <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
          <h2 className="font-serif text-2xl font-bold tracking-tight">Confidențialitatea datelor tale</h2>
          <p>La EvoStep considerăm că datele personale îți aparțin. Rolul nostru este să le folosim doar atunci când este necesar pentru funcționarea platformei și să le protejăm în permanență.</p>
          <p>Această Politică explică ce informații colectăm, de ce le colectăm și ce drepturi ai în legătură cu acestea.</p>
          <p>Prin utilizarea platformei EvoStep confirmi că ai citit această Politică de Confidențialitate.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">1. Cine este operatorul datelor</h2>
          <p>Operatorul datelor cu caracter personal este:</p>
          <p><strong>Life &amp; Live Events SRL</strong><br />România<br />E-mail de contact: <a className="text-primary hover:underline" href="mailto:hello.evostep@gmail.com">hello.evostep@gmail.com</a></p>
          <p>Această Politică este elaborată în conformitate cu Regulamentul (UE) 2016/679 (GDPR), Legea nr. 190/2018 și celelalte acte normative aplicabile privind protecția datelor.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">2. Ce informații colectăm</h2>
          <p><strong>Date de identificare:</strong> nume și prenume; adresă de e-mail; nume de utilizator Discord; identificatorul contului Discord.</p>
          <p><strong>Date privind accesul la platformă:</strong> nivelurile și misiunile accesate; progresul în program; răspunsurile oferite în cadrul exercițiilor; rezultatele testelor și chestionarelor; feedback-ul transmis voluntar.</p>
          <p><strong>Date privind plățile:</strong> plățile sunt procesate prin furnizori autorizați (de exemplu Stripe). Nu stocăm și nu avem acces la numărul complet al cardului bancar. Putem primi doar informații necesare confirmării plății: statusul tranzacției, identificatorul plății, valoarea achitată.</p>
          <p><strong>Comunicare:</strong> dacă ne contactezi, putem păstra mesajele trimise, solicitările de suport și răspunsurile oferite.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">3. Cum folosim datele</h2>
          <p>Utilizăm datele exclusiv pentru:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>acordarea accesului la conținutul EvoStep;</li>
            <li>procesarea comenzilor și plăților;</li>
            <li>emiterea documentelor fiscale;</li>
            <li>comunicarea privind programul;</li>
            <li>îmbunătățirea conținutului și experienței utilizatorilor;</li>
            <li>prevenirea fraudelor și utilizării abuzive;</li>
            <li>respectarea obligațiilor legale.</li>
          </ul>
          <p>Nu folosim datele tale pentru a lua decizii automate care produc efecte juridice asupra ta.</p>

          <h2 className="mt-6 font-serif text-2xl font-bold tracking-tight">4. Temeiul legal</h2>
          <p>Prelucrăm datele în baza unuia sau mai multora dintre următoarele temeiuri: executarea contractului dintre tine și EvoStep; obligațiile legale aplicabile; interesul nostru legitim privind securitatea și funcționarea platformei; consimțământul tău, atunci când acesta este necesar (de exemplu pentru comunicări de marketing).</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">5. Cu cine partajăm informațiile</h2>
          <p>Nu vindem și nu închiriem datele tale personale. Le putem transmite doar atunci când este necesar către: procesatori de plăți; furnizori de servicii IT; platforma Discord; furnizori de servicii de găzduire; furnizori de contabilitate și servicii fiscale; autorități publice, atunci când legea ne obligă.</p>
          <p>Toți partenerii sunt obligați contractual sau legal să protejeze datele personale.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">6. Transferuri internaționale</h2>
          <p>Unele dintre serviciile utilizate de EvoStep pot implica transferul datelor în afara Spațiului Economic European. În aceste situații ne asigurăm că transferurile sunt realizate în conformitate cu GDPR și beneficiază de garanții adecvate, precum Clauzele Contractuale Standard aprobate de Comisia Europeană sau alte mecanisme legale aplicabile.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">7. Cât timp păstrăm datele</h2>
          <p>Păstrăm datele doar atât timp cât este necesar. În general: documentele fiscale sunt păstrate conform legislației române; informațiile privind contul sunt păstrate cât timp utilizezi platforma; mesajele de suport pot fi păstrate pentru îmbunătățirea serviciilor; datele pot fi șterse sau anonimizate atunci când nu mai sunt necesare.</p>
          <p>Putem păstra anumite informații mai mult timp dacă legea ne obligă sau dacă este necesar pentru apărarea drepturilor noastre într-un litigiu.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">8. Cum protejăm informațiile</h2>
          <p>Aplicăm măsuri tehnice și organizatorice rezonabile pentru protejarea datelor, inclusiv: controlul accesului; parole securizate; conexiuni criptate; limitarea accesului personalului autorizat; monitorizarea accesului la informații; copii de siguranță și măsuri pentru prevenirea pierderii datelor.</p>
          <p>Nicio metodă de transmitere sau stocare electronică nu poate garanta securitate absolută, însă depunem toate eforturile rezonabile pentru protejarea informațiilor.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">9. Drepturile tale</h2>
          <p>Conform GDPR ai dreptul: să soliciți acces la datele tale; să soliciți rectificarea informațiilor incorecte; să soliciți ștergerea datelor, atunci când legea permite; să restricționezi prelucrarea; să primești datele într-un format portabil; să te opui anumitor prelucrări; să îți retragi consimțământul, atunci când acesta reprezintă temeiul prelucrării.</p>
          <p>Pentru exercitarea acestor drepturi ne poți contacta la: <a className="text-primary hover:underline" href="mailto:hello.evostep@gmail.com">hello.evostep@gmail.com</a>. Vom răspunde solicitărilor în termenul prevăzut de legislația aplicabilă.</p>
          <p>Ai, de asemenea, dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">10. Conținutul creat de utilizatori</h2>
          <p>Exercițiile, răspunsurile, mesajele și materialele pe care alegi să le publici în cadrul comunității Discord pot fi vizibile celorlalți membri, în funcție de canalul în care sunt postate.</p>
          <p>Te rugăm să distribui doar informațiile pe care dorești să le împărtășești. Poți solicita ștergerea anumitor conținuturi, în măsura în care acest lucru este posibil din punct de vedere tehnic și legal.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">11. Cookie-uri și servicii terțe</h2>
          <p>EvoStep utilizează servicii furnizate de terți (precum Discord sau Stripe), care pot utiliza cookie-uri și tehnologii similare conform propriilor politici de confidențialitate. EvoStep nu controlează aceste tehnologii și recomandăm consultarea politicilor furnizorilor respectivi.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">12. Modificarea acestei politici</h2>
          <p>Putem actualiza periodic această Politică de Confidențialitate pentru a reflecta modificări legislative, tehnice sau operaționale. Versiunea actualizată va fi publicată în cadrul platformei EvoStep, iar modificările semnificative vor fi comunicate utilizatorilor prin mijloacele disponibile.</p>
          <p>Continuarea utilizării platformei după publicarea modificărilor reprezintă acceptarea noii versiuni.</p>

          <h2 className="mt-8 font-serif text-2xl font-bold tracking-tight">13. Contact</h2>
          <p>Pentru orice întrebare privind protecția datelor personale ne poți contacta la:</p>
          <p><strong>Life &amp; Live Events SRL</strong><br />E-mail: <a className="text-primary hover:underline" href="mailto:hello.evostep@gmail.com">hello.evostep@gmail.com</a></p>
          <p>Vom face tot posibilul să răspundem prompt și transparent tuturor solicitărilor.</p>
        </div>
      </div>
    </div>
  );
}