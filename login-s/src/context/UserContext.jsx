import { createContext } from "react";

export const UserContext = createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  function registrati(userData) {
    const userExist = users.find((x) => x.email === userData.email);
    if (userExist) {
      return { esito: false, messaggio: "Email già registrata" };
    }
    setUsers((prev) => [...prev, userData]);
    return { esito: true, messaggio: "Registrazione effettuata con successo!" };
  }
  function login(email, password) {
    const userExist = users.find(
      (x) => x.email === email && x.password === password
    );
    if (userExist) {
      setUser(userExist);
      return { esito: true, messaggio: "Login effettuato con successo!" };
    }
    return { esito: false, messaggio: "Credenziali errate" };
  }
  function logout() {
    setUser(null);
  }
  const isLogged = !!user; //=const isLogged= user !== null
  return (
    <UserContext.Provider
      value={{ user, users, registrati, login, logout, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
