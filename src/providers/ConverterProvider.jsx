import React, { useState } from "react";
import ConverterContext from "../contexts/ConverterContext";

const ConverterProvider = ({ children }) => {
  const [loading, updateLoading] = useState(false);
  const [fromAmount, updateFromAmount] = useState(1);
  const [toAmount, updateToAmount] = useState('');
  const [fromCurrency, updateFromCurrency] = useState("USD");
  const [toCurrency, updateToCurrency] = useState("CAD");

  const updatedValues = {
    values: { loading, fromAmount, toAmount, fromCurrency, toCurrency },
    handlres: {
      updateLoading,
      updateFromAmount,
      updateToAmount,
      updateFromCurrency,
      updateToCurrency,
    },
  };

  return (
    <ConverterContext.Provider value={updatedValues}>
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterProvider;
