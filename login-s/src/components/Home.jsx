import Call from "./CallToAct";
import Card from "./Card";
import Footer from "./Footer";
import { immobili } from "./Immobili";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="contenitore">
        <Navbar />
        <Call />
        <div className="container">
          {immobili.map((casa, index) => (
            <div className="cards">
              <Card
                key={index}
                immagine={casa.immagine}
                prezzo={casa.prezzo}
                via={casa.via}
                tipologie_di_casa={casa.tipologie_di_casa}
                camere_da_letto={casa.camere_da_letto}
                bagni={casa.bagni}
                parcheggio={casa.parcheggio}
              ></Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
