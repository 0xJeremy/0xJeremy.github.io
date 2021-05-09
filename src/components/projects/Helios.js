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

const title = "Helios Pi-Hat Robot Controller";
const coverImage = "Helios_Board.png";
const description =
  "This is a custom PCB Raspberry Pi hat designed to enable CAN bus communication and high-precision servo control. It can also supply power to the Pi.";

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/helios/Helios_Board.png`}
      />
      This PCB was made for fun :)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description };
