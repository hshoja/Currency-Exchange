import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { PageTitle } from "../../components";
import ConverterContext from "../../contexts/ConverterContext";
import ConverterPaper from "./components/ConverterPaper";
import useConverter from "./useConverter";

const Converter = () => {
  
  const {
    handleAmountFrom,
    handleCurrencyFrom,
    handleAmountTo,
    handleCurrencyTo,
    exchangeRate,
  } = useConverter();

  const { fromAmount, toAmount } = useContext(ConverterContext).values;

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
          exchangeRate={exchangeRate}
        />
        <ConverterPaper
          handleAmount={handleAmountTo}
          handleCurrency={handleCurrencyTo}
          amount={toAmount}
          exchangeRate={1 / exchangeRate}
        />
      </Grid>
    </>
  );
};

export default Converter;
