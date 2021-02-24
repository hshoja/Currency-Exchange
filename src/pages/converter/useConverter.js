import { useCallback, useContext, useEffect, useState } from "react";
import { urlConvert } from "../../constants/urls";
import ConverterContext from "../../contexts/ConverterContext";

const useConverter = () => {
  const {
    values: { fromCurrency, toCurrency, fromAmount, toAmount },
    handlres: {
      setLoading,
      setFromAmount,
      setToAmount,
      setFromCurrency,
      setToCurrency,
    },
  } = useContext(ConverterContext);

  const [changeInFrom, setChangeInFrom] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(urlConvert(fromCurrency, toCurrency))
      .then((res) => res.json())
      .then((data) => {
        setExchangeRate(data.result);
      })
      .finally(() => {
        setLoading(false);
      });
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
