import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { paperColor, colorOrange, colorBlue, colorGreen } from "./PageStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    color: colorOrange,
    marginTop: '1vh',
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
    marginLeft: "16px",
    color: colorOrange,
    marginLeft: '1vw',
    marginRight: '1vw',
    fontSize: '1.2em',
    '&:hover': {
        borderColor:colorGreen,
        color: colorGreen,
    }
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
  const classes = useStyles();
  const { setPage } = props;

  return (
    <Toolbar className={classes.root}>
{/*      <img className={classes.logo} src="static/logo.png" alt="" />
      <Typography className={classes.name}>
        Raspberry Pi[co] [OSS]illoscope
      </Typography>*/}

      <section className={classes.rightToolbar}>
        <Link to="/contact-me" style={{ textDecoration: 'none' }}>
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
          href="https://jeremykanovsky.com/JCK%20Resume.pdf"
          target="_blank"
        >
          Resume
        </Button>

        <Link to="/research" style={{ textDecoration: 'none' }}>
          <Button
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
            color="primary"
            href="https://github.com/0xJeremy/p6"
            target="_blank"
          >
            Research
          </Button>
        </Link>

        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <Button
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
            color="primary"
            href="https://github.com/0xJeremy/p6"
            target="_blank"
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
