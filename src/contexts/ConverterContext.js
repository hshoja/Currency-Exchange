import { createContext } from "react";

export const intialState = {
  loading: false,
  rates: [],
  updateRates: () => {},
  updateLoading: () => {},
};
const ConverterContext = createContext(intialState);

export default ConverterContext;
