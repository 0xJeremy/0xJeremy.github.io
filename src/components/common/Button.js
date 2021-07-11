import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { orange, slightOrange, fontMono } from "./PageStyles";

export const StyledButton = withStyles({
  root: {
    color: orange,
    fontFamily: fontMono,
    textTransform: "none",
    borderColor: orange,
    border: "1px solid",
    "&:hover": {
      backgroundColor: slightOrange,
    },
  },
  outlined: {
    borderColor: orange,
  },
})(Button);
