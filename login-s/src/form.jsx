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
      <h6>Registrati</h6>
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        placeholder="Inserisci il tuo nome"
        onChange={handleChange}
        value={data.nome}
        required
      />
      <label>Cognome</label>
      <input
        type="text"
        name="cognome"
        placeholder="Inserire cognome"
        onChange={handleChange}
        value={data.cognome}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Inserire email"
        onChange={handleChange}
        value={data.email}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={data.password}
        required
      />
      <label>Sesso</label>
      <div required onChange={handleChange} value={data.sesso}>
        <input type="radio" id="maschio" name="sesso" value={"Maschio"} />
        <label for="maschio">Maschio</label>

        <input type="radio" id="femmina" name="sesso" value={"Femmina"} />
        <label for="femmina">Femmina</label>

        <input type="radio" id="altro" name="sesso" value={"Altro"} />
        <label for="altro">Altro</label>
      </div>
      <label>Età</label>
      <input
        type="number"
        name="eta"
        id="eta"
        min="18"
        onChange={handleChange}
        value={data.eta}
        required
      />
      <label>Interesse</label>
      <select
        name="interessi"
        id="interessi"
        onChange={handleChange}
        value={data.interessi}
        required
      >
        <option value="">--Scegli un'opzione--</option>
        <option value="tecnologia">Tecnologia</option>
        <option value="viaggi">Viaggi</option>
        <option value="sport">Sport</option>
        <option value="musica">Musica</option>
      </select>
      <label>Consenso alla privacy</label>
      <div>
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          value={"privacy"}
          required
        />
        <label>Acconsento</label>
      </div>
      <button type="submit">Registrati</button>
    </form>
  );
}
