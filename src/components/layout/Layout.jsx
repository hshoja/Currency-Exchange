import { Grid, LinearProgress } from "@material-ui/core";
import React, { useContext } from "react";
import { Navbar } from "..";
import ConverterContext from "../../contexts/ConverterContext";

const Layout = ({ children }) => {
  const { loading } = useContext(ConverterContext);

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        {loading && <LinearProgress />}
        <Navbar />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
