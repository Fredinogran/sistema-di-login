import { Navigate, useNavigate } from "react-router-dom";
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

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">
                Indirizzo casa da visitare
              </dt>

              <dd className="text-gray-700 sm:col-span-2">{user.indirizzo}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Data Appuntamento</dt>

              <dd className="text-gray-700 sm:col-span-2">{user.data}</dd>
            </div>
          </dl>
        </div>
        <br></br>
        <button className="logout" onClick={Handlelogout}>
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}
