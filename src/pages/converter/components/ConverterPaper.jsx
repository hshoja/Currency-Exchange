import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { lazy, Suspense, useContext } from "react";
import { ConverterContext } from "../../../contexts";
import { SYMBOLS } from "../../../constants";
import { useStyle } from "../converter.style";

const InputText = lazy(() => import("../../../components/common/InputText"));
const InputSelect = lazy(() => import("../../../components/common/InputSelect"));

const ConverterPaper = ({
  handleAmount,
  handleCurrency,
  amount,
  exchangeRate,
}) => {
  const classes = useStyle();
  const { fromCurrency, toCurrency } = useContext(ConverterContext).values;

  return (
    <Grid item xs={12} md={6}>
      <Suspense fallback={<CircularProgress />}>
        <Paper elevation={0} className={classes.paper}>
          <InputSelect
            items={SYMBOLS}
            title="Currency"
            onChange={handleCurrency}
            value={toCurrency}
          />
          <Box mt={3} />
          <InputText
            title="Enter Amount"
            value={amount}
            onChange={handleAmount}
            symbol={SYMBOLS[toCurrency].symbol}
          />
        </Paper>
      </Suspense>
      <Box p={3}>
        <Typography>
          1 {toCurrency} = {exchangeRate.toFixed(6)} {fromCurrency}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ConverterPaper;
