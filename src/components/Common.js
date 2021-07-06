import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { orange, slightOrange, fontMono, llslate } from "./PageStyles";

const thinScreen = window.screen.width < 950;

const StyledButton = withStyles({
  root: {
    color: orange,
    fontFamily: fontMono,
    textTransform: "none",
    "&:hover": {
      backgroundColor: slightOrange,
    },
  },
})(Button);

const sectionHeaderStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // lineHeight: "0.1em",
    // borderBottom: `1px solid ${slate}`,
    margin: (props) => (props.thinScreen ? "10px 0 0" : "10px 0 20px"),
    color: llslate,
    fontFamily: fontMono,
    fontSize: (props) => (props.thinScreen ? "1.5em" : "2em"),
  },
  number: {
    color: orange,
    float: "left",
    paddingRight: "8px",
  },
  text: {
    background: "#0a192f",
    padding: "0 10px",
  },
}));

function SectionHeader(props) {
  const classes = sectionHeaderStyles({ thinScreen });

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.number}>0{props.number}.</div>
        <div className={classes.text}>{props.text}</div>
      </div>
    </div>
  );
}

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

function StyledLink(props) {
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

export { StyledButton, SectionHeader, StyledLink };
