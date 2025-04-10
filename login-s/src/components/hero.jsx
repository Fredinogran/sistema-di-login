import { Link } from "react-router-dom";

export default function HeroSection(){
    return(
        <section
  className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Nexora</h2>

      <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
      L'eccellenza in ogni dettaglio.
      Scopri una selezione esclusiva pensata per distinguerti.
      Solo per oggi: -10% su tutto il catalogo!
      Rinnova il tuo stile, spendi meno.
      </p>

      <div className="mt-4 sm:mt-8">
        
           <Link
          className="rounded-md bg-sky-300 px-10 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500 w-[150px]"

           to="/registrazione" >
           Registrati
         </Link>
       
      </div>
    </div>
  </div>
</section>
    )
}