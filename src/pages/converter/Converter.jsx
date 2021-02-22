import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { PageTitle } from "../../components";
import InputSelect from "../../components/common/InputSelect";
import InputText from "../../components/common/InputText";
import { SYMBOLS } from "../../constants/symbols";
import ConverterContext from "../../contexts/ConverterContext";
import { useStyle } from "./converter.style";
import useConverter from "./useConverter";

const Converter = () => {
  const classes = useStyle();
  const {
    handleAmountFrom,
    handleCurrencyFrom,
    handleAmountTo,
    handleCurrencyTo
   , exchangeRate,
  } = useConverter();
  const {
    values: { fromCurrency, toCurrency, fromAmount, toAmount },
  } = useContext(ConverterContext);
  return (
    <>
      <PageTitle
        title="Currency converter"
        description="Please enter the amount you want to convert in any field."
      />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <InputSelect
              items={SYMBOLS}
              title="Currency"
              onChange={handleCurrencyFrom}
              value={fromCurrency}
            />
            <Box mt={3} />
            <InputText
              title="Enter Amount"
              value={fromAmount}
              onChange={handleAmountFrom}
              symbol={SYMBOLS[fromCurrency].symbol}
            />
          </Paper>
          <Box p={3}>
            <Typography>
              1 {fromCurrency} = {exchangeRate} {toCurrency}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <InputSelect
              items={SYMBOLS}
              title="Currency"
              onChange={handleCurrencyTo}
              value={toCurrency}
            />
            <Box mt={3} />
            <InputText
              title="Enter Amount"
              value={toAmount}
              onChange={handleAmountTo}
              symbol={SYMBOLS[toCurrency].symbol}
            />
          </Paper>
          <Box p={3}>
            <Typography>
              1 {toCurrency} = {(1/exchangeRate).toFixed(6)} {fromCurrency}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Converter;
