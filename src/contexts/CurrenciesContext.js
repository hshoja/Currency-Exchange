import { createContext } from "react";

export const intialState = {
  loading: false,

  rates: [],
  setRates: () => {},
  setLoading: () => {},
};
const CurrenciesContext = createContext(intialState);

export default CurrenciesContext;
