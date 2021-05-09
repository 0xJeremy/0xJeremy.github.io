import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typewriter from 'typewriter-effect';
import { colorGreen, colorOrange } from "./PageStyles";

const offsetLeft = 5;
const textPadding = 2;

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "600",
    fontSize: '8em',
    position: "relative",
    left: `${offsetLeft}vw`,
    width: `${100-offsetLeft}vw`,
    height: '85vh',
    top: '10vh',
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
}));

export default function Greeting() {
  const classes = useStyles();

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
    </div>
  );
}
