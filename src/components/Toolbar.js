import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { fontMono, orange, slate, lnavy, StyledButton } from "./common";

const smallScreen = window.screen.width < 650;
const thinScreen = window.screen.width < 950;

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
    float: (props) => (props.thinScreen ? "none" : "left"),
  },
  number: {
    textAlign: (props) => (props.thinScreen ? "center" : "inherit"),
    float: (props) => (props.thinScreen ? "none" : "left"),
    color: orange,
    paddingRight: "2px",
  },
  navItem: {
    textAlign: (props) => (props.thinScreen ? "center" : "inherit"),
    float: (props) => (props.thinScreen ? "none" : "left"),
    color: slate,
    fontFamily: fontMono,
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: (props) => (props.thinScreen ? "5vh" : "0"),
    fontSize: (props) => (props.thinScreen ? "1.2em" : "0.9em"),
    transition: "0.3s",
    "&:hover": {
      color: orange,
    },
    top: "50%",
    transform: "translateY(-50%)",
  },
  // TODO: De-duplicate this with navItem
  navButton: {
    float: (props) => (props.thinScreen ? "none" : "left"),
    fontFamily: fontMono,
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: (props) => (props.thinScreen ? "5vh" : 0),
    fontSize: (props) => (props.thinScreen ? "1.2em" : "0.9em"),
    "&:hover": {
      color: orange,
    },
    top: "50%",
    transform: "translateY(-50%)",
  },
  centerButton: {
    alignContent: "center",
    textAlign: "center",
  },
  rightToolbar: {
    marginLeft: "auto",
    marginTop: "3vh",
  },
}));

function NavbarLink(props) {
  const classes = props.styles;
  const close = props.close;
  return (
    <HashLink to={props.to} style={{ textDecoration: "none" }}>
      <div className={classes.navItem} onClick={close}>
        <div className={classes.number}>0{props.number}.</div>
        <div className={classes.leftAlign}>{props.text}</div>
      </div>
    </HashLink>
  );
}

function NavbarButton(props) {
  const classes = props.styles;
  const close = props.close;
  const content = (
    <StyledButton
      className={classes.navButton}
      variant="outlined"
      href={props.href}
      target="_blank"
    >
      {props.text}
    </StyledButton>
  );
  return thinScreen ? (
    <div className={classes.centerButton} onClick={close}>
      {content}
    </div>
  ) : (
    content
  );
}

function FullToolBar(props) {
  const classes = useStyles({ smallScreen, thinScreen });

  return (
    <Toolbar className={classes.root}>
      <img className={classes.logo} src="static/logo.png" alt="" />

      <section className={classes.rightToolbar}>{props.children}</section>
    </Toolbar>
  );
}

const drawerClasses = makeStyles((theme) => ({
  root: {
    height: "100%",
    right: "0",
    top: "0",
    width: "80%",
    position: "fixed",
    background: lnavy,
    opacity: "1.0",
    zIndex: 9999,
  },
  close: {
    right: "4vw",
    top: "8vw",
    position: "fixed",
  },
  items: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

function MobileDrawer(props) {
  const classes = drawerClasses({ thinScreen });

  return (
    <div className={classes.root}>
      <div className={classes.close}>
        <CloseIcon fontSize="large" onClick={props.close} />
      </div>
      <div className={classes.items}>{props.children}</div>
    </div>
  );
}

function MobileToolBar(props) {
  const classes = useStyles({ smallScreen, thinScreen });
  const { open, toggle } = props;

  return (
    <Toolbar className={classes.root}>
      <img className={classes.logo} src="static/logo.png" alt="" />

      <section className={classes.rightToolbar}>
        <MenuIcon fontSize="large" onClick={toggle} />
        {open && <MobileDrawer close={toggle}>{props.children}</MobileDrawer>}
      </section>
    </Toolbar>
  );
}

export default function ToolBar(props) {
  const classes = useStyles({ thinScreen });
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  function close() {
    setOpen(false);
  }

  const children = (
    <div>
      <NavbarLink
        to="/"
        number="0"
        styles={classes}
        close={close}
        text="Home"
      />
      <NavbarLink
        to="/#about"
        number="1"
        styles={classes}
        close={close}
        text="About Me"
      />
      <NavbarLink
        to="/#projects"
        number="2"
        styles={classes}
        close={close}
        text="Projects"
      />
      <NavbarLink
        to="/#contact"
        number="3"
        styles={classes}
        text="Contact Me"
        close={close}
      />

      <NavbarButton
        href="https://github.com/0xJeremy/"
        styles={classes}
        text="Github"
        close={close}
      />
      <NavbarButton
        href="/static/JCK%20Resume.pdf"
        styles={classes}
        text="Resume"
        close={close}
      />
    </div>
  );

  return (
    <div>
      {!thinScreen && <FullToolBar>{children}</FullToolBar>}
      {thinScreen && (
        <MobileToolBar open={open} toggle={toggle}>
          {children}
        </MobileToolBar>
      )}
    </div>
  );
}
