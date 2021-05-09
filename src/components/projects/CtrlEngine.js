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

const title = "ctrl.engine";
const coverImage = "ctrlengine.png";
const description =
  "ctrl.engine is an open-source robotics library. It provides various tools in Python to make writing software for robotics easier and faster. It gives boilerplate multi-threaded code to multiple APIs and image processing tools.";
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
        src={`${imagePath}/ctrlengine/ctrlengine.png`}
        alt=""
      />
      This project was made for fun :) (and out of necessity)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
