import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { colorOrange, colorGreen } from "./PageStyles";
const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    color: colorOrange,
    marginTop: "1vh",
  },
  logo: {
    height: "2.5em",
    paddingRight: "24px",
    verticalAlign: "center",
  },
  name: {
    marginLeft: "-10px",
    fontSize: "2.2em",
  },
  button: {
    fontWeight: "600",
    color: colorOrange,
    marginLeft: "1vw",
    marginRight: "1vw",
    fontSize: "1.2em",
    "&:hover": {
      borderColor: colorGreen,
      color: colorGreen,
    },
    marginTop: (props) => (props.smallScreen ? "2vh" : 0),
  },
  outline: {
    borderColor: colorOrange,
    height: "100%",
  },
  rightToolbar: {
    marginLeft: "auto",
  },
}));

function ToolBar(props) {
  const classes = useStyles({ smallScreen });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Toolbar className={classes.root}>
      {/*      <img className={classes.logo} src="static/logo.png" alt="" />
      <Typography className={classes.name}>
        Raspberry Pi[co] [OSS]illoscope
      </Typography>*/}

      <section className={classes.rightToolbar}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
            color="primary"
          >
            Home
          </Button>
        </Link>

        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
            color="primary"
          >
            Contact Me
          </Button>
        </Link>

        <Button
          className={classes.button}
          classes={{ outlined: classes.outline }}
          variant="outlined"
          color="primary"
          href="static/JCK%20Resume.pdf"
          target="_blank"
        >
          Resume
        </Button>

        <Link to="/research" style={{ textDecoration: "none" }}>
          <Button
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
            color="primary"
          >
            Research
          </Button>
        </Link>

        <Link to="/projects" style={{ textDecoration: "none" }}>
          <Button
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
            color="primary"
          >
            Projects
          </Button>
        </Link>

        <Button
          className={classes.button}
          classes={{ outlined: classes.outline }}
          variant="outlined"
          color="primary"
          href="https://github.com/0xJeremy/"
          target="_blank"
        >
          Github
        </Button>
      </section>
    </Toolbar>
  );
}

export default ToolBar;
