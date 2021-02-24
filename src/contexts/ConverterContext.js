import { createContext } from "react";

export const intialState = {
  values: {
    loading: false,
    fromCurrency: "USD",
    toCurrency: "CAD",
    fromAmount: "1",
    toAmount: "",
  },
  handlres: {
    updateLoading: () => {},
    updateFromAmount: () => {},
    updateToAmount: () => {},
    updateFromCurrency: () => {},
    updateToCurrency: () => {},
  },
};
const ConverterContext = createContext(intialState);

export default ConverterContext;
