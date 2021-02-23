import { createContext } from "react";

export const intialState = {
  loading: false,

  fromCurrency: "USD",
  toCurrency: "CAD",
  fromAmount: 1,
  toAmount: undefined,
  updateLoading: () => {},
  updateFromAmount: () => {},
  updateToAmount: () => {},
  updateFromCurrency: () => {},
  updateToCurrency: () => {},
};
const ConverterContext = createContext(intialState);

export default ConverterContext;
