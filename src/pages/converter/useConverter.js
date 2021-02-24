import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { URL_CONVERT } from "../../constants/urls";
import ConverterContext from "../../contexts/ConverterContext";

const useConverter = () => {

  const {
    values: { fromCurrency, toCurrency, fromAmount, toAmount },
    handlres: {
      updateLoading,
      updateFromAmount,
      updateToAmount,
      updateFromCurrency,
      updateToCurrency,
    },
  } = useContext(ConverterContext);

  const [changeInFrom, setChangeInFrom] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(1);

  const handlers = useRef({
    updateLoading,
    updateFromAmount,
    updateToAmount,
    updateFromCurrency,
    updateToCurrency,
  });

  useEffect(() => {
    handlers.current.updateLoading(true);
    fetch(URL_CONVERT(fromCurrency, toCurrency))
      .then((res) => res.json())
      .then((data) => {
        setExchangeRate(data.result);
      })
      .finally(() => {
        handlers.current.updateLoading(false);
      });
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    changeInFrom
      ? handlers.current.updateToAmount(fromAmount * exchangeRate)
      : handlers.current.updateFromAmount(toAmount * (1 / exchangeRate));
  }, [changeInFrom, exchangeRate, fromAmount, toAmount]);


  const handleAmountFrom = useCallback((e) => {
    handlers.current.updateFromAmount(e.target.value);
    setChangeInFrom(true);
  }, []);

  const handleCurrencyFrom = useCallback((e) => {
    handlers.current.updateFromCurrency(e.target.value);
    setChangeInFrom(true);
  }, []);

  const handleAmountTo = useCallback((e) => {
    handlers.current.updateToAmount(e.target.value);
    setChangeInFrom(false);
  }, []);

  const handleCurrencyTo = useCallback((e) => {
    handlers.current.updateToCurrency(e.target.value);
    setChangeInFrom(false);
  }, []);

  return {
    handleAmountFrom,
    handleCurrencyFrom,
    handleAmountTo,
    handleCurrencyTo,
    exchangeRate,
 
  };
};

export default useConverter;
