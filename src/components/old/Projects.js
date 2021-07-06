import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  orange,
  navy,
  colorBlue,
  colorGreen,
  colorYellow,
  colorRed,
  fontMono,
} from "../PageStyles";
import ProjectCard from "./ProjectCard";
import Toolbar from "../Toolbar";
import Chip from "@material-ui/core/Chip";
import projectPages from "../projects";

const tableMargin = 1;
const disabledColor = "#888888";
const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  root: {
    background: navy,
  },
  title: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    color: orange,
    fontWeight: "600",
    fontSize: "8vh",
    paddingBottom: "3vh",
    paddingTop: "3vh",
    marginLeft: "1vw",
    fontFamily: fontMono,
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
  gridItem: {
    // top: 0,
    // position: 'relative',
    // transition: '0.3s',
    // "&:hover": {
    //   top: '-8px',
    // }
  },
  hardware: {
    color: (props) => (props.filter.hardware ? colorRed : disabledColor),
    borderColor: (props) => (props.filter.hardware ? colorRed : disabledColor),
    marginLeft: "5vw",
    marginTop: (props) => (props.smallScreen ? "2vh" : 0),
  },
  software: {
    color: (props) => (props.filter.software ? colorBlue : disabledColor),
    borderColor: (props) => (props.filter.software ? colorBlue : disabledColor),
    marginLeft: "1.5vw",
    marginTop: (props) => (props.smallScreen ? "2vh" : 0),
  },
  pcb: {
    color: (props) => (props.filter.pcb ? colorGreen : disabledColor),
    borderColor: (props) => (props.filter.pcb ? colorGreen : disabledColor),
    marginLeft: "1.5vw",
    marginTop: (props) => (props.smallScreen ? "2vh" : 0),
  },
  oss: {
    color: (props) => (props.filter.oss ? colorYellow : disabledColor),
    borderColor: (props) => (props.filter.oss ? colorYellow : disabledColor),
    marginLeft: "1.5vw",
    marginTop: (props) => (props.smallScreen ? "2vh" : 0),
  },
  hackathon: {
    color: (props) => (props.filter.hackathon ? orange : disabledColor),
    borderColor: (props) =>
      props.filter.hackathon ? orange : disabledColor,
    marginLeft: "1.5vw",
    marginTop: (props) => (props.smallScreen ? "2vh" : 0),
  },
}));

export default function Projects() {
  const [filter, setFilter] = React.useState({
    software: true,
    hardware: true,
    pcb: true,
    oss: true,
    hackathon: true,
  });
  const classes = useStyles({ filter, smallScreen });
  const gridSize = smallScreen ? 12 : 4;

  useEffect(() => {
    document.title = "Projects | Jeremy Kanovsky";
    window.scrollTo(0, 0);
  });

  const handleClick = (tag) => {
    setFilter({ ...filter, [tag]: !filter[tag] });
  };

  const showProject = (project) => {
    for (const [key] of Object.entries(project.tags)) {
      if (!filter[key]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <div className={classes.title}>
          > Projects
          <Chip
            variant="outlined"
            label="Hardware"
            className={classes.hardware}
            onClick={() => handleClick("hardware")}
          />
          <Chip
            variant="outlined"
            label="Software"
            className={classes.software}
            onClick={() => handleClick("software")}
          />
          <Chip
            variant="outlined"
            label="PCB Design"
            className={classes.pcb}
            onClick={() => handleClick("pcb")}
          />
          <Chip
            variant="outlined"
            label="Open-Source Library"
            className={classes.oss}
            onClick={() => handleClick("oss")}
          />
          <Chip
            variant="outlined"
            label="Hackathon Project"
            className={classes.hackathon}
            onClick={() => handleClick("hackathon")}
          />
        </div>

        <Grid container spacing={2} className={classes.grid}>
          {Object.entries(projectPages).map(([name, project]) => {
            if (showProject(project)) {
              return (
                <Grid className={classes.gridItem} item xs={gridSize} key={name}>
                  <ProjectCard name={name} project={project} key={name} />
                </Grid>
              );
            }
            return <div />;
          })}
        </Grid>
      </div>
    </div>
  );
}
