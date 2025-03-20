export default function Dashboard({ setIsLogged }) {
  function handleLogout() {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  }

  return (
    <div>
      <p>Utente loggato</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
