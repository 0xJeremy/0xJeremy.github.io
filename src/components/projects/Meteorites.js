import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";
import { colorBlue } from "../PageStyles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: colorBlue,
  },
}));

const title = "Meteorite Visualizer";
const path = "meteorites";
const coverImage = "meteorites.png";
const description =
  "This is a meteorite impact visualizer made for COMP-177 (Data Visualization) at Tufts in Spring 2020.";
const tags = {
  software: true,
};
const technology = ["React.js", "Visualization", "Heroku"];
const data = {
  github: "https://github.com/0xJeremy/Meteorite-Visualizer/",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <Images images={[`${imagePath}/meteorites/meteorites.png`]} />
      This website was made as the final project in Tufts COMP-177 Data
      Visualization in the Spring of 2020. The prompt was to create a website to
      display a dataset in a number of different ways, and to allow the user to
      explore the dataset. We used a dataset provided by NASA which lists all
      the known meteorite impacts on Earth dating back to the 1800s. We built
      the site with React.js and D3.js. It can be viewed live at{" "}
      <a
        href="http://www.lab84.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        lab84.org
      </a>
      .
    </ProjectTemplate>
  );
}

export {
  Component,
  title,
  path,
  coverImage,
  description,
  technology,
  tags,
  data,
};
