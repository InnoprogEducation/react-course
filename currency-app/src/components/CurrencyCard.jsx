export const CurrencyCard = ({onRemove, currency}) => {
    return (
        <div
            className="bg-gray-400 rounded-lg shadow-lg p-8 text-center cursor-pointer"
        >
            <h1 className="text-lg font-bold text-white mb-4">{currency.name} - USD </h1>
            <p className="text-md text-white mb-8">{currency.price} $</p>
            <button
                onClick={() => onRemove(currency)}
                className="bg-white hover:bg-gray-100 text-red-500 text-xs font-semibold py-2 px-4 rounded">
                Remove
            </button>
        </div>)
}