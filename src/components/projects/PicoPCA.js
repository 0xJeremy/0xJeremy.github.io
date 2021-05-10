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

const title = "Raspberry Pi Pico Servo Driver";
const coverImage = "pico_pca.JPG";
const description =
  "This is a PCB daughterboard for the Raspberry Pi Pico that carries a PCB9685 16 channel servo-driver.";
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
        src={`${imagePath}/pico_pca/pico_pca.JPG`}
        alt=""
      />
      This project was made as part of Tufts ME-193 MPP (Micro-Controller
      Projects) in the Spring of 2021.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
