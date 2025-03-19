import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const databaseUsers = JSON.parse(localStorage.getItem("users")) || [];
    const verificaUtente = databaseUsers.some((x) => x.email === data.email);
    if (verificaUtente) {
      alert("email già registrata");
      return;
    }
    const updateUsers = [...databaseUsers, data];
    localStorage.setItem("users", JSON.stringify(updateUsers));
    alert("registrazione effetuata con successo");
    setData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Inserisci il tuo nome"
        onChange={handleChange}
        value={data.nome}
      />
      <input
        type="text"
        name="cognome"
        placeholder="Inserire cognome"
        onChange={handleChange}
        value={data.cognome}
      />
      <input
        type="email"
        name="email"
        placeholder="Inserire email"
        onChange={handleChange}
        value={data.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={data.password}
      />
      <button type="submit">Registrati</button>
    </form>
  );
}
