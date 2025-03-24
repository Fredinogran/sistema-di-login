export default function Dashboard({ setIsLogged }) {
  function handleLogout() {
    localStorage.removeItem("userLogged");
    setIsLogged(false);
  }
  const user = JSON.parse(localStorage.getItem("userLogged"));
  return (
    <div>
      <p>Utente loggato</p>
      <div>
        <p>Nome: {user.nome}</p>
        <p>Cognome: {user.cognome}</p>
        <p>Email: {user.email}</p>
        <p>Sesso: {user.sesso}</p>
        <p>Età: {user.eta}</p>
        <p>Interesse: {user.interessi}</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
