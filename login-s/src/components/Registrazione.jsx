import {  useState } from "react";
import { useAuth } from "../context/authContext";
import NavBar from "./navBar";
import { useNavigate } from "react-router-dom";

export default function Registrazione() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    eta: "",
    indirizzo: "",
    cellulare: "",
  });

  const { registrazione, error, validate } = useAuth();

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]:
        name === "eta" || name === "cellulare" ? parseInt(value) || "" : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationError = validate(user);
    if (validationError) {
      alert(validationError);
      return;
    }
    registrazione(user);
    if (!error) {
      navigate("/login");
    }
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-cyan-50 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-5 my-8"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Registrazione
          </h2>

          <div>
            <label className="block text-gray-600 mb-1">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Inserisci il tuo nome"
              value={user.nome}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Cognome</label>
            <input
              type="text"
              name="cognome"
              placeholder="Inserisci il tuo cognome"
              value={user.cognome}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Inserisci la tua email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Età</label>
            <input
              type="number"
              name="eta"
              placeholder="Inserisci la tua età"
              value={user.eta}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Indirizzo</label>
            <input
              type="text"
              name="indirizzo"
              placeholder="Inserisci il tuo indirizzo"
              value={user.indirizzo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Cellulare</label>
            <input
              type="tel"
              name="cellulare"
              placeholder="Inserisci il tuo cellulare"
              value={user.cellulare}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Inserisci la tua password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sky-300 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-200 text-black"
          >
            
            Registrati
          </button>
        </form>
      </div>
    </>
  );
}
