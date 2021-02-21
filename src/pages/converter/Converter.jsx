import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { PageTitle } from "../../components";
import InputSelect from "../../components/common/InputSelect";
import InputText from "../../components/common/InputText";
import { useStyle } from "./converter.style";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Converter = () => {
  const classes = useStyle();

  return (
    <>
      <PageTitle
        title="Currency converter"
        description="Please enter the amount you want to convert in any field."
      />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <InputSelect items={currencies} title="Currency" />
            <Box mt={3} />
            <InputText title="Enter Amount" />
          </Paper>
          <Box p={3}>
            <Typography>1 USD = 0.123213 EUR</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <InputSelect items={currencies} title="Currency" />
            <Box mt={3} />
            <InputText title="Enter Amount" />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Converter;
