import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { fontMono, orange, slate } from "./PageStyles";
import { StyledButton } from "./Common";
const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    color: orange,
    marginTop: "1.5vh",
  },
  logo: {
    height: "2.5em",
    marginLeft: "1.8vw",
    verticalAlign: "center",
  },
  leftAlign: {
    float: "left",
  },
  number: {
    float: "left",
    color: orange,
    paddingRight: "2px",
  },
  navItem: {
    float: "left",
    color: slate,
    fontFamily: fontMono,
    marginLeft: "1vw",
    marginRight: "1vw",
    fontSize: "0.9em",
    transition: "0.3s",
    "&:hover": {
      color: orange,
    },
    top: "50%",
    transform: "translateY(-50%)",
  },
  // TODO: De-duplicate this with navItem
  navButton: {
    float: "left",
    fontFamily: fontMono,
    marginLeft: "1vw",
    marginRight: "1vw",
    fontSize: "0.9em",
    "&:hover": {
      color: orange,
    },
    top: "50%",
    transform: "translateY(-50%)",
  },
  outline: {
    borderColor: orange,
  },
  rightToolbar: {
    marginLeft: "auto",
    marginTop: "3vh",
  },
}));

function NavbarLink(props) {
  const classes = props.styles;
  return (
    <HashLink to={props.to} style={{ textDecoration: "none" }}>
      <div className={classes.navItem}>
        <div className={classes.number}>0{props.number}.</div>
        <div className={classes.leftAlign}>{props.text}</div>
      </div>
    </HashLink>
  );
}

function NavbarButton(props) {
  const classes = useStyles();
  return (
    <StyledButton
      className={classes.navButton}
      classes={{ outlined: classes.outline }}
      variant="outlined"
      href={props.href}
      target="_blank"
    >
      {props.text}
    </StyledButton>
  );
}

function ToolBar(props) {
  const classes = useStyles({ smallScreen });

  return (
    <Toolbar sticky className={classes.root}>
      <img className={classes.logo} src="static/logo.png" alt="" />

      <section className={classes.rightToolbar}>
        <NavbarLink to="/" number="1" styles={classes} text="Home" />
        <NavbarLink to="/#about" number="2" styles={classes} text="About Me" />
        <NavbarLink
          to="/projects"
          number="3"
          styles={classes}
          text="Projects"
        />
        <NavbarLink
          to="/#contact"
          number="4"
          styles={classes}
          text="Contact Me"
        />

        <NavbarButton
          href="https://github.com/0xJeremy/"
          styles={classes}
          text="Github"
        />
        <NavbarButton
          href="/static/JCK%20Resume.pdf"
          styles={classes}
          text="Resume"
        />
      </section>
    </Toolbar>
  );
}

export default ToolBar;
