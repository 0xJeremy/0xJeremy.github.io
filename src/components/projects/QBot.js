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

const title = "QBot";
const coverImage = "qbot.jpeg";
const description =
  "QBot was a robot made as part of ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. It uses image recognition to respond to commands from QR codes.";
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
        src={`${imagePath}/qbot/qbot.jpeg`}
        alt=""
      />
      This robot was made for ME-84.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
