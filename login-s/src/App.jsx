import { useEffect, useState } from "react";
import "./App.css";
import Form from "./form";
import Login from "./login";
import Dashboard from "./Dashboard";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Form></Form>
      {isLogged ? (
        <Dashboard setIsLogged={setIsLogged} />
      ) : (
        <Login setIsLogged={setIsLogged} />
      )}
    </UserProvider>
  );
}

export default App;
