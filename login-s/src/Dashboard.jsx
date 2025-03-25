import { useState } from "react";

export default function Dashboard({ setIsLogged }) {
  function handleLogout() {
    localStorage.removeItem("UserLogged");
    setIsLogged(false);
  }
  const user = JSON.parse(localStorage.getItem("UserLogged"));
  // console.log(user);
  const [modifica, setModifica] = useState(false);
  const [userMod, setUserMod] = useState(user);

  function handleChange(event) {
    setUserMod({
      ...userMod,
      [event.target.name]:
        event.target.name === "eta"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  }

  function handleSave(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const indice = users.findIndex((x) => x.id === userMod.id);
    console.log(userMod);
    if (indice !== -1) {
      users[indice] = userMod;
    }
    console.log(indice);
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
          <form onSubmit={handleSave}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" onChange={handleChange} />
            <label htmlFor="Cognome">Cognome</label>
            <input type="text" name="cognome" onChange={handleChange} />
            <label htmlFor="eta">Età</label>
            <input type="number" name="eta" onChange={handleChange} />
            <label htmlFor="interessi">Interessi</label>
            <select
              onChange={handleChange}
              name="interessi"
              id="select_interessi"
            >
              <option value="">--scegli un interesse--</option>
              <option value="tecnologia">tecnologia</option>
              <option value="viaggi">viaggi</option>
              <option value="sport">sport</option>
              <option value="musica">musica</option>
              <option value="animali">animali</option>
              <option value="videogiochi">videogiochi</option>
            </select>
            <button type="submit">Salva</button>
          </form>
        </>
      ) : (
        <div className="infoUtente">
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
