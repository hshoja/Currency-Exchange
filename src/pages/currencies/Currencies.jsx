import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { PageTitle } from "../../components";
import { COLORS, SYMBOLS } from "../../constants";
import { GetArray } from "../../utils/array";
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
    const {rates}=useContext(CurrenciesContext)

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
          <TableBody>
            {GetArray(rates).map(([symbol, rate]) => (
              <TableRow key={symbol} data-testid='row'>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Currencies;
