import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
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
      <p>Dash</p>

      <p>Nome: {user.nome}</p>
      <p>Cognome: {user.cognome}</p>
      <p>Email: {user.email}</p>

      <button onClick={Handlelogout}>Logout</button>
    </div>
  );
}
