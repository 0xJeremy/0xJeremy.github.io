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

const title = "Icarus Power Distribution Board";
const coverImage = "Icarus_Board.png";
const description =
  "This is a custom PCB power distribution board designed for use with the Daedalus BLDC motor controller for driving high-current motors and the Helios Raspberry Pi hat. It has 6 power breakouts.";
const tags = {
  pcb: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/icarus/Icarus_Board.png`}
      />
      This PCB was made for fun :)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
