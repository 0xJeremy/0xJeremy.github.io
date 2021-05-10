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

const title = "Drivable Couch";
const coverImage = "couch.png";
const description =
  "This is a project done as part of the Tufts Robotics club in which we built a drivable, remote-controlled couch. It's pretty much exactly what it sounds like.";
const tags = {
  software: true,
  hardware: true
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/couch/couch.png`}
        alt=""
      />
      This project was made as part of the Tufts Robotics Club.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
