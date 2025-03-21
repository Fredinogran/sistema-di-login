# 🧠 Esercizio React: Registrazione, Login e Dashboard con gestione utente

## 🎯 Obiettivo

Realizzare un'app React completa che permetta la **registrazione**, **autenticazione** e **gestione del profilo utente**, con salvataggio dei dati in **localStorage**.

---

## 🔹 1. Registrazione Utente

Create una **form di registrazione** con i seguenti campi:

- ✅ `nome` (campo di testo)
- ✅ `cognome` (campo di testo)
- ✅ `email` (campo di tipo email) – deve essere univoca
- ✅ `password` (campo password)  
  Deve contenere:
  - almeno 8 caratteri
  - almeno una lettera maiuscola
  - almeno un numero
  - almeno un carattere speciale (es. `@`, `$`, `!`, ecc.)
- ✅ `sesso` (radio button: Maschio / Femmina / Altro)
- ✅ `età` (numero – **deve essere maggiore di 18**)
- ✅ `interesse` (select con almeno 4 opzioni, ad esempio: _Tecnologia, Viaggi, Sport, Musica_)
- ✅ `consenso alla privacy` (checkbox – obbligatorio)

### 💾 Salvataggio

- Salvare i dati in `localStorage` come array sotto la chiave `utenti`.
- Ogni utente deve avere un **id univoco incrementale** (`1`, `2`, `3`, ecc).

  > Suggerimento: calcolate l’id come `ultimoUtente.id + 1`, oppure usate la lunghezza dell’array + 1.

- Bloccare la registrazione se:
  - l’**email è già registrata**
  - la **password** non rispetta i criteri
  - l’utente ha **meno di 18 anni**
  - non ha accettato la privacy

---

## 🔹 2. Login

Create una form di **login** che richiede:

- `email`
- `password`

### Requisiti:

- Verificare se esiste un utente con email e password corretti in `localStorage`.
- Se il login ha successo:
  - salvare l’utente autenticato in `localStorage` sotto la chiave `utenteLoggato`.
  - mostrare la **dashboard**.
- Se il login fallisce, mostrare un messaggio di errore.

---

## 🔹 3. Dashboard Utente

La dashboard deve essere accessibile **solo se l’utente è loggato** (cioè se `utenteLoggato` esiste in `localStorage`).

### Deve mostrare:

- Nome e cognome
- Email
- Sesso
- Età
- Interesse selezionato
- Messaggio: "Hai accettato la nostra privacy policy"

Aggiungere un pulsante **"Logout"** che:

- rimuove `"utenteLoggato"` dal localStorage
- riporta alla pagina di login

---

## 🔹 4. Modifica Dati

All'interno della dashboard, creare un pulsante **"Modifica dati"**.

Quando cliccato:

- Mostrare un form precompilato con i dati dell’utente (tranne l’email che non può essere modificata).
- Consentire la modifica degli altri campi.
- Validare di nuovo la password, età e privacy.
- Al salvataggio:
  - aggiornare sia l’utente nell’array `"utenti"` che `"utenteLoggato"` in `localStorage`.
  - mostrare un messaggio di conferma.

---

Buon lavoro! 🚀
