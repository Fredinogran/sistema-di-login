import { useState } from "react";

export default function Dashboard({ setIsLogged }) {
  const user = JSON.parse(localStorage.getItem("userLogged"));
  const [modifica, setModifica] = useState(false);
  const [userMod, setUserMod] = useState(user);

  function handleLogout() {
    localStorage.removeItem("userLogged");
    setIsLogged(false);
  }

  function handleModifica() {
    setModifica(true);
  }

  function handleChange(event) {
    setUserMod({
      ...userMod,
      [event.target.name]:
        event.target.name === "eta"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const index = users.findIndex((x) => x.id === userMod.id);
    users.splice(index, 1, userMod);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userLogged", JSON.stringify(userMod));
    setModifica(false);
  }
  return (
    <div>
      <p>Utente loggato</p>
      {modifica ? (
        <form onSubmit={handleSubmit}>
          <h6>Registrati</h6>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Inserisci il tuo nome"
            onChange={handleChange}
            value={userMod.nome}
            required
          />
          <label>Cognome</label>
          <input
            type="text"
            name="cognome"
            placeholder="Inserire cognome"
            onChange={handleChange}
            value={userMod.cognome}
            required
          />

          <label>Sesso</label>
          <div required onChange={handleChange} value={userMod.sesso}>
            <input
              type="radio"
              id="maschio"
              name="sesso"
              value={"Maschio"}
              checked={userMod.sesso === "Maschio"}
            />
            <label htmlFor="maschio">Maschio</label>

            <input
              type="radio"
              id="femmina"
              name="sesso"
              value={"Femmina"}
              checked={userMod.sesso === "Femmina"}
            />
            <label htmlFor="femmina">Femmina</label>

            <input
              type="radio"
              id="altro"
              name="sesso"
              value={"Altro"}
              checked={userMod.sesso === "Altro"}
            />
            <label htmlFor="altro">Altro</label>
          </div>
          <label>Età</label>
          <input
            type="number"
            name="eta"
            id="eta"
            min="18"
            placeholder="Inserire età"
            onChange={handleChange}
            value={userMod.eta}
            required
          />
          <label>Interesse</label>
          <select
            name="interessi"
            id="interessi"
            onChange={handleChange}
            value={userMod.interessi}
            required
          >
            <option value="">--Scegli un'opzione--</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="viaggi">Viaggi</option>
            <option value="sport">Sport</option>
            <option value="musica">Musica</option>
          </select>

          <button type="submit">Modifica dati</button>
        </form>
      ) : (
        <div>
          <p>Nome: {user.nome}</p>
          <p>Cognome: {user.cognome}</p>
          <p>Email: {user.email}</p>
          <p>Sesso: {user.sesso}</p>
          <p>Età: {user.eta}</p>
          <p>Interesse: {user.interessi}</p>
          <p>Hai accettato la nostra privacy policy!</p>
        </div>
      )}
      <button onClick={handleModifica}>Modifica dati</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
