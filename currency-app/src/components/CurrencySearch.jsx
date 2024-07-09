import {useState} from "react";

export const CurrencySearch = ({onNewCurrency}) => {
    let [searchCurrency, setSearchCurrency] = useState('');
    const handleNewCurrencyClick = () => {
        setSearchCurrency('');
        onNewCurrency(searchCurrency)
    }
    return (
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
                    onClick={handleNewCurrencyClick}
                    className="bg-gray-700 h-9 hover:bg-gray-900 text-white transition-colors text-sm py-0 px-4 font-bold
                    rounded"
                >
                    Отслеживать
                </button>
            </div>
        </div>
    )
}