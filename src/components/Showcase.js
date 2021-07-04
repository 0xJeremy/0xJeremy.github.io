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
} from "./PageStyles";
import { SectionHeader } from "./Common";
import * as Hexapod from "./projects/Hexapod";
import * as Meteorites from "./projects/Meteorites";
import * as Daedalus from "./projects/Daedalus";

const smallScreen = window.screen.height < 850;

const showcaseInformationStyles = makeStyles((theme) => ({
  root: {
    direction: (props) => (props.float === "left" ? "lrt" : "rtl"),
    zIndex: 1000,
  },
  featured: {
    textAlign: (props) => props.float,
    fontFamily: fontMono,
    fontSize: "0.8em",
    color: orange,
  },
  projectTitle: {
    textAlign: (props) => props.float,
    color: llslate,
    fontWeight: 600,
    letterSpacing: "1px",
    fontFamily: fontSans,
    fontSize: "2em",
    paddingTop: "8px",
    "&:hover": {
      color: orange,
      cursor: "pointer",
    },
  },
  description: {
    textAlign: (props) => props.float,
    marginRight: (props) => (props.float === "left" ? "auto" : 0),
    marginLeft: (props) => (props.float === "left" ? 0 : "auto"),
    width: "110%",
    background: lnavy,
    fontFamily: fontSans,
    color: lslate,
    borderRadius: "5px",
    padding: "32px",
    fontSize: "1.2em",
    margin: "12px 0 24px 0",
    transition: "0.3s",
    // TODO: improve this hover animation
    "&:hover": {
      boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)",
    },
  },
  technology: {
    color: slate,
    fontFamily: fontMono,
    fontSize: "0.8em",
    float: (props) => props.float,
    paddingRight: "16px",
  },
  a: {
    color: "inherit",
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
  const classes = showcaseInformationStyles(props.params);
  const project = props.project;

  return (
    <div className={classes.root}>
      <div className={classes.featured}>Featured Project</div>
      <div className={classes.projectTitle}>{project.title}</div>
      <div className={classes.description}>{project.description}</div>
      {project.technology.map((key) => (
        <div className={classes.technology}>{key}</div>
      ))}
      <br />
      {project.data && project.data.github && (
        <div className={classes.icons}>
          <a
            href={project.data.github}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.a}
          >
            <GitHubIcon fontSize="medium" />
          </a>
        </div>
      )}
    </div>
  );
}

const showcaseStyles = makeStyles((theme) => ({
  projectContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
    float: (props) => props.imgFloat,
    position: "relative",
    zIndex: -5,
    borderRadius: "5px",
  },
}));

function ShowcaseProject(props) {
  let params;
  if (props.right) {
    params = { float: "right", imgFloat: "left" };
  } else {
    params = { float: "left", imgFloat: "right" };
  }
  const classes = showcaseStyles(params);
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
        <Grid item xs={props.right ? 7 : 5}>
          {left}
        </Grid>

        <Grid item xs={props.right ? 5 : 7}>
          {right}
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "30vh",
    maxWidth: "75%",
  },
  firstProject: {
    // TODO: De-duplicate this with project
    marginTop: "5vh",
    marginBottom: "10vh",
  },
  project: {
    marginTop: "10vh",
    marginBottom: "10vh",
  },
}));

export default function Showcase(props) {
  const classes = useStyles({ smallScreen });

  return (
    <div className={classes.root}>
      <SectionHeader number="2" text="Some Things I've Built" />
      <div className={classes.firstProject}>
        <ShowcaseProject project={Hexapod} />
      </div>
      <div className={classes.project}>
        <ShowcaseProject project={Meteorites} right />
      </div>
      <div className={classes.project}>
        <ShowcaseProject project={Daedalus} />
      </div>
    </div>
  );
}
