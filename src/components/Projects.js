import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  colorGreen,
  colorOrange,
  paperColor,
  backgroundColor,
} from "./PageStyles";
import Paper from "@material-ui/core/Paper";
import ProjectCard from "./ProjectCard";
import Toolbar from "./Toolbar";
import projectPages from "./projects";

const tableMargin = 1;

const useStyles = makeStyles((theme) => ({
  root: {
    background: backgroundColor,
  },
  title: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    color: colorOrange,
    fontWeight: "600",
    fontSize: "6em",
    paddingBottom: "3vh",
    paddingTop: "3vh",
    marginLeft: "1vw",
  },
  icon: {
    fontSize: "1em",
  },
  paper: {
    height: "5vh",
  },
  grid: {
    marginLeft: `${tableMargin}vw`,
    marginRight: `${tableMargin}vw`,
    width: `${100 - 2 * tableMargin}vw`,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <div className={classes.title}>> PROJECTS</div>

        <Grid container spacing={2} className={classes.grid}>
          {Object.entries(projectPages).map(([name, project]) => (
            <Grid item xs={4}>
              <ProjectCard name={name} project={project} key={name} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
