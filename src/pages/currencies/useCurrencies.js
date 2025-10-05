import { useContext, useEffect } from "react";
import { getLatestRates } from "../../clients/currencyClient";
import CurrenciesContext from "../../contexts/CurrenciesContext";

const useCurrencies = () => {
  const { setRates, setLoading } = useContext(CurrenciesContext);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        const rates = await getLatestRates();
        setRates(Object.entries(rates));
      } catch (error) {
        console.error('Failed to fetch currency rates:', error);
        setRates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [setLoading, setRates]);
};

export default useCurrencies;
