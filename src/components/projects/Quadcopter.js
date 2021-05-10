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

const title = "Quadcopter UAV";
const coverImage = "quadcopter.jpeg";
const description =
  "This is a quadcopter UAV made with the Tufts MAKE club. It was originally designed to be semi-autonomous.";
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
        src={`${imagePath}/quadcopter/quadcopter.jpeg`}
        alt=""
      />
      This quadcopter was made with Tufts MAKE.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
