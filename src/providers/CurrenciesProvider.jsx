import { useState } from "react";
import PropTypes from "prop-types";
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

CurrenciesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CurrenciesProvider;
