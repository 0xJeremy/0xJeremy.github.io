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

const title = "Meteorite Visualizer";
const coverImage = "meteorites.png";
const description =
  "This is a meteorite impact visualizer made for COMP-177 (Data Visualization) at Tufts in Spring 2020.";
const tags = {
  software: true,
};
const data = {
  github: "https://github.com/0xJeremy/Meteorite-Visualizer/",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/meteorites/meteorites.png`}
        alt=""
      />
      This project was made for COMP-177 (Data Visualization) at Tufts in Spring 2020.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
