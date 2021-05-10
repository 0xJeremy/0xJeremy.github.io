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

const title = "Crawling Robot";
const coverImage = "crawler_isometric.JPG";
const description =
  'This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a "crawling robot", so we created a modular robot that rolls end over end.';
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/hw5",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/crawler/crawler_isometric.JPG`}
        alt=""
      />
      This robot was made for ME-134 (Advanced Robotics) at Tufts University in
      the Fall of 2020.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
