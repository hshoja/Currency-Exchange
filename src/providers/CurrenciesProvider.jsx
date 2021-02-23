import React, { useState } from "react";
import CurrenciesContext from "../contexts/CurrenciesContext";

const CurrenciesProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState(false);
  const updateLoading = (value) => setLoading(value);
  const updateRates = (values) => setRates(values);

  const updatedValues = { loading, rates, updateLoading, updateRates };

  return (
    <CurrenciesContext.Provider value={updatedValues}>
      {children}
    </CurrenciesContext.Provider>
  );
};

export default CurrenciesProvider;
