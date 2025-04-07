import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function Registrazione() {
  // Inizializziamo lo stato con un oggetto "user" che conterrà i dati inseriti dall’utente nel form
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  // Prendiamo la funzione di registrazione dal nostro context (quello creato in AuthProvider)
  const { registrazione } = useAuth();

  // Questa funzione si attiva ogni volta che l’utente scrive qualcosa in un input
  // Aggiorna dinamicamente lo stato dell’utente (basandosi sul nome del campo)
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  // Questa è la funzione che si attiverà al submit del form
  function handleSubmit() {}

  return (
    <>
      <form>
        <h4>Registrazione</h4>

        <label>Nome</label>
        <input type="text" name="nome" placeholder="Inserisci il tuo nome" />

        <label>Cognome</label>
        <input
          type="text"
          name="cognome"
          placeholder="Inserisci il tuo cognome"
        />

        <label>Email</label>
        <input type="email" name="email" placeholder="Inserisci la tua email" />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Inserisci la tua password"
        />

        <button type="submit">Registrati</button>
      </form>
    </>
  );
}
