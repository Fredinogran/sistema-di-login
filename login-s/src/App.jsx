import "./App.css";
import Dashboard from "./components/Dashboard";
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
          <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
