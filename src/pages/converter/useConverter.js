import { useContext, useEffect, useRef, useState } from "react";
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

  function handleAmountFrom(e) {
    updateFromAmount(e.target.value);
    setChangeInFrom(true);
  }

  function handleCurrencyFrom(e) {
    updateFromCurrency(e.target.value);
    setChangeInFrom(true);
  }

  function handleAmountTo(e) {
    updateToAmount(e.target.value);
    setChangeInFrom(false);
  }

  function handleCurrencyTo(e) {
    updateToCurrency(e.target.value);
    setChangeInFrom(false);
  }


  return {
    handleAmountFrom,
    handleCurrencyFrom,
    handleAmountTo,
    handleCurrencyTo,
    exchangeRate,
 
  };
};

export default useConverter;
