import { useAuth } from "../context/authContext"


export default function Dashboard(){
  const {user, logout} = useAuth() 
    return (
      <div>
      <p>Dash</p>
      <p>Nome: {user.nome}</p>
      <p>Cognome: {user.cognome}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>
         Logout
      </button>
</div>
    )
  }