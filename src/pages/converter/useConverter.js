import { useCallback, useEffect, useState } from "react";
import { EXCHANGE_RATE_FALLBACK } from "../../constants/defaults";
import useConverterContext from "../../hooks/useConverterContext";
import { getExchangeRate } from "../../clients/currencyClient";

const useConverter = () => {
  const {
    values: { fromCurrency, toCurrency, fromAmount, toAmount },
    handlers: {
      setLoading,
      setFromAmount,
      setToAmount,
      setFromCurrency,
      setToCurrency,
    },
  } = useConverterContext();

  const [changeInFrom, setChangeInFrom] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(EXCHANGE_RATE_FALLBACK);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        const rate = await getExchangeRate(fromCurrency, toCurrency);
        setExchangeRate(rate || EXCHANGE_RATE_FALLBACK);
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        setExchangeRate(EXCHANGE_RATE_FALLBACK); // Fallback to 1:1 rate
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency, setLoading]);

  useEffect(() => {
    if (changeInFrom) setToAmount(fromAmount * exchangeRate);
    else setFromAmount(toAmount * (1 / exchangeRate));
  }, [
    changeInFrom,
    exchangeRate,
    fromAmount,
    toAmount,
    setFromAmount,
    setToAmount,
  ]);

  const handleAmountFrom = useCallback(
    (e) => {
      setFromAmount(e.target.value);
      setChangeInFrom(true);
    },
    [setFromAmount]
  );

  const handleCurrencyFrom = useCallback(
    (e) => {
      setFromCurrency(e.target.value);
      setChangeInFrom(true);
    },
    [setFromCurrency]
  );

  const handleAmountTo = useCallback(
    (e) => {
      setToAmount(e.target.value);
      setChangeInFrom(false);
    },
    [setToAmount]
  );

  const handleCurrencyTo = useCallback(
    (e) => {
      setToCurrency(e.target.value);
      setChangeInFrom(false);
    },
    [setToCurrency]
  );

  return {
    handleAmountFrom,
    handleCurrencyFrom,
    handleAmountTo,
    handleCurrencyTo,
    exchangeRate,
  };
};

export default useConverter;
