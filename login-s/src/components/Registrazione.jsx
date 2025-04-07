import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function Registrazione() {
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });
  const { registrazione } = useAuth();
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
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
