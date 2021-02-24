import { memo } from "react";
import { MenuItem, TextField, Typography } from "@material-ui/core";
import { useStyle } from "./input.style";

const InputSelect = ({ title, items, value, onChange }) => {
  const classes = useStyle();

  return (
    <>
      <Typography>{title}</Typography>
      <TextField
        select
        value={value}
        onChange={onChange}
        variant="outlined"
        className={classes.input}
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

export default memo(InputSelect);
