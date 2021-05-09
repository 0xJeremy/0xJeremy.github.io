import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectTemplate from "./ProjectTemplate";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "75%",
    display: "block",
    paddingBottom: '2vh',
  },
}));

const title = "Hexapod (v1)";
const coverImage = 'hexapod_isometric.JPG';
const description = 'This was the final project for Tufts ME-134 (Advanced Robotics) in Fall 2020. We were tasked with creating a robot that could navigate an obstacle course (containing a tunnel, wall, and rough terrain) autonomously.'

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src="/static/projects/hexapod/hexapod_isometric.JPG"
      />
      This robot was made for ME-134 (Advanced Robotics) at Tufts University in the Fall of 2020.
    </ProjectTemplate>
  );
}

export { 
	Component,
	title,
	coverImage,
	description,
};
