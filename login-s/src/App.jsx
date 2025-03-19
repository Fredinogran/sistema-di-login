import { useEffect, useState } from "react";
import "./App.css";
import Form from "./form";
import Login from "./login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const userLogged = localStorage.getItem("isLogged");
    if (userLogged) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  return (
    <>
      <Form></Form>
      {isLogged ? <p>utente loggato</p> : <Login />}
    </>
  );
}

export default App;
