import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Registrazione() {
  const navigate = useNavigate();
  // Inizializziamo lo stato con un oggetto "user" che conterrà i dati inseriti dall’utente nel form
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  // Prendiamo la funzione di registrazione dal nostro context (quello creato in AuthProvider)
  const { registrazione, error } = useAuth();

  // Questa funzione si attiva ogni volta che l’utente scrive qualcosa in un input
  // Aggiorna dinamicamente lo stato dell’utente (basandosi sul nome del campo)
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  // Questa è la funzione che si attiverà al submit del form
  function handleSubmit(event) {
    event.preventDefault(); // Impedisce il comportamento di default del form (evita il refresh della pagina)
    registrazione(user); // Chiama la funzione 'registrazione' passando i dati dell'utente
    if (!error) {
      navigate("/login");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="reg">
        <Link to="/">SpizzicoExpress</Link>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Inserisci il tuo nome"
          onChange={handleChange}
          required
        />

        <label>Cognome</label>
        <input
          type="text"
          name="cognome"
          placeholder="Inserisci il tuo cognome"
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Inserisci la tua email"
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Inserisci la tua password"
          onChange={handleChange}
          required
        />

        <button type="submit">Registrati</button>
      </form>
    </>
  );
}
