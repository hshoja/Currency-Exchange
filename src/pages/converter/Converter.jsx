import { Grid } from "@material-ui/core";
import { PageTitle } from "../../components";
import useConverterContext from "../../hooks/useConverterContext";
import ConverterPaper from "./components/ConverterPaper";
import useConverter from "./useConverter";

export const Converter = () => {
  const {
    handleAmountFrom,
    handleCurrencyFrom,
    handleAmountTo,
    handleCurrencyTo,
    exchangeRate,
  } = useConverter();

  const { fromAmount, toAmount, fromCurrency, toCurrency } = useConverterContext().values;

  return (
    <>
      <PageTitle
        title="Currency converter"
        description="Please enter the amount you want to convert in any field."
      />
      <Grid container spacing={6}>
        <ConverterPaper
          handleAmount={handleAmountFrom}
          handleCurrency={handleCurrencyFrom}
          amount={fromAmount}
          currency={fromCurrency}
          toCurrency={toCurrency}
          exchangeRate={exchangeRate}
        />
        <ConverterPaper
          handleAmount={handleAmountTo}
          handleCurrency={handleCurrencyTo}
          amount={toAmount}
          currency={toCurrency}
          toCurrency={fromCurrency}
          exchangeRate={1 / exchangeRate}
        />
      </Grid>
    </>
  );
};

