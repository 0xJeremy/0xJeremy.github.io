import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { fontSans, slate, orange } from "./PageStyles";
import { SectionHeader, StyledLink } from "./Common";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const smallScreen = window.screen.height < 850;
const thinScreen = window.screen.width < 950;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "50vh",
    width: (props) => (props.thinScreen ? "95%" : "75%"),
  },
  grid: {
    marginTop: "5vh",
  },
  gridItem: {
    minWidth: (props) => (props.thinScreen ? "100%" : "auto"),
  },
  about: {
    fontFamily: fontSans,
    fontSize: "1.2em",
    color: slate,
    position: "relative",
    lineHeight: (props) => (props.thinScreen ? "1.2" : "1.6"),
  },
  imgWrapper: {
    // TODO: make this image prettier
    display: "block",
    position: "relative",
    width: (props) => (props.thinScreen ? "100%" : "auto"),
    // width: '100%',
    // borderRadius: '5px',
    // backgroundColor: orange,
    // "&:hover": {
    //   top: '15px',
    //   left: '15px',
    // },
    // "&::after": {
    //   content: '""',
    //   display: 'block',
    //   position: 'absolute',
    //   width: '100%',
    //   height: '100%',
    //   borderRadius: '5px',
    //   transition: '0.3s',
    // }
  },
  avatar: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",

    // display: 'inline-block',
    // position: 'relative',
    // "&::after": {
    //   content: '""',
    //   position: 'absolute',
    //   top: '-5%',
    //   left: '-15%',
    //   width: '100%',
    //   height: '100%',
    //   border: '4px solid red',
    // }
    // boxShadow: '2px 2px 2px 1px red',
  },
  tech: {
    color: "white",
  },
}));

const technologyStyles = makeStyles((theme) => ({
  icon: {
    color: orange,
    display: "inline-block",
    position: "relative",
    top: "50%",
    transform: "translateY(-40%)",
  },
  text: {
    fontFamily: fontSans,
    fontSize: "1.2em",
    color: slate,
    display: "inline-block",
  },
}));

function Technology(props) {
  const classes = technologyStyles({ thinScreen });

  return (
    <Grid item xs={6}>
      <div className={classes.icon}>
        <NavigateNextIcon />
      </div>
      <div className={classes.text}>{props.children}</div>
    </Grid>
  );
}

export default function About(props) {
  const classes = useStyles({ smallScreen, thinScreen });
  const technologies = [
    "Node.js",
    "TypeScript",
    "Python",
    "CI/CD",
    "React.js",
    "AWS",
  ];

  return (
    <div className={classes.root} id="about">
      <SectionHeader number="1" text="About Me" />
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={8} className={classes.gridItem}>
          <div className={classes.about}>
            Hello! My name is Jeremy and I write code that lives and runs on
            hardware. Specifically, I enjoy writing code for robots, 3D
            printers, and embedded systems. I currently work at{" "}
            <StyledLink href="https://markforged.com/" text="Markforged" />
            &nbsp; writing software that powers next generation 3D printers.
            Previously I've worked at the{" "}
            <StyledLink
              href="https://www.microsoft.com/en-us/garage/"
              text="Microsoft Garage"
            />
            &nbsp; and the{" "}
            <StyledLink href="https://nolop.org/" text="Nolop Makerspace" />
            &nbsp;.
            <br />
            <br />
            In my free time, I build open-source libraries, robots, and design
            circuit boards. I like to read, and go up then fall off rocks.
            <br />
            <br />
            Some of the things I've been working on recently ar:
          </div>

          <Grid container spacing={1} className={classes.tech}>
            {technologies &&
              technologies.map((skill, i) => (
                <Technology key={i}>{skill}</Technology>
              ))}
          </Grid>
        </Grid>

        <Grid item xs={4} className={classes.gridItem}>
          <div className={classes.imgWrapper}>
            <img
              src="static/avatar.jpeg"
              alt="Avatar"
              className={classes.avatar}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
