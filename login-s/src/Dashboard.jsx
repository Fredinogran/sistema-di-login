import { useState } from "react";

export default function Dashboard({ setIsLogged }) {
  function handleLogout() {
    localStorage.removeItem("UserLogged");
    setIsLogged(false);
  }
  const user = JSON.parse(localStorage.getItem("UserLogged"));
  console.log(user);
  const [modifica, setModifica] = useState(false);
  const [userMod, setUserMod] = useState(user);

  function handleChange(event) {
    setUserMod({
      ...user,
      [event.target.name]:
        event.target.name === "value"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  }

  function handleSave() {
    const users = JSON.parse(localStorage.getItem("users"));
    const userSave = users.find((x) => x.id === user.id);
    const indice = users.findIndex((x) => x.id === userMod.id);
    users.splice(indice, 1, userMod);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("UserLogged", JSON.stringify(userMod));
    setModifica(false);
  }

  return (
    <>
      <div>
        <p>Utente loggato</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {modifica ? (
        <>
          <input type="text" name="nome" onChange={handleChange} />
          <input type="text" name="cognome" onChange={handleChange} />
          <input type="number" name="eta" onChange={handleChange} />
          <input type="text" name="interessi" onChange={handleChange} />
          <button onClick={handleSave}>Salva</button>
        </>
      ) : (
        <div>
          <h3>Info Utente</h3>
          <p>Nome: {user.nome}</p>
          <p>Cognome: {user.cognome}</p>
          <p>Email: {user.email}</p>
          <p>Età: {user.eta}</p>
          <p>Interessi: {user.interessi}</p>
          <button onClick={() => setModifica(true)}>Modifica</button>
        </div>
      )}
    </>
  );
}
