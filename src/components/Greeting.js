import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typewriter from 'typewriter-effect';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { colorGreen, colorOrange } from "./PageStyles";

const offsetLeft = 5;
const offsetTop = 15;
const textPadding = 2;

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "600",
    fontSize: '8em',
    position: "relative",
    left: `${offsetLeft}vw`,
    width: `${100-offsetLeft}vw`,
    height: `${100-offsetTop-10}vh`,
    top: `${offsetTop}vh`,
  },
  hello: {
    color: "white",
  },
  name: {
    color: colorOrange,
    paddingTop: `${textPadding}vh`,
  },
  build: {
    color: colorGreen,
    float: 'left',
    paddingTop: `${textPadding}vh`,
  },
  typewriter: {
    color: colorGreen,
    float: 'left',
    paddingTop: `${textPadding}vh`,
  },
  outline: {
    borderColor: colorOrange,
  },
  button: {
    float: 'none',
    fontWeight: '600',
    fontSize: '0.4em',
    marginRight: '2em',
    color: colorOrange,
    '&:hover': {
        borderColor:colorGreen,
        color: colorGreen,
    }
  },
}));

export default function Greeting(props) {
  const classes = useStyles();
  const { setPage } = props;

  return (
    <div className={classes.root}>
      <div className={classes.hello}>
        👋 Hello.
      </div>
      <div className={classes.name}>
        I'm Jeremy.
      </div>
      <div className={classes.build}>
        I build&nbsp;
      </div>
      <div className={classes.typewriter}>
        <Typewriter
          options={{
            strings: ['robots.', 'software.', 'electronics.', 'mechanisms.', 'open source.', 'hardware.'],
            autoStart: true,
            loop: true,
            cursor: '_',
          }}
        />
      </div>

      <br />
      <br />

      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <Button
          className={classes.button}
          classes={{ outlined: classes.outline }}
          variant="outlined"
          color="primary"
        >
          Contact Me
        </Button>
      </Link>

      <Link to="/projects" style={{ textDecoration: 'none' }}>
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
  );
}
