import { useState } from 'react';

function App() {
  let [searchCurrency, setSearchCurrency] = useState('');

  return (
    <section className="container mx-auto flex flex-col p-4">
      <div className="mt-4 mb-1">
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          Поиск криптовалюты
        </label>
        <div className="flex mt-2 gap-2">
          <div className="relative rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              value={searchCurrency}
              onChange={(e) => {
                setSearchCurrency(e.target.value);
              }}
              className="focus:outline-1 outline-cyan-500 block rounded-md border-0 py-1.5 pl-7 pr-20
                        text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1
                        focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="Пример: BTC"
            />
          </div>
          <button
            className="bg-gray-700 h-9 hover:bg-gray-900 text-white transition-colors text-sm py-0 px-4 font-bold
                    rounded"
          >
            Отслеживать
          </button>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-gray-400 rounded-lg shadow-lg p-8 text-center cursor-pointer">
          <h1 className="text-lg font-bold text-white mb-4">Криптовалюта - USD </h1>
          <p className="text-md text-white mb-8">Price</p>
          <button className="bg-white hover:bg-gray-100 text-red-500 text-xs font-semibold py-2 px-4 rounded">
            Remove
          </button>
        </div>
        <div className="bg-gray-400 rounded-lg shadow-lg p-8 text-center cursor-pointer">
          <h1 className="text-lg font-bold text-white mb-4">Криптовалюта - USD </h1>
          <p className="text-md text-white mb-8">Price</p>
          <button className="bg-white hover:bg-gray-100 text-red-500 text-xs font-semibold py-2 px-4 rounded">
            Remove
          </button>
        </div>
        <div className="bg-gray-400 rounded-lg shadow-lg p-8 text-center cursor-pointer outline outline-4 outline-cyan-500">
          <h1 className="text-lg font-bold text-white mb-4">Криптовалюта - USD </h1>
          <p className="text-md text-white mb-8">Price</p>
          <button className="bg-white hover:bg-gray-100 text-red-500 text-xs font-semibold py-2 px-4 rounded">
            Remove
          </button>
        </div>
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
