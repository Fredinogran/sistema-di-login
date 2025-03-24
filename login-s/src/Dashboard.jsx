export default function Dashboard({ setIsLogged }) {
  function handleLogout() {
    localStorage.removeItem("UserLogged");
    setIsLogged(false);
  }
const user = JSON.parse(localStorage.getItem("UserLogged"))
console.log(user)
const [modifica, setModifica] = useState(false);
const [userMod, setUserMod] = useState(user)

function handleSave(){

}

  return (
   <>
    <div>
      <p>Utente loggato</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
    {modifica ? (  <>
            <input type="text" name="nome" value={user.nome} onChange={handleChange} />
            <input type="text" name="cognome" value={user.cognome} onChange={handleChange} />
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            <input type="number" name="eta" value={user.eta} onChange={handleChange} />
            <input type="text" name="interessi" value={user.interessi} onChange={handleChange} />
            <button onClick={handleSave}>Salva</button>
          </>
        ) : (
          <div>
          <h3>Info Utente</h3>
          <p>Nome: {user.nome}</p>
          <p>Cognome: {user.cognome}</p>
          <p>Email: {user.email}</p>
          <p>Età: {user.eta}</p>
          <p>Interessi: {user.interessi}</p>
          <button onClick={()=> setModifica(true)}>Modifica</button>
        </div>
        )
        }
   
      
    </>
  );
}
