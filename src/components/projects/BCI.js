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

const title = "Tufts BCI Team";
const coverImage = "bci.png";
const description =
  "As part of the Tufts BCI (Brain-Computer Interface) team, I created a user-interface for viewing real-time brain activity on a 3D model. Data can be streamed from a remote sensor to the page.";
const tags = {
  software: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img className={classes.image} src={`${imagePath}/bci/bci.png`} alt="" />
      This project was made just for fun :)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
