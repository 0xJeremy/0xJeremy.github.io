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
    width: `${100 - offsetLeft}vw`,
    height: `${100 - offsetTop - 10}vh`,
    top: `${offsetTop}vh`,
  },
  title: {
    color: colorGreen,
    paddingBottom: "3vh",
  },
  text: {
    color: "white",
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
    marginRight: "2em",
    color: colorOrange,
    "&:hover": {
      borderColor: colorGreen,
      color: colorGreen,
    },
  },
}));

export default function ProjectTemplate(props) {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <div className={classes.title}>{props.title}</div>

        <div className={classes.text}>{props.children}</div>

        <br />
        <br />

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
      </div>
    </div>
  );
}
