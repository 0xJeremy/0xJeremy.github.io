import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import {
  llnavy,
  colorGreen,
  orange,
  colorRed,
  colorBlue,
  colorYellow,
  lslate,
  llslate,
  StyledButton,
} from "./common";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    background: llnavy,
    color: lslate,
  },
  title: {
    fontSize: "2em",
    fontWeight: "600",
    color: orange,
  },
  description: {
    color: llslate,
  },
  media: {
    height: "30vh",
  },
  actions: {
    float: "right",
  },
  content: {
    // minHeight: '10vh'
    // height: '8vh'
  },
  hardware: {
    color: colorRed,
    borderColor: colorRed,
  },
  software: {
    color: colorBlue,
    borderColor: colorBlue,
  },
  pcb: {
    color: colorGreen,
    borderColor: colorGreen,
  },
  oss: {
    color: colorYellow,
    borderColor: colorYellow,
  },
  hackathon: {
    color: orange,
    borderColor: orange,
  },
  button: {
    float: "none",
    // fontSize: (props) => (props.thinScreen ? "0.8em" : "1em"),
    // marginRight: "2em",
    // padding: (props) =>
    //   props.thinScreen ? "6px 10px 6px 10px" : "12px 20px 12px 20px",
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const { name, project } = props;

  return (
    <Card className={classes.root}>
      <Link to={`projects/${name}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`static/projects/${name}/${project.coverImage}`}
            title={name}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom className={classes.title}>
              {project.title}
            </Typography>
            <Typography className={classes.description}>
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions className={classes.actions}>
        {project.tags.hardware && (
          <Chip
            variant="outlined"
            size="medium"
            className={classes.hardware}
            label="Hardware"
          />
        )}
        {project.tags.software && (
          <Chip
            variant="outlined"
            size="medium"
            className={classes.software}
            label="Software"
          />
        )}
        {project.tags.pcb && (
          <Chip
            variant="outlined"
            size="medium"
            className={classes.pcb}
            label="PCB Design"
          />
        )}
        {project.tags.oss && (
          <Chip
            variant="outlined"
            size="medium"
            className={classes.oss}
            label="Open-Source Library"
          />
        )}
        {project.tags.hackathon && (
          <Chip
            variant="outlined"
            size="medium"
            className={classes.hackathon}
            label="Hackathon Project"
          />
        )}
        <Link to={`projects/${name}`} style={{ textDecoration: "none" }}>
          <StyledButton
            className={classes.button}
            size="medium"
            variant="outlined"
          >
            View Project
          </StyledButton>
        </Link>
      </CardActions>
    </Card>
  );
}
