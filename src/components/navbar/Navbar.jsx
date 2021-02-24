import {memo} from "react";
import { Box, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyle } from "./navbar.style";

const Navbar = () => {
  const classes = useStyle();
  
  return (
    <Box className={classes.navbar}>
      <Grid item xs={9}>
        <Box className={classes.linkGroup}>
          <NavLink
            className={classes.link}
            activeClassName={classes.selectedlink}
            to="/"
            exact
          >
            currency converter
          </NavLink>

          <NavLink
            className={classes.link}
            activeClassName={classes.selectedlink}
            to="/currencies"
            exact
          >
            current exchange rates
          </NavLink>
        </Box>
      </Grid>
    </Box>
  );
};

export default memo(Navbar);
