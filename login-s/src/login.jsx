import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //const utenti = [
  //{ email: "gianni@gmail.com", password: "gianni" },
  //{ email: "franco@gmail.com", password: "franco" },
  //{ email: "francesca@gmail.com", password: "fra" },
  //;

  //localStorage.setItem("utenti", JSON.stringify(utenti));

  function handleSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const userExist = users.find(
      (x) => x.email === email && x.password === password
    );
    if (userExist) {
      setMessage("Login effettuato con successo!");
      localStorage.setItem("isLogged", true);
    } else {
      setMessage("Credenziali errate!");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Inserisci la tua email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Inserisci la tua password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
