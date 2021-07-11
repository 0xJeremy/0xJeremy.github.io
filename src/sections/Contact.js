import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  fontMono,
  fontSans,
  orange,
  llslate,
  slate,
  StyledButton,
  AStyled,
} from "../components/common";

const thinScreen = window.screen.width < 750;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "25vh",
  },
  sectionTitle: {
    textAlign: "center",
    fontFamily: fontMono,
    color: orange,
    fontSize: "0.8em",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: fontSans,
    color: llslate,
    fontSize: "3em",
    fontWeight: 600,
    marginTop: "2vh",
    letterSpacing: "1px",
  },
  info: {
    color: slate,
    fontSize: (props) => (props.thinScreen ? "1.1em" : "1.5em"),
    width: (props) => (props.thinScreen ? "100%" : "60%"),
    margin: "auto",
    textAlign: "center",
    fontFamily: fontSans,
    marginTop: "2vh",
  },
  centerButton: {
    textAlign: "center",
    marginTop: (props) => (props.thinScreen ? "8vh" : "4vh"),
  },
  button: {
    fontSize: "1em",
    padding: "12px 20px 12px 20px",
  },
  footer: {
    textAlign: "center",
    marginTop: "25vh",
    marginBottom: "3vh",
    fontFamily: fontMono,
    color: slate,
    fontSize: "0.8em",
    transition: "0.3s",
    "&:hover": {
      color: orange,
      cursor: "pointer",
    },
  },
}));

export function Contact(props) {
  const classes = useStyles({ thinScreen });

  return (
    <div className={classes.root} id="contact">
      <div className={classes.sectionTitle}>03. What's next?</div>
      <div className={classes.subtitle}>Get In Touch</div>
      <div className={classes.info}>
        I'm not currently looking for new job opportunities, but my inbox is
        always open. Feel free to reach out and say hello! I'm always looking
        for new projects, and would love to collaborate on something cool.
      </div>

      <div className={classes.centerButton}>
        <AStyled href="mailto:kanovsky.jeremy@gmail.com">
          <StyledButton className={classes.button}>Say Hello</StyledButton>
        </AStyled>
      </div>

      <div className={classes.footer}>
        <AStyled href="https://github.com/0xJeremy/0xJeremy.github.io">
          This site is made by Jeremy Kanovsky with React.js and some small
          headache.
        </AStyled>
      </div>
    </div>
  );
}
