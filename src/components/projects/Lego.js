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

const title = "LEGO Robots";
const coverImage = "lego.jpeg";
const description =
  "These are a series of LEGO robots made for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts University.";
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
        src={`${imagePath}/lego/lego.jpeg`}
        alt=""
      />
      These robots were made for ME-84.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
