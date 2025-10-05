import { createContext } from "react";

export const initialState = {
  loading: false,
  rates: [],
  setRates: () => {},
  setLoading: () => {},
};

const CurrenciesContext = createContext(initialState);

export default CurrenciesContext;
