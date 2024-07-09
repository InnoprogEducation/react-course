import {useEffect, useState} from "react";

export const CurrencyCard = ({onRemove, currency, onPriceUpdated, onSelect, isSelected}) => {


    useEffect(() => {
        const currencyReceivePriceInterval = setInterval(() => {
            onPriceUpdated(currency, Math.floor(Math.random() * 10) + 1)
        }, 3000)
        return () => {
            clearInterval(currencyReceivePriceInterval)
        }
    }, []);

    return (
        <div
            onClick={onSelect}
            className={`bg-gray-400 rounded-lg shadow-lg p-8 text-center cursor-pointer ${isSelected && 'outline-2 outline outline-gray-800'}`}
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