# Guida all'Installazione — Come mettere online il tuo sito in 4 passaggi

Benvenuto/a! Questa guida ti accompagna dall'inizio alla fine: dall'apertura del tuo account GitHub fino al momento in cui il tuo sito è visibile su internet. Segui i passaggi nell'ordine esatto in cui sono scritti. Se qualcosa non funziona, fermati e scrivi al bot di assistenza o a veronica.ompage@gmail.com prima di procedere.

**Tempo stimato:** 15 minuti · Tutto dal browser, nessun programma da installare

## Cosa ti serve prima di iniziare

- Un computer (va bene anche un Mac, va bene Windows)
- Una connessione internet
- Il link alla cartella (detta *repository*) del tuo sito (inviato via messaggio o email)

Non ti serve installare nessun programma. Tutto avviene nel browser.

---

## PASSAGGIO 1 — Crea il tuo account GitHub

GitHub è il servizio gratuito dove vive il codice del tuo sito. Funziona come un Google Drive per i file tecnici del sito web.

- Vai su github.com e clicca il bottone **Sign up** in alto a destra
- Inserisci la tua email, scegli una password e un nome utente (tutto minuscolo senza spazi — es. `mario-rossi` oppure `fioreria-verde`) oppure accedi con Google.
- Verifica la tua email inserendo il codice che ti arriva (CONTROLLA NELLA CARTELLA SPAM)
- Quando ti chiede "What's your plan?" scegli **Free** e vai avanti

> Scrivi da qualche parte il tuo **nome utente GitHub**: ti servirà tra poco.

---

## PASSAGGIO 2 — Copia il tuo sito sul tuo account

Ti ho inviato un link a un repository. Questo è il modello del tuo sito — devi copiarlo sul tuo account personale.

1. Copia il link che ti ho inviato (è una pagina su github.com)
2. In alto a destra nella pagina clicca sul bottone con un **+** e poi clicca su **"Import repository"**
3. Nella pagina successiva:
   - Incolla il link che ti ho inviato in **"The URL for your source repository"**
   - **Scrivi il nome provvisorio del tuo sito**, tutto minuscolo senza spazi (es. `mia-fioreria` oppure `studio-rossi`) in **"Repository name"**. Non ti preoccupare, questo nome serve solo finché fai la prova.
   - Public / Private: lascia su **Public** (il sito deve essere visibile)
   - Lascia tutto il resto com'è
4. Clicca il tasto verde **"Begin import"**

Dopo 1-2 minuti clicca sul link in blu nella frase "*Importing complete! Your new repository ... is ready*". Sei nella pagina del tuo repository personale. Il sito esiste, ma non è ancora visibile online.

---

## PASSAGGIO 3 — Attiva la pubblicazione automatica (GitHub Pages)

Questo passaggio dice a GitHub di rendere il tuo sito accessibile da internet.

1. Nella pagina del tuo repository, clicca su **Settings** (in alto, nella barra con i tab)
2. Nel menu a sinistra scorri verso il basso e clicca **Pages**
3. Nella sezione "Source" clicca il menu a tendina che dice "None" e seleziona **"main"**
4. Clicca **Save**

Dopo 1-2 minuti ricarica la pagina. GitHub mostra il messaggio **"Your site is live at..."** seguito dall'indirizzo web del tuo sito.

**Formato dell'indirizzo:** `https://[tuo-nome-utente].github.io/[nome-repository]/`
Esempio: `https://mario-rossi.github.io/mia-fioreria/`

Apri quell'indirizzo cliccando su **"Visit site"**. La prima volta può volerci qualche minuto.

---

## PASSAGGIO 4 — Crea la tua chiave di accesso al pannello

Per modificare i contenuti del sito userai il Pannello di Controllo. Ha bisogno di una "password" speciale (detta *token*) che dimostra a GitHub che sei tu il proprietario del sito. Il token inizia con `ghp_` seguito da lettere e numeri.

> ⚠️ **IMPORTANTE:** GitHub ti mostra il token **UNA SOLA VOLTA**. Copialo subito e salvalo in un posto sicuro (es. nelle note del telefono o in un file sul desktop). Se lo perdi devi generarne uno nuovo.

**Come creare il token:**

1. Clicca la tua foto profilo in alto a destra su GitHub → **Settings**
2. Scorri fino in fondo alla pagina e clicca **Developer settings** nel menu a sinistra
3. Clicca **Personal access tokens → Tokens (classic)**
4. Clicca **Generate new token → Generate new token (classic)**
5. In **Note** scrivi qualcosa come *Pannello*. In **Expiration** seleziona *no expiration* (o quello che preferisci).
6. Spunta la casella **repo** (quella con scritto "Full control of private repositories")
7. Scorri in fondo e clicca **Generate token**. Copialo subito.

---

## Ora sei pronto/a

- ✅ Account GitHub creato
- ✅ Sito copiato sul tuo account
- ✅ GitHub Pages attivo (sito online)
- ✅ Personal Access Token creato e salvato

**Indirizzo del tuo pannello di controllo:**
`https://[tuo-nome-utente].github.io/[nome-repository]/pannello.html`

Aggiungilo ai preferiti del browser — lo userai ogni volta che vuoi aggiornare qualcosa.

---

## ⛔ Cosa NON fare mai (installazione)

- Non aprire, modificare o cancellare `index.html`, `config.json` o qualsiasi file `.css` o `.js` direttamente su GitHub. Usa sempre e solo il Pannello.
- Non cancellare il repository — il sito smetterebbe di esistere e tutti i contenuti andrebbero persi.
- Non inserire numeri di telefono senza il prefisso `+39`. Scrivi sempre `+39` seguito dal numero, senza spazi. Es: `+393331234567`. Senza il prefisso il bottone WhatsApp non funziona.

---

# Guida al Pannello di Controllo

## Come gestire e aggiornare il tuo sito in autonomia

Il Pannello di Controllo è la tua interfaccia personale per modificare qualsiasi contenuto del sito: testi, foto, orari, prezzi, recensioni, colori e molto altro. Non devi sapere nulla di programmazione.

## Prima apertura — Configura la connessione

La prima volta che apri il pannello ti viene chiesto di inserire le tue credenziali GitHub. Nella schermata di configurazione trovi tre campi:

- **Personal Access Token GitHub** — inizia con `ghp_`. Incollala qui.
- **Username GitHub** — il tuo nome utente su GitHub.
- **Nome del repository** — solo il nome, senza lo username. Es: `fioreria` (non `mario-rossi/fioreria`).

Clicca **"Connetti e carica"**. Il pannello verifica le credenziali e carica automaticamente tutti i tuoi contenuti.

## Come è organizzato il pannello

- **Menu a sinistra:** le sezioni del sito, cliccabili come schede.
- **Area principale a destra:** i campi da compilare per la sezione selezionata.
- **"Salva online"** (barra in alto): il bottone principale. Ogni volta che finisci di fare modifiche, clicca qui per pubblicarle. Aspetta qualche minuto, poi clicca "Anteprima" per vedere il sito aggiornato.
- **Apri Guida PDF:** apre questa guida direttamente dal pannello.
- **Assistente:** usa il bot AI se hai dubbi sul funzionamento del pannello o vuoi farti aiutare a scrivere i testi.

> Se lasci vuoti i campi di testo, la sezione non apparirà. Puoi modificare il layout di alcune sezioni. Alcuni siti hanno elementi extra non specificati in questa guida, ma funzionano come tutti gli altri campi.

---

## Le sezioni del pannello

### Impostazioni

- **Crediti Ompage Footer** — rimuovi la scritta "Sito realizzato da Ompage" nel footer.
- **Tema tipografico** — scegli la combinazione di font che si adatta meglio alla tua attività.
- **Palette colori** — scegli la combinazione di colori principale.
- **Filtro Fotografico** — se non hai foto di alta qualità, i filtri possono migliorare l'aspetto del sito.

### SEO

- **Titolo SEO** (max 60 caratteri) — il titolo che Google mostra nei risultati di ricerca.
- **Descrizione SEO** (max 155 caratteri) — la descrizione sotto il titolo su Google. Scrivi qualcosa che invogli a cliccare.
- **Immagine anteprima social** — la foto che appare quando qualcuno condivide il link su WhatsApp o social. Usa un'immagine orizzontale.

### Navbar

- **Navbar Logo Tipo** — TESTO per il nome scritto, IMMAGINE per caricare un logo grafico.
- **Testo logo / Logo Immagine** — il nome o il file del logo che appare in alto a sinistra.
- **Voci del menu** — puoi rinominare le voci. Di solito non è necessario modificarle.

### Promozioni

- **Barra promo** — una striscia in cima al sito per offerte o annunci veloci. Imposta una data di scadenza — sparisce automaticamente.
- **Popup emergenza** — un riquadro al centro dello schermo. Usalo SOLO per comunicazioni urgenti (chiusura straordinaria, trasferimento). Non per promozioni ordinarie.
- **CTA Testo / CTA Tipo / Scadenza** — bottone opzionale su barra e popup. WHATSAPP apre WhatsApp, TELEFONO avvia una chiamata, EMAIL copia la tua email, PRENOTAZIONI apre il sito di prenotazioni. I dati di contatto vengono presi automaticamente dalla sezione Footer & Contatti.

### Hero

La sezione principale del sito, quella che si vede appena si apre la pagina.

- **Hero Layout** — CON_FOTO_SFONDO: foto come sfondo. SENZA_FOTO: solo testo.
- **Immagine Hero** — la foto di sfondo.
- **Hero Titolo** — il messaggio più importante del sito. Poche parole, alto impatto.
- **Hero Sottotitolo** — una riga di spiegazione sotto il titolo.
- **Hero CTA Testo / CTA Tipo** — il bottone principale. WHATSAPP, TELEFONO, EMAIL o PRENOTAZIONI.
- **Hero Orari Attivi** — se SI, mostra gli orari di apertura nella hero (presi da Footer & Contatti).

### Nastro

Una barra scorrevole con fino a 4 testi in movimento.

- **Nastro attivo** — per accendere o spegnere la barra scorrevole.
- **Testo nastro** — i testi in movimento.

### Chi Siamo

- **Chi Siamo Attivo** — mostra o nasconde l'intera sezione.
- **Layout** — FOTO_E_TESTO: foto + testo affiancati. TRE_PASSI: tre aree per raccontare il tuo processo. SOLO_TESTO: solo testo.
- **Titolo / Micro / Testo / Citazione** — i campi principali. Citazione e firma (Nome/Ruolo) disponibili nei layout FOTO_E_TESTO e SOLO_TESTO.
- **Passo 1/2/3 (layout TRE_PASSI)** — per ogni passo: titolo, testo e foto opzionale (Chi Siamo Passo Foto Attiva: SI/NO).

### Vantaggi

Tre card affiancate per raccontare i tuoi punti di forza. Quando attiva ci sono sempre tre card. Per ogni card inserisci titolo e testo. Per nascondere la sezione imposta Vantaggi Attivi su NO.

### Servizi

Puoi attivarne fino a 10. Ogni servizio ha: nome, descrizione, prezzo (opzionale), foto (opzionale). Attiva solo quelli che vuoi mostrare.

- **PDF Listino** — carica un PDF dei prezzi. Apparirà un bottone nel sito per scaricarlo.

### Galleria

- **Galleria principale** — fino a 9 foto con didascalia opzionale.
- **Galleria estesa** — fino a 20 foto aggiuntive in un overlay separato.

### Prima & Dopo

Slider interattivi che mostrano due foto a confronto — l'utente trascina per rivelare la differenza. Puoi attivare fino a 6 coppie. Per ogni coppia carica la foto "prima" e la foto "dopo", con didascalia opzionale.

### Recensioni

Fino a 8 recensioni. Per ognuna: nome del cliente, testo, stelle (da 1 a 5). Attiva solo quelle che vuoi mostrare.

### FAQ

Fino a 10 FAQ. Per ognuna inserisci la domanda e la risposta.

### Footer & Contatti

- **Nome attività / Indirizzo / Orari** — informazioni di base usate in tutto il sito dalle CTA.
- **Telefono / WhatsApp / Email** — inserisci sempre il prefisso `+39`, senza spazi. Es: `+393331234567`.
- **Instagram / Facebook** — incolla il link completo del profilo, incluso `https://`.
- **Footer CTA Tipo** — WHATSAPP, TELEFONO o EMAIL.
- **Footer Mappa Attiva** — se SI, appare un bottone "Ottieni indicazioni" che apre Google Maps con il tuo indirizzo.
- **Prenotazioni online** — collega un sistema di prenotazione esterno. Attiva, incolla l'URL e scrivi il testo del bottone (es. "Prenota ora").

### Note Legali

Cookie Policy e Privacy Policy già precompilati con una versione standard GDPR. Puoi lasciarli così o adattarli. Se hai un consulente legale, condividi i testi con lui prima di modificarli.

### Badge contatto mobile

Un bottone rotondo fisso visibile solo su smartphone, in basso a destra. WHATSAPP usa il numero WhatsApp, TELEFONO usa il numero di telefono.

---

## Come salvare le modifiche

Ogni volta che hai finito di modificare, clicca **"Salva online"** in alto a destra. Il pannello verifica i campi obbligatori, salva su GitHub e mostra il messaggio di conferma. Il sito si aggiorna entro 1-5 minuti.

Non chiudere il browser mentre vedi "⏳ Salvataggio in corso...".

Il pannello salva automaticamente una bozza nel browser ogni 30 secondi. Se chiudi per errore, alla riapertura ti chiede se vuoi ripristinare le modifiche non salvate. Queste bozze esistono solo nel browser — per pubblicarle devi sempre cliccare "Salva online".

## Caricare foto e file

Clicca il campo della foto e usa il bottone di caricamento. Formati accettati: JPG, PNG, WEBP per le foto — PDF per i listini. Non è necessario comprimere prima di caricare. Per la hero usa foto orizzontali ad alta risoluzione. Se le foto sono molto pesanti (oltre 10-20 MB), comprimi prima con squoosh.app.

---

## ⛔ Cosa NON fare mai (pannello)

- Non modificare `index.html` o `config.json` direttamente su GitHub. Usa sempre e solo il Pannello.
- Non cancellare file dalla cartella `assets/` — contiene tutte le foto del sito.
- Non usare il popup emergenza per promozioni ordinarie. Per offerte usa la Barra Promo.
- Non inserire link senza `https://` — scrivi sempre l'indirizzo completo.

## Risoluzione problemi — Il pannello non si apre

**Errore "Token non valido":** il Personal Access Token è scaduto o errato. Creane uno nuovo su GitHub (Settings → Developer settings → Tokens → Generate new token) e aggiornalo nel pannello.

**Errore "Repository non trovato":** controlla che username e nome repository siano corretti.

**Il sito non si aggiorna dopo il salvataggio:** aspetta fino a 5 minuti e ricarica la pagina del sito.

**Il pannello si apre ma è vuoto:** ricarica la pagina. Se il problema persiste, scrivi a veronica.ompage@gmail.com.

**Le modifiche non vengono salvate:** il Personal Access Token potrebbe essere scaduto. Creane uno nuovo e aggiornalo nelle impostazioni del pannello.

---

# Appendice — Come configurare le prenotazioni online

Se il tuo sito prevede la prenotazione online, devi creare un calendario su una piattaforma esterna e incollare il link nel campo URL prenotazione del pannello.

## Opzione A — Cal.com (gratuito, consigliato)

Meglio di Calendly se vuoi più tipi di appuntamento con durate diverse.

1. Vai su cal.com, clicca "Get started" e registrati. Scegli il piano Free.
2. Collega Google Calendar o Outlook per evitare doppie prenotazioni.
3. Vai su Disponibilità e imposta giorni e orari in cui sei disponibile.
4. Vai su Tipo di Evento → "+Nuovo". Scegli nome, durata e luogo dell'appuntamento.
5. Vai sul tuo profilo (in alto a sinistra). Copia la tua username (`cal.com/tuonome`).
6. Nel Pannello → Prenotazioni online: attiva, incolla il link, clicca Salva online.

## Opzione B — Calendly (gratuito, piano base)

Il piano gratuito permette un solo tipo di appuntamento.

1. Vai su calendly.com e clicca "Sign up free".
2. Collega Google Calendar o Outlook.
3. Seleziona giorni, orari disponibili e tipo di appuntamento.
4. Calendly crea un evento da 30 minuti. Modificane nome e durata cliccandoci sopra.
5. Clicca sul tuo evento → "Copy link" (`calendly.com/tuonome/...`).
6. Nel Pannello → Prenotazioni online: attiva, incolla il link, clicca Salva online.

Entrambe le piattaforme inviano automaticamente email di conferma e promemoria ai tuoi clienti.

---

## Consigli pratici

**Usa il bot se non sai cosa scrivere**

Esempi di richieste efficaci:
- "Scrivi un titolo hero accattivante per il sito di un fioraio a Milano. Deve essere breve, evocare artigianalità e bellezza naturale."
- "Scrivi una descrizione SEO per uno studio di yoga a Torino che offre corsi per tutti i livelli."
- "Scrivi 5 FAQ per un parrucchiere a Roma, con domande e risposte naturali che un cliente potrebbe cercare su Google Maps."

Specifica sempre tipo di attività, città e tono (professionale, caldo, giovane). Adatta i testi con le tue parole — l'AI è un punto di partenza.

**Consigli per le foto**
- Usa sempre foto tue, non prese da internet.
- Fotografa vicino a una finestra — la luce naturale fa sembrare tutto più professionale.
- La foto hero deve essere ad alta risoluzione — è la prima cosa che vede il visitatore.
- Non serve comprimere prima di caricare — viene fatto in automatico.

**SEO locale — come farti trovare su Google**
- Titolo SEO: nome attività + tipo + città. Es: "Mario Rossi — Idraulico a Torino | Pronto intervento".
- Nelle FAQ includi domande con la città: "Dove si trova…?", "Quanto costa … a [città]?".
- Nelle descrizioni dei servizi usa parole chiave legate alla tua zona.
- Se servi zone specifiche menzionale in Chi Siamo e SEO. Es: "Serviamo Milano, Sesto San Giovanni e l'hinterland nord".
- Aggiorna il sito regolarmente — anche solo le recensioni o le FAQ aiuta Google a considerare il sito "vivo".

**Ottimizza i bottoni WhatsApp**
- Inserisci sempre `+39` davanti al numero, senza spazi: es. `+393331234567`.
- Attiva il badge mobile — la maggior parte delle visite arriva da smartphone.
- "Scrivici su WhatsApp" o "Chiamaci" convertono meglio di "Contatti".

**Cosa aggiornare regolarmente**
- Barra promo — sfruttala per stagioni, festività e offerte. Ricorda la data di scadenza.
- Galleria — aggiungi foto dei lavori più recenti per mostrare che l'attività è attiva.
- Orari — aggiornali subito in caso di variazioni o chiusure straordinarie.

---

Se sei soddisfatto/a del sito e vuoi procedere, ci sono due cose da fare in circa 20-30 minuti: togliere il watermark "Sito di prova" e comprare il dominio personalizzato (es. www.tuo-nome.it). La spesa è circa 7-10 euro all'anno — tutto il resto, compreso l'hosting, rimane gratuito su GitHub. Scrivimi quando decidi.

Hai bisogno di aiuto? Scrivi a veronica.ompage@gmail.com — includi uno screenshot di quello che vedi.
