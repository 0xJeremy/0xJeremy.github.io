import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colorGreen, colorOrange } from "../PageStyles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Toolbar from "../Toolbar";

const offsetLeft = 5;
const offsetTop = 3;

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "600",
    fontSize: "4em",
    position: "relative",
    left: `${offsetLeft}vw`,
    width: `${100 - 2 * offsetLeft}vw`,
    height: `${100 - 2 * offsetTop}vh`,
    top: `${offsetTop}vh`,
  },
  title: {
    color: colorOrange,
    paddingBottom: "3vh",
  },
  children: {
    color: "white",
    maxWidth: "75%",
    fontSize: "0.5em",
    display: "block",
  },
  outline: {
    borderColor: colorOrange,
  },
  link: {
    color: colorGreen,
  },
  button: {
    float: "none",
    marginBottom: "2em",
    fontWeight: "600",
    fontSize: "0.7em",
    marginRight: "2em",
    color: colorOrange,
    "&:hover": {
      borderColor: colorGreen,
      color: colorGreen,
    },
  },
  linkButton: {
    float: "none",
    marginLeft: "5vw",
    fontWeight: "600",
    fontSize: "0.5em",
    marginRight: "2em",
    color: colorGreen,
    borderColor: colorGreen,
    "&:hover": {
      borderColor: colorOrange,
      color: colorOrange,
    },
  },
}));

export default function ProjectTemplate(props) {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <div className={classes.title}>
          {props.title}
          {props.data.github && (
            <Button
              className={classes.linkButton}
              classes={{ outlined: classes.outline }}
              variant="outlined"
              color="primary"
              href={props.data.github}
              target="_blank"
            >
              > View on GitHub
            </Button>
          )}
          {props.data.pypi && (
            <Button
              className={classes.linkButton}
              classes={{ outlined: classes.outline }}
              variant="outlined"
              color="primary"
              href={props.data.pypi}
              target="_blank"
            >
              > View on PyPi
            </Button>
          )}
          {props.data.npm && (
            <Button
              className={classes.linkButton}
              classes={{ outlined: classes.outline }}
              variant="outlined"
              color="primary"
              href={props.data.NPM}
              target="_blank"
            >
              > View on NPM
            </Button>
          )}
        </div>
        <div className={classes.children}>{props.children}</div>

        <br />
        <br />

        <Link to="/projects" style={{ textDecoration: "none" }}>
          <Button
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
            color="primary"
          >
            &lt; Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
