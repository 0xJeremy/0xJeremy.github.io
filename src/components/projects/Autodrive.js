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

const title = "Autodrive";
const coverImage = "autodrive.jpeg";
const description =
  "This is a project done for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. This robot drives autonomously using image processing with markers on the ground.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/autodrive/autodrive.jpeg`}
        alt=""
      />
      This project was made as part of the Tufts Robotics Club.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
