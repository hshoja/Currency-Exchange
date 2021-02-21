import { MenuItem, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./input.style";

const InputSelect = ({ title, items }) => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const classes = useStyle();

  return (
    <>
      <Typography>{title}</Typography>
      <TextField
        id="outlined-select-currency"
        select
        value={currency}
        onChange={handleChange}
        variant="outlined"
        className={classes.input}
        // inputProps={{  }}
      >
        {items.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default InputSelect;
