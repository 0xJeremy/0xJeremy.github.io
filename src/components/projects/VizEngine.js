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

const title = "viz.engine";
const coverImage = "vizengine.png";
const description =
  "viz.engine is an open-source library and framework for robot user-interfaces. It is designed to give real-time feedback about the state of the robot and provide a control interface.";
const tags = {
  software: true,
  oss: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/vizengine/vizengine.png`}
        alt=""
      />
      This project was made for fun :) (and out of necessity)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
