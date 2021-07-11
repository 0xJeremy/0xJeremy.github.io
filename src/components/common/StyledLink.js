import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "./PageStyles";

const linkStyles = makeStyles((theme) => ({
  a: {
    color: orange,
    textDecoration: "none",
    display: "inline-block",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "1px",
      bottom: 7,
      left: 0,
      backgroundColor: orange,
      transformOrigin: "bottom right",
      transition: "transform 0.25s ease-out",
    },
    "&:hover": {
      "&::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    },
  },
}));

export function StyledLink(props) {
  const classes = linkStyles();
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.a}
    >
      {props.text}
    </a>
  );
}
