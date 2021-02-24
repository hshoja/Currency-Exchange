import { useContext, useEffect } from "react";
import { urlCurrencies } from "../../constants/urls";
import CurrenciesContext from "../../contexts/CurrenciesContext";
import { fetchData } from "../../utils/api";

const useCurrencies = () => {
  const { setRates, setLoading } = useContext(CurrenciesContext);

  useEffect(() => {
    setLoading(true);
    fetchData(urlCurrencies())
      .then((res) => {
        res.rates && setRates(Object.entries(res.rates));
      })
      .finally(() => setLoading(false));
  }, [setLoading, setRates]);
};

export default useCurrencies;
