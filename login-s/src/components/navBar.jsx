import { Link } from "react-router-dom";
import iconCarrello from '../assets/icon/icon-carrello.png'
import { useAuth } from "../context/authContext";



export default function NavBar(){
    const { user } = useAuth();
    return(
       <div className="navMenu">
        <Link className="linkNav" to={"/"}>HOME</Link>
        {user ? <Link className="linkNav" to={"/dashboard"}>PROFILO</Link> : <Link className="linkNav" to={"/login"}>LOGIN</Link> }
        <Link className="linkNav" id="linkCarrello" to={"/carrello"}><img src={iconCarrello} alt="carrello"/></Link>
        <div className="dot"></div>
       </div>
    )
}