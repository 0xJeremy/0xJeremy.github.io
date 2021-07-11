import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { orange, fontMono, llslate } from "./PageStyles";

const thinScreen = window.screen.width < 950;

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

export function SectionHeader(props) {
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
