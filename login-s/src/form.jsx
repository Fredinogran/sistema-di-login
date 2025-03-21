import { useState, useRef } from "react";

export default function Form() {
  const femminaRef = useRef(null);
  const maschioRef = useRef(null);
  const altroRef = useRef(null);

  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    id: "",
    nome: "",
    cognome: "",
    email: "",
    password: "",
    genere: "",
    eta: "",
    interessi: "",
    privacy: false,
  });
  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]:
        event.target.name === "eta"
          ? parseInt(event.target.value)
          : event.target.value,
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
        "La password deve contenere almeno 8 caratteri una lettera maiuscola e un carattere speciale ed almeno 1 numero"
      );
      return;
    }
    if (data.eta < 18) {
      setMessage("I minorenni non possono registrarsi");
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
    <>
      <form onSubmit={handleSubmit}>
        <h6>Registrati</h6>
        <label>Nome</label>
        <input
          required
          type="text"
          name="nome"
          placeholder="Inserisci il tuo nome"
          onChange={handleChange}
          value={data.nome}
        />
        <label>Cognome</label>
        <input
          required
          type="text"
          name="cognome"
          placeholder="Inserire cognome"
          onChange={handleChange}
          value={data.cognome}
        />
        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Inserire email"
          onChange={handleChange}
          value={data.email}
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
        />
        <section className="input-genere">
          <p>Genere</p>
          <div>
            <input
              type="radio"
              id="femmina"
              name="genere"
              value="femmina"
              ref={femminaRef}
              onChange={handleChange}
            />
            <label htmlFor="F">Femmina</label>
          </div>
          <div>
            <input
              type="radio"
              id="maschio"
              name="genere"
              value="maschio"
              ref={maschioRef}
              onChange={handleChange}
            />
            <label htmlFor="maschio">Maschio</label>
          </div>
          <div>
            <input
              type="radio"
              id="altro"
              name="genere"
              value="altro"
              ref={altroRef}
              onChange={handleChange}
            />
            <label htmlFor="altro">Altro</label>
          </div>
        </section>
        <label>Età</label>
        <input
          type="number"
          name="eta"
          value={data.eta}
          onChange={handleChange}
          required
          min={18}
        />
        <section className="interesse">
          <label for="interessi-select">scegli un interesse</label>

          <select name="interessi" id="select_interessi">
            <option value="">--scegli un interesse--</option>
            <option value="tecnologia">tecnologia</option>
            <option value="viaggi">viaggi</option>
            <option value="sport">sport</option>
            <option value="musica">musica</option>
            <option value="animali">animali</option>
            <option value="videogiochi">videogiochi</option>
          </select>
        </section>

        <section>
          <label for="privacy">Accetta la privacy</label>
          <input
            type="checkbox"
            id="privacy"
            name="Policy"
            value="Privacy Policy"
            required
          />
        </section>

        <button type="submit">Registrati</button>
        {message && <p>{message}</p>}
      </form>
    </>
  );
}
