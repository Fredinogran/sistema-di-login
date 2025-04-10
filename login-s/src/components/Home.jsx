import useSWR from "swr";
import NavBar from "./navBar";
import { useState, useEffect } from "react";
import HeroSection from './hero'

export default function Home(){
   const [messaggio, setMessaggio] = useState(null)
    const [prodotti, setProdotti] = useState(() => {
    const prodottiLocal = localStorage.getItem("prodotti");
    return prodottiLocal ? JSON.parse(prodottiLocal) : [];
  });

  useEffect(() => {
    localStorage.setItem("prodotti", JSON.stringify(prodotti));
  }, [prodotti]);

  const { error, data } = useSWR("https://fakestoreapi.com/products");
  if (!data && !error) return <p>Loading...</p>;
  if (error) return <p>Errore nel caricamento dei dati</p>;

  function handleAggiungiProdotto(prodotto){
    setProdotti((prev)=> [...prev, prodotto])
    setMessaggio(`Aggiunto al carrello: ${prodotto.title}`)
    setTimeout(() => {
      setMessaggio(null)
    }, 1000);
  }
  return (
    <>
      <NavBar />
      <HeroSection></HeroSection>
      <h2 className="text-2xl font-bold p-4">Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 p-4">
        {data.map((prodotto) => (
          <a
            key={prodotto.id}
            href="#"
            className="group relative block bg-black rounded-xl overflow-hidden shadow-lg"
          >
            <img
              alt={prodotto.title}
              src={prodotto.image}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                {prodotto.category}
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl mb-2">
                {prodotto.title}
              </p>

              <p className="text-white font-semibold mb-2">${prodotto.price}</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white mb-4">
                    {prodotto.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAggiungiProdotto(prodotto)
                    }}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition"
                  >
                    Aggiungi al carrello
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
        {messaggio && <div className="popUp">{messaggio}</div>}
    </>
  );
}
