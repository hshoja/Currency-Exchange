import { Grid } from "@material-ui/core";
import React from "react";
import { Navbar } from "..";

const Layout = ({ children }) => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
