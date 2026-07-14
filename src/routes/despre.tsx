import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Users, Compass, Map, Zap, Award } from "lucide-react";
import evostepLogo from "@/assets/evostep-logo.asset.json";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre EvoStep — 12 niveluri, 3 etape, un sistem de repere" },
      { name: "description", content: "EvoStep este un parcurs interactiv în 12 niveluri, construit din jocuri, misiuni și întrebări care te ajută să îți formezi repere proprii." },
      { property: "og:title", content: "Despre EvoStep" },
      { property: "og:description", content: "Un parcurs interactiv în 12 niveluri: jocuri, misiuni și întrebări pentru a-ți construi propriile repere." },
    ],
  }),
  component: DesprePage,
});

const etichete = [
  "„Ești prea tânără ca să înțelegi.”",
  "„După 30 de ani ar trebui deja să știi ce vrei.”",
  "„După 40 de ani nu mai…”",
  "„Nu este pentru tine.”",
  "„Nu ai suficientă experiență.”",
  "„Ai prea multă experiență.”",
  "„Este prea târziu să începi.”",
  "„Ce mai ai de oferit?”",
  "„Ai oferit prea mult, de aceea ți se întâmplă asta.”",
  "„Ești angajat, normal că nu te implici.”",
  "„Ești angajator, trebuie să îți asumi toate riscurile.”",
];

const comparatii = [
  "„Generația cu cheia la gât era mai descurcăreață.”",
  "„Generația nouă nu mai poate fără telefon.”",
  "„Noi am crescut fără atâtea informații și ne-am descurcat.”",
  "„Avalanșa informațională și suprastimularea ne distrug atenția.”",
];

const echipa = [
  {
    nume: "Gabriela Bumbac",
    rol: "Fondatoare EvoStep",
    subtitlu: "Specialist în formare și consiliere, cu experiență în lucrul direct cu oamenii și în antreprenoriat.",
    desc: "Aduce în EvoStep capacitatea de a transforma o idee într-un parcurs coerent și aplicabil, construit din experiență și testat mai întâi pe propriul drum.",
  },
  {
    nume: "Gabriela Radu",
    rol: "Cofondatoare EvoStep",
    subtitlu: "Specialist în managementul proiectelor și coach.",
    desc: "Alături de EvoStep încă de la primii pași ai implementării, aduce rigoarea organizării, întrebările care merg dincolo de primul răspuns și susținerea prin care o descoperire poate deveni alegere și acțiune.",
  },
  {
    nume: "Petrea Costel",
    rol: "Programatorul echipei EvoStep",
    subtitlu: "",
    desc: "Construiește partea tehnică a jocului, astfel încât experiența participantului să fie ușoară, clară și coerentă.",
  },
];

const etape = [
  { icon: Compass, titlu: "EU CU MINE", desc: "Poți începe să îți construiești sistemul interior de orientare. Începi să vezi ce te influențează, prin ce filtre privești lumea, ce îți poate prelua comanda și ce te ajută să revii la propriile repere." },
  { icon: Users, titlu: "EU CU CEILALȚI", desc: "Îți clarifici reperele după care te raportezi la ceilalți. Descoperi cum îl întâlnești pe celălalt și ce repere simple, de bun-simț, îți arată dacă relația are sens sau nu, cum circulă mesajele între voi, cum îți păstrezi granițele și cum puteți construi împreună fără ca unul să se piardă sau să preia totul." },
  { icon: Map, titlu: "EU ÎN LUME", desc: "Câteva repere despre lucrurile care contează pentru tine: acel ceva unic pe care nu ți-l poate oferi nimeni altcineva, ceea ce te definește și îți dă sens. Din acest loc pornesc inițiativele tale și alegerea de a da mâna cu alți oameni pentru a construi împreună ceva valoros." },
];

function DesprePage() {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <img src={evostepLogo.url} alt="EvoStep" width={56} height={56} className="h-14 w-14 rounded-full shadow-[var(--shadow-glow)]" />
          <div>
            <div className="text-[10px] tracking-[0.24em] font-semibold [background-image:var(--gradient-primary)] bg-clip-text text-transparent">EVOSTEP</div>
            <div className="text-xs text-muted-foreground">12 niveluri · 3 etape · un sistem de repere construit pas cu pas</div>
          </div>
        </div>

        <h1 className="mt-8 font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Despre <span className="[background-image:var(--gradient-primary)] bg-clip-text text-transparent">EvoStep</span>
        </h1>

        <p className="mt-6 text-base text-muted-foreground leading-relaxed">În jurul nostru circulă tot felul de verdicte:</p>

        <div className="mt-6 rounded-2xl border border-primary/15 bg-primary-soft/40 p-6 space-y-2">
          {etichete.map((e) => (
            <p key={e} className="font-serif italic text-foreground/85">{e}</p>
          ))}
        </div>

        <p className="mt-6 text-base text-muted-foreground leading-relaxed">Apoi încep comparațiile dintre generații.</p>

        <div className="mt-6 rounded-2xl border border-primary/15 bg-primary-soft/40 p-6 space-y-2">
          {comparatii.map((e) => (
            <p key={e} className="font-serif italic text-foreground/85">{e}</p>
          ))}
        </div>

        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>Poate există câte o bucată de adevăr în unele dintre aceste afirmații. Dar, repetate suficient de mult, ele devin etichete. Ne așază în tabere, ne spun cine ar trebui să fim și ne fac să ne privim unii pe alții prin șabloane deja pregătite.</p>
          <p>Între timp, viața continuă. Alegem, muncim, iubim, greșim, ne adaptăm, o luăm de la capăt și încercăm să înțelegem ce merită păstrat și ce trebuie schimbat.</p>
          <p>Poate ai ajuns aici din curiozitate sau din dorința de a încerca ceva nou. Poate ai trecut prin greutăți, ai luat-o de la capăt, ai pierdut ceva important sau simți că viața te-a pus la pământ. Indiferent de momentul în care te afli, reperele contează: te ajută să înțelegi ce ți se întâmplă și cum mergi mai departe.</p>
          <p className="font-semibold text-foreground">EvoStep a fost creat pentru a fixa câteva repere importante în această mișcare.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Repere pentru relația cu tine.</li>
            <li>Repere pentru felul în care îi întâlnești pe ceilalți.</li>
            <li>Repere pentru ceea ce alegi să construiești și să lași în lume.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Să jucăm, măcar o dată, același joc</h2>
        <div className="mt-4 space-y-5 text-foreground/85 leading-relaxed">
          <p>EvoStep este creat pentru adulți de peste 18 ani, indiferent de vârstă, profesie, statut sau etapa de viață în care se află.</p>
          <p>Poți veni dintr-o generație care a învățat să se descurce singură, cu cheia la gât și responsabilități primite devreme. Poți veni dintr-o generație care are acces la informații, posibilități și tehnologie cum nu au existat până acum, dar care trebuie să își găsească direcția într-un zgomot continuu.</p>
          <p>Fiecare generație a primit ceva valoros și fiecare are propriile dificultăți.</p>
          <p className="font-semibold text-foreground">EvoStep nu le pune în competiție.</p>
          <p>Propunerea noastră este mai simplă:</p>
          <div className="rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 space-y-1 font-serif">
            <p className="font-semibold">Hai să jucăm același joc și să vedem ce iese.</p>
            <p>Nu tineri împotriva celor maturi.</p>
            <p>Nu oameni împărțiți în tabere: angajați sau angajatori.</p>
            <p>Nu „cei care știu” împotriva „celor care încă învață”.</p>
            <p className="pt-2">Aceleași misiuni. Aceleași reguli.</p>
            <p>Întrebări comune. Răspunsuri personale.</p>
          </div>
          <p>Nu ca să vedem cine este mai bun, ci ca să înțelegem ce aduce fiecare și ce putem construi atunci când nu ne mai înghesuim unii pe alții în categorii fixe.</p>
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Ce este EvoStep</h2>
        <div className="mt-4 space-y-5 text-foreground/85 leading-relaxed">
          <p><span className="font-semibold text-foreground">EvoStep este un parcurs interactiv în 12 niveluri</span>, construit din jocuri, misiuni și întrebări care te ajută să îți formezi repere proprii pentru felul în care te vezi, alegi, relaționezi și mergi mai departe în viața reală.</p>
          <p>Fiecare nivel îți aduce câteva piese noi. Pe măsură ce înaintezi, piesele se leagă și formează propriul tău sistem de orientare.</p>
          <p>Nu toți participanții vor descoperi aceleași lucruri și nici nu trebuie. Jocul este comun, dar răspunsurile, artefactele și harta finală îi aparțin fiecărui om.</p>
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Aceasta este și povestea noastră</h2>
        <div className="mt-4 space-y-5 text-foreground/85 leading-relaxed">
          <p>Și noi am primit etichete. Am intrat în roluri pe care le-am ales și în roluri pe care alții ni le-au atribuit.</p>
          <p>Unele ne-au ajutat să creștem. Altele au devenit prea strâmte. Au existat schimbări, începuturi luate de la zero și momente în care experiența acumulată părea, în ochii altora, fie prea puțină, fie prea multă.</p>
          <p>Am lucrat cu oameni aflați la început de drum, cu oameni care se reconstruiau și cu oameni care aveau deja multă experiență, dar căutau o formă nouă în care să o folosească.</p>
          <p>Am văzut cât de repede o etichetă poate lua locul omului și cât de ușor ajungem să ne comparăm în loc să ne ascultăm și să punem laolaltă ceea ce știm.</p>
          <p className="font-semibold text-foreground">Din această experiență s-a născut EvoStep.</p>
          <p>Din dorința de a crea un joc în care oamenii să își poată construi repere, fără să fie împărțiți de la început în „prea tineri”, „prea bătrâni”, „prea puțin pregătiți”, „prea experimentați”, „angajați” sau „angajatori”.</p>
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Echipa EvoStep</h2>
        <p className="mt-4 text-foreground/85 leading-relaxed">EvoStep este construit de o echipă care privește dezvoltarea omului din mai multe unghiuri:</p>
        <div className="mt-6 space-y-4">
          {echipa.map((m) => (
            <div key={m.nume} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="font-serif text-lg font-bold text-foreground">{m.nume} <span className="font-sans text-sm font-normal text-primary">— {m.rol}</span></div>
              {m.subtitlu && <div className="mt-1 text-sm font-medium text-foreground/80">{m.subtitlu}</div>}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-foreground/85 leading-relaxed">Am lucrat mult împreună. Suntem trei generații diferite, iar fiecare a pus ce avea mai bun pentru a crea ceva valoros: o tehnologie care să apropie oameni, să păstreze firul unui proces, să facă experiența accesibilă și să susțină comunitatea.</p>
        <p className="mt-4 text-foreground/85 leading-relaxed">Nu este doar un flux de informații pe care îl parcurgi și apoi îl uiți. Este un joc în care faci lucruri concrete: răspunzi la întrebări, iei decizii, testezi în viața reală și observi ce funcționează pentru tine. Nu trebuie să înțelegi totul din prima. Începi, parcurgi misiunile și, pas cu pas, lucrurile devin mai clare.</p>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Cum este construit EvoStep</h2>
        <p className="mt-4 text-foreground/85 leading-relaxed">EvoStep are 12 niveluri, organizate în trei etape:</p>
        <div className="mt-6 grid gap-4">
          {etape.map((e) => (
            <div key={e.titlu} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl [background-image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <e.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="font-serif text-lg font-bold [background-image:var(--gradient-primary)] bg-clip-text text-transparent">{e.titlu}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Cum funcționează un nivel</h2>
        <div className="mt-4 space-y-5 text-foreground/85 leading-relaxed">
          <p>Fiecare nivel conține <span className="font-semibold text-foreground">patru misiuni principale</span> și două <span className="font-semibold text-foreground">Misiuni Fulger — MF1 și MF2</span>.</p>
          <p>Primele trei misiuni aduc trei descoperiri. Fiecare descoperire este păstrată într-un artefact personal.</p>
          <p>În cea de-a patra misiune, cele trei piese se leagă într-un artefact mai mare al nivelului.</p>
          <p>La finalul fiecărei etape, cele patru artefacte de nivel se îmbină într-un artefact complet al etapei.</p>
          <p>Iar la finalul celor 12 niveluri, cele trei artefacte de etapă formează harta ta personală de orientare.</p>
          <p>Artefactele nu sunt simple imagini. Ele păstrează reperele pe care le-ai construit și îți arată cum se leagă între ele.</p>
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-3">
          <Zap className="h-6 w-6 text-primary" /> Misiunile Fulger
        </h2>
        <div className="mt-4 space-y-5 text-foreground/85 leading-relaxed">
          <p>Unele lucruri devin clare când răspunzi la o întrebare. Altele se văd abia atunci când apare o situație reală. Misiunile Fulger duc ceea ce ai descoperit în viața de zi cu zi. Sunt provocări scurte prin care observi ce se întâmplă atunci când apare presiunea, trebuie să alegi repede sau pornește o reacție veche.</p>
          <p className="font-semibold text-foreground">Acolo se vede diferența dintre a înțelege ceva și a-l putea folosi.</p>
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Pe parcurs</h2>
        <div className="mt-4 space-y-5 text-foreground/85 leading-relaxed">
          <p>EvoStep are și un spațiu de comunitate, deschis atât celor aflați în misiuni, cât și celor care nu sunt. Discuțiile despre o misiune se poartă în spații dedicate fiecărui nivel, astfel încât fiecare etapă are propriul loc de dialog și clarificare.</p>
          <p>Mentorii EvoStep păstrează firul parcursului și sunt acolo când o misiune deschide ceva ce merită privit mai atent, nu doar bifat.</p>
          <p>Fiecare om își construiește propriile răspunsuri. Mentorul îl ajută să vadă mai clar legătura dintre piesele pe care le-a descoperit.</p>
        </div>

        <h2 className="mt-14 font-serif text-2xl md:text-3xl font-bold tracking-tight">Ce rămâne după cele 12 niveluri</h2>
        <div className="mt-4 space-y-5 text-foreground/85 leading-relaxed">
          <p className="font-semibold text-foreground">La final nu rămâi doar cu niște exerciții completate.</p>
          <p>Rămâi cu o hartă construită din propriile observații, alegeri și resurse. O hartă care funcționează ca un checklist personal, ca să fii atent la ce contează: cum te orientezi, cum relaționezi și ce vrei să duci mai departe în lume.</p>
          <p>Pentru unii, încheierea celor 12 niveluri poate deschide o etapă nouă.</p>
          <p>Cei care au integrat parcursul, se regăsesc în valorile EvoStep și vor să îi susțină și pe alții pot intra într-un proces separat de pregătire și validare pentru rolul de:</p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/25 bg-primary-soft/50 p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="font-serif text-xl font-bold [background-image:var(--gradient-primary)] bg-clip-text text-transparent">Mentor EvoStep</h3>
          </div>
          <p className="mt-3 text-foreground/85 leading-relaxed">Ca să fii mentor, nu este suficient să cunoști sistemul. Trebuie să îl fi trăit și să știi să mergi lângă un om, nu în locul lui.</p>
          <p className="mt-3 text-foreground/85 leading-relaxed">Astfel, ceea ce ai construit pentru tine poate deveni, în timp, experiența din care îi ajuți și pe alții să își construiască propriile repere.</p>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl [background-image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:opacity-95 transition">
            <Sparkles className="h-4 w-4" /> Înapoi la pagina principală
          </Link>
        </div>
      </div>
    </div>
  );
}
