import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fontMono, fontSans, orange, llslate, slate } from "./PageStyles";
import { StyledButton } from "./Common";

const smallScreen = window.screen.height < 850;

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
    fontSize: "1.5em",
    width: "60%",
    margin: "auto",
    textAlign: "center",
    fontFamily: fontSans,
    marginTop: "2vh",
  },
  centerButton: {
    textAlign: "center",
    marginTop: "4vh",
  },
  outline: {
    borderColor: orange,
  },
  button: {
    fontSize: "1em",
    // marginRight: "2em",
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
  a: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default function Contact(props) {
  const classes = useStyles({ smallScreen });

  return (
    <div className={classes.root} id="contact">
      <div className={classes.sectionTitle}>04. What's next?</div>
      <div className={classes.subtitle}>Get In Touch</div>
      <div className={classes.info}>
        I'm not currently looking for new job opportunities, but my inbox is
        always open. Feel free to reach out and say hello! I'm always looking
        for new projects, and would love to collaborate on something cool.
      </div>

      <div className={classes.centerButton}>
        <a
          href="mailto:kanovsky.jeremy@gmail.com"
          rel="noopener noreferrer"
          className={classes.a}
        >
          <StyledButton
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
          >
            Say Hello
          </StyledButton>
        </a>
      </div>

      <div className={classes.footer}>
        This site is made by Jeremy Kanovsky with React.js and some small
        headache.
      </div>
    </div>
  );
}
