import { Link } from "react-router-dom";

export default function NavBar(){
    return(
       <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>Profilo</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/registrazione"}>Registrati</Link>
        <Link to={"/carello"}></Link>
       </div>
    )
}