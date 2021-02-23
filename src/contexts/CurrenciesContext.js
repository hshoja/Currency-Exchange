import { createContext } from "react";

export const intialState = {
  loading: false,

  rates: [],
  updateRates: () => {},
  updateLoading: () => {},
};
const CurrenciesContext = createContext(intialState);

export default CurrenciesContext;
