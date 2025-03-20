import { useState } from "react";

export default function Form() {
  const [message, setMessage] = useState("");
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
  function validate(password) {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const databaseUsers = JSON.parse(localStorage.getItem("users")) || [];
    const verificaUtente = databaseUsers.some((x) => x.email === data.email);
    if (verificaUtente) {
      setMessage("email già registrata");
      return;
    }
    if (data.password.length < 8) {
      setMessage("La password deve contenere almeno 8 caratteri");
      return;
    }
    if (!validate(data.password)) {
      setMessage(
        "La password deve contenere almeno 8 caratteri una lettera maiuscola e un carattere speciale!"
      );
      return;
    }
    const updateUsers = [...databaseUsers, data];
    localStorage.setItem("users", JSON.stringify(updateUsers));
    setMessage("registrazione effetuata con successo");
    setData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h6>Registrati</h6>
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        placeholder="Inserisci il tuo nome"
        onChange={handleChange}
        value={data.nome}
      />
      <label>Cognome</label>
      <input
        type="text"
        name="cognome"
        placeholder="Inserire cognome"
        onChange={handleChange}
        value={data.cognome}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Inserire email"
        onChange={handleChange}
        value={data.email}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={data.password}
      />
      <button type="submit">Registrati</button>
      {message && <p>{message}</p>}
    </form>
  );
}
