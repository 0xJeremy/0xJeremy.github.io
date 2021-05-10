import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "75%",
    display: "block",
    paddingBottom: "2vh",
  },
}));

const title = "Drawing Robot";
const coverImage = "drawing_isometric.JPG";
const description =
  "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a robotic arm capable of writing our initials.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/hw3/v2",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/drawing_robot/drawing_isometric.JPG`}
        alt=""
      />
      This robot was made for ME-134 (Advanced Robotics) at Tufts University in
      the Fall of 2020.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
