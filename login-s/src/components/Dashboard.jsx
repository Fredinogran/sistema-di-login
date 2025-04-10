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
    <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-green-300">
            Your User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
        <button className="rounded-md bg-sky-300 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
        onClick={Handlelogout}>Logout</button>
        </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-pink-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-green-400 sm:mt-0 sm:col-span-2">
                {user.nome} {user.cognome}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-pink-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-green-400 sm:mt-0 sm:col-span-2">
                   {user.email}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-pink-500">
                    Phone number
                </dt>
                <dd class="mt-1 text-sm text-green-400 sm:mt-0 sm:col-span-2">
                {user.cellulare}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-pink-500">
                    Address
                </dt>
                <dd class="mt-1 text-sm text-green-400 sm:mt-0 sm:col-span-2">
                    {user.indirizzo}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-pink-500">
                    Age
                </dt>
                <dd class="mt-1 text-sm text-green-400 sm:mt-0 sm:col-span-2">
                    {user.eta}
                </dd>
            </div>
        </dl>
    </div>
    </div>
    </>
    
  )
}
