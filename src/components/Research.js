import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colorGreen, colorOrange } from "./PageStyles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";

const offsetLeft = 5;
const offsetTop = 15;

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

export default function Research() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Research | Jeremy Kanovsky";
  });

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <div className={classes.text}>
          there will be some stuff here eventually. for now, see{" "}
          <a
            href="static/ME94%20Poster%20Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            here
          </a>
          .
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
