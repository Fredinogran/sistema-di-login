import { useState } from "react";
// Importiamo useState per gestire i dati inseriti nel form

import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./navBar";
// Importiamo il nostro hook personalizzato che ci dà accesso alla funzione login del context

export default function Login() {
  // Stato locale per tenere traccia dell'email e della password inserite nel form
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // Estraiamo la funzione di login dal context, che useremo quando l’utente invia il form
  const { login, error } = useAuth();

  // Funzione che si attiva quando cambiamo valore in un campo del form
  // Aggiorna dinamicamente il campo giusto in base al nome dell’input (email o password)
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value, });
  }

  // Funzione che si attiva quando inviamo il form
  function handleSubmit(event) {
    event.preventDefault(); // Previene il refresh della pagina
    login(user);
    // Chiamiamo la funzione di login passando i dati dell’utente
    if (!error) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="bg-white">
      <NavBar></NavBar>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-5"
        >
          <p className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Login
          </p>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Inserisci la tua email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Inserisci la tua password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <button
            type="submit"
            className="w-full bg-sky-800 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-black"
          >
            Login
          </button>
          {error && <p>{error}</p>}
          <span className="text-1xl font-semibold text-center text-gray-700 mb-4">
            {" "}
            Non sei registrato?{" "}
            <Link
              className="text-2xl font-semibold text-center text-sky-800 mb-4 text-sky-800"
              to="/registrazione"
            >
              Registrati
            </Link>
          </span>{" "}
        </form>

        {
          //si usa il componente Link di react router dom quando dobbiamo effetuare solamente con il renderizzamento senza altre operazione collaterali
        }
      </div>
    </div>
  );
}
