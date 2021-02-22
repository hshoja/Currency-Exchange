import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { PageTitle } from "../../components";
import useCurrencies from "./useCurrencies";
import { COLORS, SYMBOLS } from "../../constants";
import { LinearProgress } from "@material-ui/core";
import ConverterContext from "../../contexts/ConverterContext";
import { GetArray } from "../../utils/array";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
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
    const {rates}=useContext(ConverterContext)

  return (
    <>
      <PageTitle title="US Dollar (USD) Exchange Rats" />
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
              <TableRow key={symbol}>
                <TableCell align="left" className={classes.cell}>
                  {symbol}
                </TableCell>
                <TableCell align="left" className={classes.cell}>
                  {SYMBOLS[symbol].description}
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
