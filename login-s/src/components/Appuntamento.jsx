import { useState } from "react";
import { useAuth } from "../context/authContext";
export default function Appuntamento() {
  const { user } = useAuth();
  const [appuntamento, setAppuntamento] = useState({
    nome: "",
    cognome: "",
    email: "",
    tel: "",
    via_citta: "",
    data: "",
  });

  function handleChange(event) {
    setAppuntamento({ ...user, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form onClick={handleSubmit}>
        <h4>Prenota Appuntamento</h4>

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
        <label>Telefono</label>
        <input
          type="tel"
          name="tel"
          placeholder="Inserire numero telefonico "
          onChange={handleChange}
        />
        <label>Via,Città</label>
        <input
          type="text"
          name="via_citta"
          placeholder="Inserire indirizzo e città dell'alloggio "
          onChange={handleChange}
        />
        <label>Seleziona Giorno</label>
        <input type="date" name="data" onChange={handleChange} />

        <button type="submit">Prenota Appuntamento</button>
      </form>
    </>
  );
}
