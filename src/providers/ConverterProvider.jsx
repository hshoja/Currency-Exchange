import { useState } from "react";
import PropTypes from "prop-types";
import ConverterContext from "../contexts/ConverterContext";
import { DEFAULT_CURRENCIES, DEFAULT_AMOUNTS } from "../constants/defaults";

const ConverterProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [fromAmount, setFromAmount] = useState(DEFAULT_AMOUNTS.FROM);
  const [toAmount, setToAmount] = useState(DEFAULT_AMOUNTS.TO);
  const [fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCIES.FROM);
  const [toCurrency, setToCurrency] = useState(DEFAULT_CURRENCIES.TO);

  const value = {
    values: { loading, fromAmount, toAmount, fromCurrency, toCurrency },
    handlers: {
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

ConverterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConverterProvider;
