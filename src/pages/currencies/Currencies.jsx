import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { PageTitle } from "../../components";

const rows = [
  createData("EUR", "Euro", 0.836),
  createData("JPY", "Japanese yen", 100.836),
  createData("EUR", "Euro", 0.836),
  createData("EUR", "Euro", 0.836),
  createData("EUR", "Euro", 0.836),
];

function createData(currency, name, rate) {
  return { currency, name, rate };
}
const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
  cell: {
    borderWidth: "0",
  },
  header: {
    backgroundColor: "#F0F1F4",
  },
});

const Currencies = () => {
  const classes = useStyles();
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
            {rows.map((row) => (
              <TableRow key={row.name}>
                {Object.keys(row).map((field) => (
                  <TableCell align="left" className={classes.cell} key={field}>
                    {row[field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Currencies;
