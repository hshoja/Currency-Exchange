import { createContext } from "react";
import { DEFAULT_CURRENCIES, DEFAULT_AMOUNTS } from '../constants/defaults';

// TODO: Consider using useReducer when the number of state and actions increases significantly

export const initialState = {
  values: {
    loading: false,
    fromCurrency: DEFAULT_CURRENCIES.FROM,
    toCurrency: DEFAULT_CURRENCIES.TO,
    fromAmount: DEFAULT_AMOUNTS.FROM,
    toAmount: DEFAULT_AMOUNTS.TO,
  },
  handlers: {
    setLoading: () => {},
    setFromAmount: () => {},
    setToAmount: () => {},
    setFromCurrency: () => {},
    setToCurrency: () => {},
  },
};

const ConverterContext = createContext(initialState);

export default ConverterContext;
