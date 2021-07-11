import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import {
  fontMono,
  fontSans,
  orange,
  llslate,
  lslate,
  slate,
  lnavy,
  StyledButton,
  AStyled,
} from "../components/common";
import * as SocketEngine from "../projects/SocketEngine";
import * as Helios from "../projects/Helios";
import * as Icarus from "../projects/Icarus";
import * as Surge from "../projects/Surge";
import * as PicoOscilloscope from "../projects/PicoOscilloscope";
import * as Ballbot from "../projects/Ballbot";
import * as DrawingRobot from "../projects/DrawingRobot";
import * as Vegas from "../projects/Vegas";
import * as Fleet from "../projects/Fleet";
import * as SpacePrinter from "../projects/SpacePrinter";
import * as Crawler from "../projects/Crawler";
import * as DevBoard from "../projects/DevBoard";

const thinScreen = window.screen.width < 750;

const useStyles = makeStyles((theme) => ({
  card: {
    background: lnavy,
    padding: "32px 24px 32px 24px",
    borderRadius: "5px",
    transition: "0.3s",
    position: "relative",
    color: llslate,
    top: "0px",
    "&:hover": {
      top: "-8px",
      cursor: "pointer",
      color: orange,
    },
  },
  mainContent: {
    height: "164px",
  },
  title: {
    fontFamily: fontSans,
    fontSize: "1.5em",
    fontWeight: "600",
    letterSpacing: "1px",
    marginTop: "64px",
  },
  description: {
    color: lslate,
    fontFamily: fontSans,
    fontSize: "1em",
    marginTop: "16px",
  },
  technology: {
    color: slate,
    fontSize: "0.8em",
    fontFamily: fontMono,
    marginTop: "32px",
  },
  icons: {
    marginBottom: "32px",
  },
  folder: {
    float: "left",
    color: orange,
  },
  github: {
    float: "right",
  },
}));

function ProjectCard(props) {
  const classes = useStyles({ thinScreen });
  const project = props.project;

  return (
    <AStyled href={project.data.github}>
      <div className={classes.card}>
        <div className={classes.icons}>
          <div className={classes.folder}>
            <FolderIcon fontSize="large" />
          </div>
          <div className={classes.github}>
            <GitHubIcon fontSize="large" />
          </div>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.title}>{project.title}</div>
          <div className={classes.description}>{project.description}</div>
        </div>
        <div className={classes.technology}>
          {project.technology.join("  ")}
        </div>
      </div>
    </AStyled>
  );
}

const showcaseStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "25vh",
    width: (props) => (props.thinScreen ? "95%" : "75%"),
  },
  sectionTitle: {
    textAlign: "center",
    fontFamily: fontMono,
    color: llslate,
    fontSize: (props) => (props.thinScreen ? "1em" : "1.5em"),
    fontWeight: "600",
    letterSpacing: "1px",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: fontMono,
    color: orange,
    fontSize: (props) => (props.thinScreen ? "0.8em" : "1em"),
    marginTop: "2vh",
  },
  grid: {
    marginTop: "4vh",
  },
  gridItem: {
    minWidth: (props) => (props.thinScreen ? "90vw" : "auto"),
  },
  centerButton: {
    textAlign: "center",
    marginTop: "8vh",
  },
  button: {
    fontSize: "1em",
    padding: "12px 20px 12px 20px",
  },
}));

export function OtherProjects(props) {
  const classes = showcaseStyles({ thinScreen });
  const projects = [
    SocketEngine,
    Helios,
    Icarus,
    PicoOscilloscope,
    Surge,
    Ballbot,
  ];
  const fullProjects = [
    ...projects,
    DrawingRobot,
    Vegas,
    Fleet,
    SpacePrinter,
    Crawler,
    DevBoard,
  ];
  const [toShow, setToShow] = useState(projects);
  const [more, setMore] = useState(false);

  function toggleShown() {
    if (more) {
      setToShow(projects);
      setMore(false);
    } else {
      setToShow(fullProjects);
      setMore(true);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.sectionTitle}>Other Noteworthy Projects</div>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <div className={classes.subtitle}>view all projects</div>
      </Link>

      <Grid container spacing={2} className={classes.grid}>
        {toShow.map((project) => {
          return (
            <Grid item xs={4} className={classes.gridItem}>
              <ProjectCard project={project} />
            </Grid>
          );
        })}
      </Grid>

      <div className={classes.centerButton}>
        <StyledButton className={classes.button} onClick={toggleShown}>
          {more ? "Show Less" : "Show More"}
        </StyledButton>
      </div>
    </div>
  );
}
