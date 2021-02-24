import { useState } from "react";
import CurrenciesContext from "../contexts/CurrenciesContext";

const CurrenciesProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState([]);
  const updatedValues = { loading, rates, setLoading, setRates };

  return (
    <CurrenciesContext.Provider value={updatedValues}>
      {children}
    </CurrenciesContext.Provider>
  );
};

export default CurrenciesProvider;
