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

const title = "Raspberry Pi Pico Oscilloscope";
const coverImage = "pico_oscilloscope.png";
const description =
  "This is an open-source project to turn the $4 Raspberry Pi Pico into a (reasonable) powerful 4-channel oscilloscope using the onboard analog to digital converters.";
const tags = {
  software: true,
};
const data = {
  github: "https://github.com/0xJeremy/Pico-Oscilloscope",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/pico_oscilloscope/pico_oscilloscope.png`}
        alt=""
      />
      This project was made for COMP-177 (Data Visualization) at Tufts in Spring
      2020.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
