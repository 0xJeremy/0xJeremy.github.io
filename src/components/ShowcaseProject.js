import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  fontMono,
  fontSans,
  orange,
  slate,
  lslate,
  llslate,
  lnavy,
  AStyled,
} from "../components/common";

const thinScreen = window.screen.width < 950;

const showcaseInformationStyles = makeStyles((theme) => ({
  root: {
    direction: (props) => (props.float === "left" ? "lrt" : "rtl"),
    zIndex: 1000,
    color: llslate,
    "&:hover": {
      color: orange,
      cursor: "pointer",
    },
  },
  featured: {
    textAlign: (props) => props.float,
    fontFamily: fontMono,
    fontSize: "0.8em",
    color: orange,
  },
  projectTitle: {
    textAlign: (props) => props.float,
    color: "inherit",
    fontWeight: 600,
    letterSpacing: "1px",
    fontFamily: fontSans,
    fontSize: "2em",
    paddingTop: "8px",
  },
  description: {
    textAlign: (props) => props.float,
    marginRight: (props) => (props.float === "left" ? "auto" : 0),
    marginLeft: (props) => (props.float === "left" ? 0 : "auto"),
    width: (props) => (props.thinScreen ? "80%" : "120%"),
    background: lnavy,
    fontFamily: fontSans,
    color: lslate,
    borderRadius: "5px",
    padding: "32px",
    fontSize: "1.2em",
    margin: (props) => (props.thinScreen ? "12px 0 12px 0" : "12px 0 24px 0"),
    transition: "0.3s",
    top: 0,
    position: "relative",
    "&:hover": {
      top: "-8px",
    },
  },
  technology: {
    color: slate,
    fontFamily: fontMono,
    fontSize: "0.8em",
    float: (props) => props.float,
    paddingRight: "16px",
  },
  icons: {
    color: slate,
    paddingTop: "24px",
    fontSize: "1em",
    float: (props) => props.float,
    paddingRight: "16px",
    "&:hover": {
      color: orange,
    },
  },
}));

function ShowcaseInformation(props) {
  const classes = showcaseInformationStyles({ ...props.params, thinScreen });
  const project = props.project;

  return (
    <AStyled href={project.data.github}>
      <div className={classes.root}>
        <div className={classes.featured}>Featured Project</div>
        <div className={classes.projectTitle}>{project.title}</div>
        <div className={classes.description}>{project.description}</div>
        {project.technology.map((key) => (
          <div className={classes.technology} key={key}>
            {key}
          </div>
        ))}
        {!thinScreen && <br />}
        {project.data && project.data.github && !thinScreen && (
          <div className={classes.icons}>
            {/*            <a
              href={project.data.github}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.a}
            >
*/}{" "}
            <GitHubIcon />
            {/*</a>*/}
          </div>
        )}
      </div>
    </AStyled>
  );
}

const showcaseStyles = makeStyles((theme) => ({
  projectContainer: {
    position: "relative",
    width: (props) => (props.thinScreen ? "90vw" : "auto"),
  },
  image: {
    width: "100%",
    height: "auto",
    float: (props) => props.imgFloat,
    position: "relative",
    zIndex: -5,
    borderRadius: "5px",
  },
  gridItem: {
    minWidth: (props) => (props.thinScreen ? "100%" : "auto"),
  },
}));

export function ShowcaseProject(props) {
  let params;
  if (props.right) {
    params = { float: "right", imgFloat: "left" };
  } else {
    params = { float: "left", imgFloat: "right" };
  }
  const classes = showcaseStyles({ ...params, thinScreen });
  const project = props.project;

  const text = <ShowcaseInformation project={project} params={params} />;
  const image = (
    <img
      className={classes.image}
      src={`static/projects/${project.path}/${project.coverImage}`}
      // TODO: add alt-text
      alt=""
    />
  );

  let left, right;
  if (props.right) {
    left = image;
    right = text;
  } else {
    left = text;
    right = image;
  }

  return (
    <div className={classes.projectContainer}>
      <Grid
        container
        spacing={2}
        className={classes.grid}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={props.right ? 7 : 5} className={classes.gridItem}>
          {left}
        </Grid>

        <Grid item xs={props.right ? 5 : 7} className={classes.gridItem}>
          {right}
        </Grid>
      </Grid>
    </div>
  );
}
