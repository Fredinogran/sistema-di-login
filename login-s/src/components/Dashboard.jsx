import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
// Importiamo il nostro hook useAuth che ci dà accesso all'utente loggato e alla funzione di logout

export default function Dashboard() {
  // Estraiamo 'user' e 'logout' dal context
  // 'user' contiene i dati dell'utente loggato e 'logout' è la funzione per fare logout
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function Handlelogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <h1 className="titolo">
          <strong>Informazioni Personali:</strong>
        </h1>
        <hr></hr>
        <br></br>
        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-200 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Nome e Cognome</dt>

              <dd className="text-gray-700 sm:col-span-2">
                {user.nome} {user.cognome}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Email</dt>

              <dd className="text-gray-700 sm:col-span-2">{user.email}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Telefono</dt>

              <dd className="text-gray-700 sm:col-span-2">{user.tel}</dd>
            </div>
          </dl>
        </div>
        <br></br>
        <div className="appuntamenti">
          <h1 className="titolo">
            <strong>I miei appuntamenti:</strong>
          </h1>
          {user.appuntamenti.map((x) => (
            <div>
              <a
                href="#"
                className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
              >
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                  <div className="mt-4 sm:mt-0">
                    <h3 className="text-lg font-medium text-pretty text-gray-900">
                      {x.via_citta}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      Visitatore: {x.nome_appuntamento} {x.cognome_appuntamento}
                    </p>
                  </div>
                </div>

                <dl className="mt-6 flex gap-4 lg:gap-6">
                  <div>
                    <dt className="text-sm font-medium text-gray-700">
                      Data visita:
                    </dt>

                    <dd className="text-xs text-gray-700">{x.data}</dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium text-gray-700">
                      Recapito telefonico :
                    </dt>

                    <dd className="text-xs text-gray-700">{x.tel}</dd>
                  </div>
                </dl>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <button
            className=" block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            onClick={() => {
              <Link to="/appuntamento" />;
            }}
          >
            Prenota Appuntamento
          </button>
          <button
            className=" block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            onClick={Handlelogout}
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
