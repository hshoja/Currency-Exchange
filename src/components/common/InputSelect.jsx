import { MenuItem, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./input.style";

const InputSelect = ({ title, items, value, onChange }) => {
  const classes = useStyle();

  return (
    <>
      <Typography>{title}</Typography>
      <TextField
        id="outlined-select-currency"
        select
        value={value}
        onChange={onChange}
        variant="outlined"
        className={classes.input}
        // inputProps={{  }}
      >
        {Object.keys(items).map((currency) => (
          <MenuItem key={currency} value={currency}>
            {`${items[currency].description} (${currency})`}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default InputSelect;
