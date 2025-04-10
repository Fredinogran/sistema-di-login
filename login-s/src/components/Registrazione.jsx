import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function Registrazione() {
  // Inizializziamo lo stato con un oggetto "user" che conterrà i dati inseriti dall’utente nel form
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    tel: "",
    email: "",
    password: "",
    appuntamenti: [],
  });

  // Prendiamo la funzione di registrazione dal nostro context (quello creato in AuthProvider)
  const { registrazione } = useAuth();

  // Questa funzione si attiva ogni volta che l’utente scrive qualcosa in un input
  // Aggiorna dinamicamente lo stato dell’utente (basandosi sul nome del campo)
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  // Questa è la funzione che si attiverà al submit del form
  function handleSubmit(event) {
    event.preventDefault(); // Impedisce il comportamento di default del form (evita il refresh della pagina)
    registrazione(user); // Chiama la funzione 'registrazione' passando i dati dell'utente
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
          <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
            Registrazione
          </h1>
          <form action="#" className="w-full flex flex-col gap-4">
            <div className="flex items-start flex-col justify-start">
              <label
                for="firstName"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                placeholder="Inserisci il tuo nome"
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                for="lastName"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Cognome:
              </label>
              <input
                type="text"
                name="cognome"
                placeholder="Inserisci il tuo cognome"
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                for="username"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Numero Telefonico:
              </label>
              <input
                type="tel"
                name="tel"
                placeholder="Inserisci il tuo numero"
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                for="email"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Inserisci la tua email"
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                for="password"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Inserisci la tua password"
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            >
              Registrati
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
            </span>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Login
            </a>
          </div>
        </div>
        ;
      </form>
    </>
  );
}
