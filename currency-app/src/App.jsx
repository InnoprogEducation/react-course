import { useState } from 'react';
import {CurrencyCard} from "./components/CurrencyCard.jsx";
import {CurrencySearch} from "./components/CurrencySearch.jsx";

function App() {
  let [currencyList, setCurrencyList] = useState([]);

  const onStartTrackCurrency = (newCurrency) => {
    let newCurrencyToTrack = {
      name: newCurrency,
      price: null,
    };
    setCurrencyList((prevList) => [...prevList, newCurrencyToTrack]);
  };

  const removeCurrency = (currencyToRemove) => {
     setCurrencyList(prevList =>
         prevList.filter(currency => currency !== currencyToRemove));
  }

  const onCurrencyPriceUpdated = (currencyToUpdate, newPrice) => {
    setCurrencyList((prevList) => prevList.map((currency) => currency.name === currencyToUpdate.name
        ? {...currency, price: newPrice}
        : currency)
    )
  }

  return (
      <section className="container mx-auto flex flex-col p-4">
       <CurrencySearch onNewCurrency={onStartTrackCurrency}/>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {currencyList.map((currency, idx) => (
            <CurrencyCard key={idx}
                          currency={currency}
                          onRemove={removeCurrency}
                          onPriceUpdated={(currency, price) => {onCurrencyPriceUpdated(currency,price)}}/>
          ))}
        </dl>
        <section className="mt-8">
          <div className="h-6">
            <h1 className="text-gray-500 font-medium">График цен: </h1>
          </div>
          <div className="w-full h-96 gap-0.5 mt-2 bg-zinc-50 border-4 flex items-end border-l-gray-300 border-b-gray-300 border-t-0 border-r-0">
            <div className="bg-cyan-400 w-20" />
          </div>
        </section>
      </section>
  );
}

export default App;
