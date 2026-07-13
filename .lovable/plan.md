Înlocuirea hărții EvoStep cu versiunea nouă atașată

## Obiectiv
Actualizarea hărții parcursului EvoStep afișate pe site-ul public, înlocuind versiunea actuală din CDN cu imaginea nouă încărcată de utilizator (`Brain_map_Evostep.png`).

## Modificări propuse
1. Încărcarea noii hărți în Lovable Assets CDN direct din fișierul atașat, fără a copia binarul în repository.
2. Actualizarea pointerului `src/assets/harta-evostep.png.asset.json` pentru a reflecta noul `asset_id`, URL și metadate.
3. Verificarea vizuală în preview că noua hartă se încarcă corect în secțiunea „Harta jocului".

## Nu se modifică
- Structura secțiunii de pe pagina principală (`src/routes/index.tsx`).
- Alte imagini, texte, sau funcționalități ale site-ului.

## Rezultat așteptat
Secțiunea „Harta jocului" va afișa noua hartă atașată, cu cele 12 niveluri și 3 etape, în locul hărții curente.