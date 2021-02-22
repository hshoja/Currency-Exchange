import { useContext, useEffect, useRef, useState } from "react";
import { URL_CURRENCIES } from "../../constants";
import CurrenciesContext from "../../contexts/CurrenciesContext";

const useCurrencies = () => {
  const { updateRates, updateLoading } = useContext(CurrenciesContext);
  const handlres = useRef({ updateRates, updateLoading });

  useEffect(() => {
    handlres.current.updateLoading(true);
    fetch(URL_CURRENCIES)
      .then((res) => res.json())
      .then((res) => handlres.current.updateRates(Object.entries(res.rates)))
      .finally(() => handlres.current.updateLoading(false));
  }, []);
};

export default useCurrencies;
