<div>
  <h4>Prenota Appuntamento</h4>

  <label>Nome</label>
  <input
    type="text"
    name="nome_appuntamento"
    placeholder="Inserisci il tuo nome"
    onChange={handleChange}
  />

  <label>Cognome</label>
  <input
    type="text"
    name="cognome_appuntamento"
    placeholder="Inserisci il tuo cognome"
    onChange={handleChange}
  />

  <label>Email</label>
  <input
    type="email"
    name="email_appuntamento"
    placeholder="Inserisci la tua email"
    onChange={handleChange}
  />
  <label>Telefono</label>
  <input
    type="tel"
    name="tel"
    placeholder="Inserire numero telefonico "
    onChange={handleChange}
  />
  <label>Via,Città</label>
  <select name="via_citta" id="via_citta" onChange={handleChange}>
    <option value="Via_Roma_10_Milano">Via Roma 10, Milano</option>
    <option value="Via_Milano_22_Roma">Via Milano 22, Roma</option>
    <option value="Via_Torino_5_Torino">Via Torino 5, Torino</option>
    <option value="Via_Napoli_18_Napoli">Via Napoli 18, Napoli</option>
    <option value="Via_Genova_3_Genova">Via Genova 3, Genova</option>
    <option value="Via_Firenze_12_Bologna">Via Firenze 12, Bologna</option>
    <option value="Via_Montagna_7_Trento">Via Montagna 7, Trento</option>
    <option value="Via_Venezia_45_Venezia">Via Venezia 45, Venezia</option>
    <option value="Via_Palermo_20_Palermo">Via Palermo 20, Palermo</option>
    <option value="Via_Bari_9_Bari">Via Bari 9, Bari</option>
    <option value="Via_Trieste_14_Padova">Via Trieste 14, Padova</option>
    <option value="Via_Campagna_1_Siena">Via Campagna 1, Siena</option>
  </select>
  {/* <input
  type="text"
  name="via_citta"
  placeholder="Inserire indirizzo e città dell'alloggio "
  onChange={handleChange}
/> */}

  <label>Seleziona Giorno</label>
  <input type="date" name="data" onChange={handleChange} />

  <button onClick={() => navigate("/dashboard")}>Prenota Appuntamento</button>
</div>;
