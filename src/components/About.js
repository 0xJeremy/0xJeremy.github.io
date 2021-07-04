import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { fontSans, slate, orange } from "./PageStyles";
import { SectionHeader, StyledLink } from "./Common";

const smallScreen = window.screen.height < 850;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "50vh",
    maxWidth: "60%",
  },
  grid: {
    marginTop: "5vh",
  },
  about: {
    fontFamily: fontSans,
    fontSize: "1.2em",
    color: slate,
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    lineHeight: "1.6",
  },
  imgWrapper: {
    // TODO: make this image prettier
    display: "block",
    position: "relative",
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
}));

export default function About(props) {
  const classes = useStyles({ smallScreen });

  return (
    <div className={classes.root} id="about">
      <SectionHeader number="1" text="About Me" />
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={8}>
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
            Some of the things I've worked with recently are TypeScript,
            React.js, Python, and high-performance web applications. In my free
            time I build open-source libraries, robots, and design circuit
            boards.
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.imgWrapper}>
            <img rounded src="static/avatar.jpeg" className={classes.avatar} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
