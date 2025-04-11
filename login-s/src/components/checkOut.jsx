import { useState, useEffect } from "react";

export default function CheckOut() {
  const [pagamento, setPagamento] = useState({
    numeroCarta: "",
    nomeTitolare: "",
    indirizzoFatturazione: "",
    cvc:"",
    datascadenza:""
  });

  const [messaggio, setMessaggio] = useState();

  useEffect(() => {
    localStorage.setItem("pagamento", JSON.stringify(pagamento));
  }, [pagamento]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPagamento((prevPagamento) => ({
      ...prevPagamento,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessaggio("Ordine effettuato con successo");
    
  }

  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:px-10 lg:grid-cols-1 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl text-black font-medium">Order Summary</p>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl text-black font-medium">Payment Details</p>
            <p className="text-gray-900">
              Complete your order by providing your payment details.
            </p>

            <label htmlFor="card-holder" className="mt-4 mb-2 block text-black text-sm font-medium">Card Holder</label>
            <input
              onChange={handleChange}
              value={pagamento.nomeTitolare}
              name="nomeTitolare"
              type="text"
              id="card-holder"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none"
              placeholder="Your full name here"
            />

            <label htmlFor="card-no" className="mt-4 mb-2 block text-sm text-black font-medium">Card Details</label>
            <div className="flex">
              <input
                onChange={handleChange}
                name="numeroCarta"
                value={pagamento.numeroCarta}
                type="text"
                id="card-no"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <input  onChange={handleChange} type="text" name="dataScadenza" className="ml-2 w-1/4 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none" placeholder="MM/YY" />
              <input  onChange={handleChange} type="text" name="cvc" className="ml-2 w-1/4 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none" placeholder="CVC" />
            </div>

            <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm text-black font-medium">Billing Address</label>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                id="billing-address"
                name="indirizzoFatturazione"
                onChange={handleChange}
                value={pagamento.indirizzoFatturazione}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none"
                placeholder="Street Address"
              />
              
            </div>

            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Acquista
            </button>
          </div>
        </div>
      </form>
      {messaggio && <div className="popUp">{messaggio}</div>}
    </>
  );
}

