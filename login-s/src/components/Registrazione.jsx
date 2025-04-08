import { use, useState } from "react";
import { useAuth } from "../context/authContext";
import NavBar from "./navBar";

export default function Registrazione() {
  // Inizializziamo lo stato con un oggetto "user" che conterrà i dati inseriti dall’utente nel form
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    eta:"",
    indirizzo:"",
    cellulare:"",
  });

  // Prendiamo la funzione di registrazione dal nostro context (quello creato in AuthProvider)
  const { registrazione, error, validate} = useAuth();


  // Questa funzione si attiva ogni volta che l’utente scrive qualcosa in un input
  // Aggiorna dinamicamente lo stato dell’utente (basandosi sul nome del campo)
  function handleChange(event) {
    setUser({ ...user, [event.target.name]:
        event.target.name === "eta" || event.target.name === "cellulare"
      ? parseInt(event.target.value)
      : event.target.value});
  }

  // Questa è la funzione che si attiverà al submit del form
  function handleSubmit(event) {
    event.preventDefault(); // Impedisce il comportamento di default del form (evita il refresh della pagina)
    registrazione(user); // Chiama la funzione 'registrazione' passando i dati dell'utente
  }

  return (
    <>
    <NavBar></NavBar>
      <form onSubmit={handleSubmit}>
        <h4>Registrazione</h4>

        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Inserisci il tuo nome"
          onChange={handleChange}
        />

        <label>Cognome</label>
        <input
          type="text"
          name="cognome"
          placeholder="Inserisci il tuo cognome"
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Inserisci la tua email"
          onChange={handleChange}
        />
        <label>Età</label>
        <input
          type="number"
          name="eta"
          placeholder="Inserisci la tua età"
          onChange={handleChange}
        />
        <label>Indirizzo</label>
        <input
          type="text"
          name="indirizzo"
          placeholder="Inserisci il tuo indirizzo"
          onChange={handleChange}
        />
        <label>Cellulare</label>
        <input
          type="tel"
          name="cellulare"
          placeholder="Inserisci il tuo cellulare"
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Inserisci la tua password"
          onChange={handleChange}
        />

        <button type="submit">Registrati</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
