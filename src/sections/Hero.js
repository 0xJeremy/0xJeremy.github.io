import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HashLink } from "react-router-hash-link";
import {
  fontMono,
  fontSans,
  orange,
  llslate,
  slate,
  StyledButton,
  StyledLink,
} from "../components/common";

const offsetTop = 18;
const smallScreen = window.screen.height < 850;
const thinScreen = window.screen.width < 950;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: (props) =>
      props.smallScreen ? `${offsetTop / 3}vh` : `${offsetTop}vh`,
    width: (props) => (props.smallScreen ? "95%" : "70%"),
    margin: "auto",
  },
  hello: {
    fontFamily: fontMono,
    color: orange,
    fontSize: "1em",
    marginBottom: "24px",
  },
  intro: {
    fontWeight: "600",
    letterSpacing: "1px",
    fontFamily: fontSans,
    fontSize: (props) => (props.smallScreen ? "2.5em" : "5em"),
  },
  name: {
    color: llslate,
  },
  build: {
    color: slate,
  },
  about: {
    fontFamily: fontSans,
    fontSize: (props) => (props.thinScreen ? "1.1em" : "1.2em"),
    marginTop: (props) => (props.thinScreen ? "16px" : 0),
    color: slate,
    maxWidth: (props) => (props.smallScreen ? "90%" : "50%"),
  },
  buttonGroup: {
    marginTop: (props) => (props.smallScreen ? "32px" : "64px"),
  },
  button: {
    float: "none",
    fontSize: (props) => (props.thinScreen ? "0.8em" : "1em"),
    marginRight: "2em",
    padding: (props) =>
      props.thinScreen ? "6px 10px 6px 10px" : "12px 20px 12px 20px",
  },
}));

export function Hero(props) {
  const classes = useStyles({ smallScreen, thinScreen });

  useEffect(() => {
    document.title = "Home | Jeremy Kanovsky";
  });

  return (
    <div className={classes.root}>
      <div className={classes.hello}>Hi, my name is</div>
      <div className={classes.intro}>
        <div className={classes.name}>Jeremy Kanovsky</div>
        <div className={classes.build}>I write code for hardware.</div>
      </div>

      <div className={classes.about}>
        I'm a Boston-based software engineer who specializes in writing code for
        IoT devices and robots. Sometimes, I dabble in hardware. Currently, I'm
        an engineer at{" "}
        <StyledLink href="https://markforged.com/" text="Markforged" /> working
        on the software powering next-generation 3D printers.
      </div>

      <div className={classes.buttonGroup}>
        <HashLink to="/#contact" style={{ textDecoration: "none" }}>
          <StyledButton className={classes.button}>Get In Touch</StyledButton>
        </HashLink>

        <HashLink to="/#projects" style={{ textDecoration: "none" }}>
          <StyledButton className={classes.button}>See My Work</StyledButton>
        </HashLink>
      </div>
    </div>
  );
}
