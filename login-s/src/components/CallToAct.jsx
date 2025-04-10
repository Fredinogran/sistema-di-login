export default function Call() {
  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Benvenuto nella Agenzia Immobiliare Marè
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Se desideri visitare una delle nostre esclusive residenze,
            registrati per fissare un appuntamento. Saremo lieti di organizzare
            insieme a te ogni dettaglio del viaggio verso la tua nuova dimora di
            prestigio.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="/registrazione" className="flex justify-center">
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Registrati</span>

              <svg
                className="size-5 shadow-sm rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
