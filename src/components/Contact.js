import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colorGreen, colorOrange } from "./PageStyles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";

const offsetLeft = 5;
const offsetTop = 15;
const textPadding = 2;

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "600",
    fontSize: "4em",
    position: "relative",
    left: `${offsetLeft}vw`,
    width: `${100 - offsetLeft}vw`,
    height: `${100 - offsetTop - 10}vh`,
    top: `${offsetTop}vh`,
  },
  email: {
    color: "white",
  },
  website: {
    color: "white",
    paddingTop: `${textPadding}vh`,
  },
  github: {
    color: "white",
    paddingTop: `${textPadding}vh`,
  },
  linkedin: {
    color: "white",
    paddingTop: `${textPadding}vh`,
  },
  outline: {
    borderColor: colorOrange,
  },
  link: {
    color: colorGreen,
  },
  button: {
    float: "none",
    fontWeight: "600",
    fontSize: "0.7em",
    color: colorOrange,
    "&:hover": {
      borderColor: colorGreen,
      color: colorGreen,
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Contact | Jeremy Kanovsky";
  });

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <div className={classes.email}>
          email:{" "}
          <a
            href="mailto:kanovsky.jeremy@gmail.com"
            rel="noopener noreferrer"
            className={classes.link}
          >
            kanovsky.jeremy@gmail.com
          </a>
        </div>
        <div className={classes.website}>website: you're here.</div>
        <div className={classes.github}>
          github:{" "}
          <a
            href="https://github.com/0xJeremy"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            github.com/0xJeremy
          </a>
        </div>
        <div className={classes.linkedin}>
          linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/jeremy-kanovsky/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            linkedin.com/in/jeremy-kanovsky
          </a>
        </div>

        <br />
        <br />

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
      </div>
    </div>
  );
}
