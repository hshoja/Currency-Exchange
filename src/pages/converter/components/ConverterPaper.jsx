import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import { Suspense } from "react";
import InputSelect from "../../../components/common/InputSelect";
import InputText from "../../../components/common/InputText";
import { SYMBOLS } from "../../../constants";
import { useStyle } from "../converter.style";

const ConverterPaper = ({
  handleAmount,
  handleCurrency,
  amount,
  currency,
  toCurrency,
  exchangeRate,
}) => {
  const classes = useStyle();

  return (
    <Grid item xs={12} md={6}>
      <Suspense fallback={<CircularProgress />}>
        <Paper elevation={0} className={classes.paper}>
          <InputSelect
            items={SYMBOLS}
            title="Currency"
            onChange={handleCurrency}
            value={currency}
          />
          <Box mt={3} />
          <InputText
            title="Enter Amount"
            value={amount}
            onChange={handleAmount}
            symbol={SYMBOLS[currency].symbol}
          />
        </Paper>
      </Suspense>
      <Box p={3}>
        <Typography>
          1 {currency} = {exchangeRate} {toCurrency}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ConverterPaper;
