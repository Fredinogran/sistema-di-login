import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import userImage from "../assets/utente.svg";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <div className="navbar">
        <div className="spizzico">
          <h2> SpizzicoExpress </h2>
        </div>
        <div className="destra">
          <div className="ristoranti">
            <p>Ristoranti</p>
          </div>
          <div className="homeBtn">
            {user ? (
              <Link to="/dashboard">
                <img src={userImage} className="user"></img>
              </Link>
            ) : (
              <Link to="/login">Accedi</Link>
            )}
          </div>
        </div>
      </div>
      <div className="center">
        <h3>🍕 Benvenuto su Pizzico Express</h3>
        <p>
          Il gusto che arriva da te, in un pizzico di tempo. Hai voglia di
          qualcosa di buono ma zero voglia di cucinare? Con Pizzico Express
          ordini dai migliori ristoranti della tua zona e ricevi il tuo piatto
          preferito direttamente a casa, in ufficio o ovunque ti trovi. Craving
          pizza? Desideri sushi, burger, kebab o un bel piatto di pasta? Pizzico
          Express ti porta tutto questo caldo, fresco e veloce. E con offerte e
          sconti esclusivi ogni settimana, risparmi senza rinunciare al gusto.
        </p>
        <h3>Offerte del momento</h3>
        <p>- Consegna gratuita sul tuo primo ordine</p>
        <p> - Sconto del 15% su tutti gli ordini serali dopo le 20:00 </p>
        <p> - Promo 2x1 il giovedì sui piatti italiani</p>
      </div>
    </>
  );
}
