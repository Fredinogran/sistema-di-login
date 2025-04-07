import { useState } from "react";
// Importiamo useState per gestire i dati inseriti nel form

import { useAuth } from "../context/authContext";
// Importiamo il nostro hook personalizzato che ci dà accesso alla funzione login del context

export default function Login() {
  // Stato locale per tenere traccia dell'email e della password inserite nel form
  const [user, setUser] = useState({ email: "", password: "" });

  // Estraiamo la funzione di login dal context, che useremo quando l’utente invia il form
  const { login } = useAuth();

  // Funzione che si attiva quando cambiamo valore in un campo del form
  // Aggiorna dinamicamente il campo giusto in base al nome dell’input (email o password)
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  // Funzione che si attiva quando inviamo il form
  function handleSubmit(event) {
    event.preventDefault(); // Previene il refresh della pagina
    login(user); // Chiamiamo la funzione di login passando i dati dell’utente
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Inserisci la tua email"
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Inserisci la tua password"
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}
