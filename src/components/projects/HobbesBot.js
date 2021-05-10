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

const title = "HobbesBot";
const coverImage = "hobbesbot.jpeg";
const description =
  "This is a robotic puppet with 7 degrees of freedom called \"HobbesBot\" after the tiger in Calvin and Hobbes. It was the final project from ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts.";
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
        src={`${imagePath}/hobbesbot/hobbesbot.jpeg`}
        alt=""
      />
      This robot was made at Tufts Polyhack in 2017.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
