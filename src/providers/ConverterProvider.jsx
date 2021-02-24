import { useState } from "react";
import ConverterContext from "../contexts/ConverterContext";

const ConverterProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CAD");

  const value = {
    values: { loading, fromAmount, toAmount, fromCurrency, toCurrency },
    handlres: {
      setLoading,
      setFromAmount,
      setToAmount,
      setFromCurrency,
      setToCurrency,
    },
  };

  return (
    <ConverterContext.Provider value={value}>
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterProvider;
