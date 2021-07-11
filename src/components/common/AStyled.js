import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  a: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export function AStyled(props) {
  const classes = useStyles();

  return (
    <a
      className={classes.a}
      href={props.href}
      target="_blank"
      rel="noopener noreffer"
    >
      {props.children}
    </a>
  );
}
