import React, { lazy, Suspense, useContext } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import useConverter from "./useConverter";

import ConverterContext from "../../contexts/ConverterContext";
import { PageTitle } from "../../components";
import { SYMBOLS } from "../../constants/symbols";
import { useStyle } from "./converter.style";

const InputText = lazy(() => import("../../components/common/InputText"));
const InputSelect = lazy(() => import("../../components/common/InputSelect"));

const Converter = () => {
  const classes = useStyle();
  const {
    handleAmountFrom,
    handleCurrencyFrom,
    handleAmountTo,
    handleCurrencyTo,
    exchangeRate,
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
          <Suspense fallback={<CircularProgress />}>
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
          </Suspense>
          <Box p={3}>
            <Typography>
              1 {fromCurrency} = {exchangeRate} {toCurrency}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Suspense fallback={<CircularProgress />}>
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
          </Suspense>
          <Box p={3}>
            <Typography>
              1 {toCurrency} = {(1 / exchangeRate).toFixed(6)} {fromCurrency}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Converter;
