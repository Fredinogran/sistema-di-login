export default function Dashboard({ setIsLogged }) {
  function handleLogout() {
    localStorage.removeItem("UserLogged");
    setIsLogged(false);
  }
const user = JSON.parse(localStorage.getItem("UserLogged"))
console.log(user)
  return (
   <>
    <div>
      <p>Utente loggato</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <div>
      <h3>Info Utente</h3>
      <p>Nome: {user.nome}</p>
      <p>Cognome: {user.cognome}</p>
      <p>Email: {user.email}</p>
      <p>Età: {user.eta}</p>
      <p>Interessi: {user.interessi}</p>
    </div>
      
    </>
  );
}
