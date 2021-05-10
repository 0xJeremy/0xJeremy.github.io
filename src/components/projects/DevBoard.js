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

const title = "STM32 Development Board";
const coverImage = "devboard.JPG";
const description =
  "This is a development breakout board for the STM32F405 series microcontroller. I made it to learn about PCB design and embedded microcontroller programming.";
const tags = {
  software: true,
  pcb: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/devboard/devboard.JPG`}
        alt=""
      />
      This development board was made as a practice project to learn about PCB
      design.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
