import { useContext, useEffect } from "react";
import { URL_CURRENCIES } from "../../constants";
import CurrenciesContext from "../../contexts/CurrenciesContext";

const useCurrencies = () => {
  const { updateRates, updateLoading } = useContext(CurrenciesContext);

  useEffect(() => {
    updateLoading(true);
    fetch(URL_CURRENCIES)
      .then((res) => res.json())
      .then((res) => updateRates(Object.entries(res.rates)))
      .finally(() => updateLoading(false));
  }, [updateLoading, updateRates]);
};

export default useCurrencies;
