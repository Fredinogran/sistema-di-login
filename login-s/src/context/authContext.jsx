import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : null;
  });
  const [users, setUsers] = useState(() => {
    const localUsers = localStorage.getItem("users");
    return localUsers ? JSON.parse(localUsers) : [];
  });
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  function login({ email, password }) {
    const userExist = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!userExist) {
      return { esito: false, messaggio: "credenziali errate" };
    }
    setUser(userExist);
    localStorage.setItem("user", JSON.stringify(userExist));
  }
  function registrazione(userData) {
    const userExist = users.find((user) => user.email === userData.email);
    if (userExist) {
      return { esito: false, messaggio: "Email già registrata" };
    }
    setUsers((prev) => [...prev, userData]);
  }
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ user, users, login, registrazione, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
