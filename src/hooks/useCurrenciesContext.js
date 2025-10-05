import { useContext } from "react";
import CurrenciesContext from "../contexts/CurrenciesContext";

const useCurrenciesContext = () => {
  const context = useContext(CurrenciesContext);
  
  if (!context) {
    throw new Error("useCurrenciesContext must be used within a CurrenciesProvider");
  }
  
  return context;
};

export default useCurrenciesContext;
