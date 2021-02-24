import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  navbar: {
    backgroundColor: "#2B439C",
    display: "flex",
    height: 62,
    flex: 1,
    justifyContent: "center",
  },
  linkGroup: {
    display: "flex",
    height: "100%",
  },
  link: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
    width: 297,
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center'
  },
  selectedlink: {
    fontWeight: 900,
    backgroundColor: "#15255E",
  },
});
