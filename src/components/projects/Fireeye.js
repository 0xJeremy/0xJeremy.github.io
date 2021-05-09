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

const title = "FireEye";
const coverImage = "fireeye.png";
const description =
  "FireEye is an open-source real-time socket communication library designed for low-latency video streaming from remote sources. It was designed to steam a Raspberry Pi camera to a webpage.";
const tags = {
  software: true,
  oss: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img className={classes.image} src={`${imagePath}/fireeye/fireeye.png`} />
      This project was made just for fun :)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
