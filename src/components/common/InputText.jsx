import { memo } from "react";
import { InputAdornment, OutlinedInput, Typography } from "@material-ui/core";
import { useStyle } from "./input.style";

const InputText = ({ title, symbol = "", value, onChange }) => {
  const classes = useStyle();

  return (
    <>
      <Typography>{title}</Typography>
      <OutlinedInput
        value={value}
        onChange={onChange}
        variant="outlined"
        className={classes?.input}
        endAdornment={
          <InputAdornment position="start">{symbol}</InputAdornment>
        }
      />
    </>
  );
};

export default memo(InputText);
