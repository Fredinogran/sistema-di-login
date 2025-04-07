import { useState } from "react"
import { useAuth } from "../context/authContext"

export default function Login(){
  const[user, setUser] = useState({email:"", password:""}) 
  const {login} = useAuth()
  function handleChange(event){
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  function handleSubmit(event){
   event.preventDefault()
   login(user)
  }

  return (
  <form onSubmit={handleSubmit}>
    <p>Login</p>
    <label>Email</label>
        <input 
        type="email" 
        name="email" 
        placeholder="Inserisci la tua email" 
        onChange={handleChange}/>

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Inserisci la tua password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
    </form>


    )
}


