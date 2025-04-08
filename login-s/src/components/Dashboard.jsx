import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import NavBar from "./navBar";
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
    <>
    <NavBar></NavBar>
    <div>
      <p>Dash</p>
    
      <p>Nome: {user.nome}</p>
      <p>Cognome: {user.cognome}</p>
      <p>Email: {user.email}</p>
      <p>Età: {user.eta}</p>
      <p>Indirizzo: {user.indirizzo}</p>
      <p>Cellulare: {user.cellulare}</p>

      <button onClick={Handlelogout}>Logout</button>
    </div>

    </>
    
  );
}
