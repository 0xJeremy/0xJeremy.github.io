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

const title = "MLE (My Little Eye)";
const coverImage = "mle.png";
const description =
  "MLE (My Little Eye) was part of a hackathon project at HackMIT where we created a fleet of semi-autonomous robots that track down lost objects for people with vision and mobility impairments.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img className={classes.image} src={`${imagePath}/mle/mle.png`} alt="" />
      This project was made just for fun :)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
