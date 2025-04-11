import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Appuntamento() {
  const navigate = useNavigate();
  const { appuntamentos, user } = useAuth();
  const [appuntamento, setAppuntamento] = useState({
    nome_appuntamento: "",
    cognome_appuntamento: "",
    email_appuntamento: "",
    tel: "",
    via_citta: "",
    data: "",
  });

  function handleChange(event) {
    setAppuntamento({
      ...appuntamento,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    appuntamentos(appuntamento);
  }
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Prenota Appuntamento</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="full_name">Nome</label>
                        <input
                          type="text"
                          name="nome_appuntamento"
                          placeholder={user.nome}
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Cognome</label>
                        <input
                          type="text"
                          name="cognome_appuntamento"
                          placeholder={user.cognome}
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="address">Email</label>
                        <input
                          type="email"
                          name="email_appuntamento"
                          placeholder={user.email}
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">Telefono</label>
                        <input
                          type="tel"
                          name="tel"
                          placeholder={user.tel}
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="country">Visita a:</label>
                        <div>
                          <select
                            className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                            name="via_citta"
                            id="via_citta"
                            onChange={handleChange}
                          >
                            <option value="Via_Roma_10_Milano">
                              Via Roma 10, Milano
                            </option>
                            <option value="Via_Milano_22_Roma">
                              Via Milano 22, Roma
                            </option>
                            <option value="Via_Torino_5_Torino">
                              Via Torino 5, Torino
                            </option>
                            <option value="Via_Napoli_18_Napoli">
                              Via Napoli 18, Napoli
                            </option>
                            <option value="Via_Genova_3_Genova">
                              Via Genova 3, Genova
                            </option>
                            <option value="Via_Firenze_12_Bologna">
                              Via Firenze 12, Bologna
                            </option>
                            <option value="Via_Montagna_7_Trento">
                              Via Montagna 7, Trento
                            </option>
                            <option value="Via_Venezia_45_Venezia">
                              Via Venezia 45, Venezia
                            </option>
                            <option value="Via_Palermo_20_Palermo">
                              Via Palermo 20, Palermo
                            </option>
                            <option value="Via_Bari_9_Bari">
                              Via Bari 9, Bari
                            </option>
                            <option value="Via_Trieste_14_Padova">
                              Via Trieste 14, Padova
                            </option>
                            <option value="Via_Campagna_1_Siena">
                              Via Campagna 1, Siena
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="state">Seleziona Giorno</label>
                        <div>
                          <input
                            className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                            type="date"
                            name="data"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={() => navigate("/dashboard")}
                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                          >
                            Conferma Appuntamento
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
