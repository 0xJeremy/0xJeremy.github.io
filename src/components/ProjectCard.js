import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import { Link } from "react-router-dom";
import {
  paperColor,
  colorGreen,
  colorOrange,
  colorRed,
  colorBlue,
} from "./PageStyles";

const ViewProjectButton = withStyles({
  root: {
    backgroundColor: colorOrange,
    borderColor: colorOrange,
    color: "white",
    fontFamily: [].join(","),
    "&:hover": {
      backgroundColor: "#F78200",
      borderColor: colorOrange,
      boxShadow: "none",
    },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    background: paperColor,
    color: colorOrange,
  },
  title: {
    fontSize: "2em",
    fontWeight: "600",
    color: colorOrange
  },
  description: {
    color: "white",
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
    borderColor: colorRed
  },
  software: {
    color: colorBlue,
    borderColor: colorBlue
  },
  pcb: {
    color: colorGreen,
    borderColor: colorGreen
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
        {project.tags.hardware &&
          <Chip variant="outlined" size="medium" className={classes.hardware} label="Hardware" />
        }
        {project.tags.software &&
          <Chip variant="outlined" size="medium" className={classes.software} label="Software" />
        }
        {project.tags.pcb &&
          <Chip variant="outlined" size="medium" className={classes.pcb} label="PCB Design" />
        }
        <Link to={`projects/${name}`} style={{ textDecoration: "none" }}>
          <ViewProjectButton size="medium" color="primary" variant="outlined">
            View Project
          </ViewProjectButton>
        </Link>
      </CardActions>
    </Card>
  );
}
