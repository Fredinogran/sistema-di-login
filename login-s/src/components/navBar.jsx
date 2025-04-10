import { Link } from "react-router-dom";
import iconCarrello from '../assets/icon/cart-large-2-svgrepo-com.svg'
import { useAuth } from "../context/authContext";
import logo from '../assets/icon/logo-transparent.png';


export default function NavBar(){
    const { user } = useAuth();
    return (
      <header className="bg-sky-800 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600 dark:text-teal-600" >
                <span className="sr-only">Home</span>
                <img src={logo} alt="logo" className="h-25 mt-3"  />

              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul id="navMenu" className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      to={"/"}
                      className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    >
                      HOME
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {user ? (
                  <Link
                    to={"/dashboard"}
                    className="rounded-md bg-sky-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-sky-700"
                  >
                    PROFILO
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className="rounded-md bg-sky-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-sky-700"
                  >
                    LOGIN
                  </Link>
                 )}

                <div className="hidden sm:flex">
                  <Link
                    id="linkCarrello"
                    to={"/carrello"}
                    className="px-5 py-2.5 text-sm font-medium text-teal-600 "
                  >
                    <img className="imgCarrello" src={iconCarrello} alt="carrello" />
                  </Link>
                </div>
              </div>
              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}