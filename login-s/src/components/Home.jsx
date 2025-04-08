import Card from "./Card";
import { immobili } from "./Immobili";

export default function Home() {
  return (
    <>
      {immobili.map((casa, index) => (
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
      ))}
    </>
  );
}
