import { useCallback, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { PageTitle } from "../../components";
import { COLORS, SYMBOLS } from "../../constants";
import CurrenciesContext from "../../contexts/CurrenciesContext";
import useCurrencies from "./useCurrencies";

const useStyles = makeStyles({
  cell: {
    borderWidth: "0",
  },
  header: {
    backgroundColor: COLORS.secondary,
  },
});

const Currencies = () => {
  const classes = useStyles();
  useCurrencies();
  const { rates } = useContext(CurrenciesContext);

  const renderRates = useCallback(
    ([symbol, rate]) => (
      <TableRow key={symbol} data-testid="row">
        <TableCell align="left" className={classes.cell}>
          {symbol}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {SYMBOLS[symbol]?.description}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {rate}
        </TableCell>
      </TableRow>
    ),
    [classes.cell]
  );

  return (
    <>
      <PageTitle title="US Dollar (USD) Exchange Rates" />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.header}>
              <TableCell align="left">Currency</TableCell>
              <TableCell align="left">Currency Name</TableCell>
              <TableCell align="left">Exchange Rate = 1 USD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rates.map(renderRates)}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Currencies;
