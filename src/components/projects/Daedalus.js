import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from './ProjectCommon';

const useStyles = makeStyles((theme) => ({
  image: {
    width: "75%",
    display: "block",
    paddingBottom: "2vh",
  },
}));

const title = "Daedalus BLDC Motor Controller";
const coverImage = "Daedalus_Brackets_Board.png";
const description =
  "This is a custom PCB designed to drive high-speed, high-power brushless motors. It includes current monitoring and positional feedback, turning the brushless motor into a high-torque servo motor.";
const tags = {
  pcb: true,
}

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/daedalus/Daedalus_Brackets_Board.png`}
      />
      This PCB was made for fun :)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
