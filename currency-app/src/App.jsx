import {useRef, useState} from 'react';
import {CurrencyCard} from "./components/CurrencyCard.jsx";
import {CurrencySearch} from "./components/CurrencySearch.jsx";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState();
  const currencyLegend= useRef([])

  const onStartTrackCurrency = (newCurrency) => {
    const newCurrencyToTrack = {
      name: newCurrency,
      price: null,
    };
    setCurrencyList((prevList) => [...prevList, newCurrencyToTrack]);
  };

  const removeCurrency = (currencyToRemove) => {
     setCurrencyList(prevList =>
         prevList.filter(currency => currency !== currencyToRemove));
     if (selectedCurrency?.name === currencyToRemove) {
         currencyLegend.current = []
     }
  }

  const onCurrencyPriceUpdated = (currencyToUpdate, newPrice) => {
    // Здесь нам нужно обновить данные для графика (или не здесь?)
    setCurrencyList((prevList) => prevList.map((currency) => currency.name === currencyToUpdate.name
        ? {...currency, price: newPrice}
        : currency)
    )
    if (selectedCurrency?.name === currencyToUpdate?.name) {
        currencyLegend.current.push(newPrice)
    }
  }

  const selectCurrency = (currency) => {
      currencyLegend.current = [];
      setSelectedCurrency(currency)
  }

  return (
      <section className="container mx-auto flex flex-col p-4">
       <CurrencySearch onNewCurrency={onStartTrackCurrency}/>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {currencyList.map((currency, idx) => (
            <CurrencyCard key={idx}
                          currency={currency}
                          onRemove={removeCurrency}
                          isSelected={selectedCurrency?.name === currency.name}
                          onSelect={selectCurrency}
                          onPriceUpdated={(currency, price) => {
                              onCurrencyPriceUpdated(currency, price)}
                          }
            />
          ))}
        </dl>
        <section className="mt-8">
          {selectedCurrency?.name}{': '}
          {currencyLegend.current.join(',')}
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
