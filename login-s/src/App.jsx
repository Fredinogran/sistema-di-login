import "./App.css";
import Appuntamento from "./components/Appuntamento";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/login";
import Privacy from "./components/PrivateContent";
import Registrazione from "./components/Registrazione";
import AuthProvider from "./context/authContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/dashboard"
            element={
              <Privacy>
                <Dashboard />
              </Privacy>
            }
          ></Route>
          <Route path="/registrazione" element={<Registrazione />}></Route>
          <Route
            path="/appuntamento"
            element={
              <Privacy>
                <Appuntamento></Appuntamento>
              </Privacy>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/home"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
