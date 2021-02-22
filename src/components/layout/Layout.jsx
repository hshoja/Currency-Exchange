import { Grid, LinearProgress } from "@material-ui/core";
import React, { useContext } from "react";
import { Navbar } from "..";
import ConverterContext from "../../contexts/ConverterContext";
import CurrenciesContext from "../../contexts/CurrenciesContext";
import { useStyle } from "./layout.style";

const Layout = ({ children }) => {
  
  const { loading } = useContext(ConverterContext);
  const { loading: loading2 } = useContext(CurrenciesContext);

  const classes = useStyle();
  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.header}>
        <Navbar />
        {(loading || loading2) && <LinearProgress />}
      </Grid>
      <Grid item xs={9} className={classes.body}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
