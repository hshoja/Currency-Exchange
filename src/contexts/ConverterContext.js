import { createContext } from "react";

// TODO: another way that I used when then number of state and actions are much is useReducer instead of useSate

export const intialState = {
  values: {
    loading: false,
    fromCurrency: "USD",
    toCurrency: "CAD",
    fromAmount: "1",
    toAmount: "",
  },
  handlres: {
    setLoading: () => {},
    setFromAmount: () => {},
    setToAmount: () => {},
    setFromCurrency: () => {},
    setToCurrency: () => {},
  },
};
const ConverterContext = createContext(intialState);

export default ConverterContext;
