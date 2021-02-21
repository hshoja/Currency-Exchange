import {
  InputAdornment,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyle } from "./input.style";

const InputText = ({ title }) => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const classes = useStyle();

  return (
    <>
      <Typography>{title}</Typography>
      <OutlinedInput
        id="outlined-select-currency"
        value={currency}
        onChange={handleChange}
        variant="outlined"
        className={classes.input}
        endAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </>
  );
};

export default InputText;
