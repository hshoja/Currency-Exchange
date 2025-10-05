import React from "react";
import PropTypes from "prop-types";
import { Grid, LinearProgress } from "@material-ui/core";
import useConverterContext from "../../hooks/useConverterContext";
import useCurrenciesContext from "../../hooks/useCurrenciesContext";
import { Navbar } from "..";
import { useStyle } from "./layout.style";

const Layout = ({ children }) => {
  const { values: { loading } } = useConverterContext();
  const { loading: loading2 } = useCurrenciesContext();
 
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
