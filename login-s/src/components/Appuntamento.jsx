import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";
export default function Appuntamento() {
  const navigate = useNavigate();
  const { appuntamentos } = useAuth();
  const [appuntamento, setAppuntamento] = useState({
    nome_appuntamento: "",
    cognome_appuntamento: "",
    email_appuntamento: "",
    tel: "",
    via_citta: "",
    data: "",
  });

  function handleChange(event) {
    setAppuntamento({
      ...appuntamento,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    appuntamentos(appuntamento);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Prenota Appuntamento</h4>

        <label>Nome</label>
        <input
          type="text"
          name="nome_appuntamento"
          placeholder="Inserisci il tuo nome"
          onChange={handleChange}
        />

        <label>Cognome</label>
        <input
          type="text"
          name="cognome_appuntamento"
          placeholder="Inserisci il tuo cognome"
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email_appuntamento"
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
        {/* mettiamo select */}
        <input
          type="text"
          name="via_citta"
          placeholder="Inserire indirizzo e città dell'alloggio "
          onChange={handleChange}
        />
        <label>Seleziona Giorno</label>
        <input type="date" name="data" onChange={handleChange} />

        <button onClick={() => navigate("/dashboard")}>
          Prenota Appuntamento
        </button>
      </form>
    </>
  );
}
