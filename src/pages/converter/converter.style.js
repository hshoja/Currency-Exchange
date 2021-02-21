import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../constants/colors";

export const useStyle = makeStyles((theme) => ({
  paper: {
    backgroundColor: COLORS.secondary,
    padding: theme.spacing(5),
  },
}));
